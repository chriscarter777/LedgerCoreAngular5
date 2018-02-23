import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Account, Category, LedgerLine, Payee, Transaction } from '../../../shared/interfaces';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.css']
})

export class TransactionListComponent {
    accounts: Account[];
    acctAsset: Account[];
    acctLiability: Account[];
    categories: Category[];
    displayLines: LedgerLine[];
    lines: LedgerLine[];
    payees: Payee[];
    transactions: Transaction[];

    form: FormGroup;
    acctFilter: FormControl = new FormControl();
    amountMax: FormControl = new FormControl();
    amountMin: FormControl = new FormControl();
    catFilter: FormControl = new FormControl();
    checkMax: FormControl = new FormControl();
    checkMin: FormControl = new FormControl();
    dateMax: FormControl = new FormControl();
    dateMin: FormControl = new FormControl();
    payeeFilter: FormControl = new FormControl();
    taxFilter: FormControl = new FormControl();



    constructor(private dataService: DataService) {

    }  //ctor

    ngOnInit() {
        this.dataService.accounts.subscribe((accounts) => {
            this.accounts = accounts
            this.acctAsset = this.dataService.AssetAccounts();
            this.acctLiability = this.dataService.LiabilityAccounts();
        });
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.dataService.categories.subscribe((categories) => this.categories = categories);
        this.dataService.payees.subscribe((payees) => this.payees = payees);
        this.dataService.transactions.subscribe((transactions) => {
            this.transactions = transactions;
            this.constructLines();
        });
        this.instantiateForm(this.acctFilter, this.amountMax, this.amountMin, this.catFilter, this.checkMax, this.checkMin, this.dateMax, this.dateMin, this.payeeFilter, this.taxFilter);
    }

    accountName(accountId: number) {
        return this.accounts.find((element) => element.id === accountId).name;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
    }

    constructLines(){
        this.lines = [];
        this.transactions.forEach((transaction: Transaction, tidx) => {
            this.lines.push({ assets: 0, balances: [], liabilities: 0, net: 0, transaction: transaction });
            this.accounts.forEach((account: Account, aidx) => {
                if (tidx === 0) {
                    if (transaction.acctFrom === account.id) {
                        this.lines[tidx].balances[aidx] = (-1) * transaction.amount;
                    } else if (transaction.acctTo === account.id) {
                        this.lines[tidx].balances[aidx] = transaction.amount;
                    } else {
                        this.lines[tidx].balances[aidx] = 0;
                    }
                } else {
                    if (transaction.acctFrom === account.id) {
                        this.lines[tidx].balances[aidx] = this.lines[tidx - 1].balances[aidx] - transaction.amount;
                    } else if (transaction.acctTo === account.id) {
                        this.lines[tidx].balances[aidx] = this.lines[tidx - 1].balances[aidx] + transaction.amount;
                    } else {
                        this.lines[tidx].balances[aidx] = this.lines[tidx - 1].balances[aidx];
                    }
                }
                this.lines[tidx].assets = this.lines[tidx].assets + this.lines[tidx].balances[aidx];
                this.lines[tidx].net = this.lines[tidx].net + this.lines[tidx].balances[aidx];
            });
        });
        this.displayLines = this.lines;
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    onDelete(id: number): void {
        var result: Transaction;
        var indextToDelete = this.transactions.findIndex((element) => element.id === id);
        var dateToDelete = this.transactions[indextToDelete].date;
        var confirmation = confirm('Are you sure you want to delete transaction on ' + dateToDelete + '?');
        if (confirmation) { this.dataService.deleteAccount(id); };
    }

    onFlag0Toggle(id: number) {
        var targetIdx: number = this.transactions.findIndex((t) => t.id === id);
        if (this.transactions[targetIdx].flag0) {
            this.transactions[targetIdx].flag0 = false;
        } else {
            this.transactions[targetIdx].flag0 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    }

    onFlag1Toggle(id: number) {
        var targetIdx: number = this.transactions.findIndex((t) => t.id === id);
        if (this.transactions[targetIdx].flag1) {
            this.transactions[targetIdx].flag1 = false;
        } else {
            this.transactions[targetIdx].flag1 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    }

    onFlag2Toggle(id: number) {
        var targetIdx: number = this.transactions.findIndex((t) => t.id === id);
        if (this.transactions[targetIdx].flag2) {
            this.transactions[targetIdx].flag2 = false;
        } else {
            this.transactions[targetIdx].flag2 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    }

    onFlag3Toggle(id: number) {
        var targetIdx: number = this.transactions.findIndex((t) => t.id === id);
        if (this.transactions[targetIdx].flag3) {
            this.transactions[targetIdx].flag3 = false;
        } else {
            this.transactions[targetIdx].flag3 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    }

    onReconciledToggle(id: number) {
        var targetIdx: number = this.transactions.findIndex((t) => t.id === id);
        if (this.transactions[targetIdx].reconciled) {
            this.transactions[targetIdx].reconciled = false;
        } else {
            this.transactions[targetIdx].reconciled = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    }

    instantiateForm(acctFilter: FormControl, amountMax: FormControl, amountMin: FormControl, catFilter: FormControl, checkMax: FormControl, checkMin: FormControl, dateMax: FormControl, dateMin: FormControl, payeeFilter: FormControl, taxFilter: FormControl) {
        this.form = new FormGroup({
            acctFilter,
            amountMax,
            amountMin,
            catFilter,
            checkMax,
            checkMin,
            dateMax,
            dateMin,
            payeeFilter,
            taxFilter,
        });
    }

    onSubmit() {
        this.displayLines = this.lines;
        if (this.form.get('acctFilter').value !== null) {
            this.displayLines = this.displayLines.filter((line) => line.transaction.acctFrom === this.form.get('acctFilter').value || line.transaction.acctTo === this.form.get('acctFilter').value);
        }
        if (this.form.get('amountMax').value !== null) {
            this.displayLines = this.displayLines.filter((line) => line.transaction.amount <= this.form.get('amountMax').value);
        }
        if (this.form.get('amountMin').value !== null) {
            this.displayLines = this.displayLines.filter((line) => line.transaction.amount >= this.form.get('amountMin').value);
        }
        if (this.form.get('catFilter').value !== null) {
            var catArray: number[] = this.form.get('catFilter').value;
            this.displayLines = this.displayLines.filter((line) => catArray.some((element) => element === line.transaction.category));
        }
        if (this.form.get('checkMax').value !== null) {
            this.displayLines = this.displayLines.filter((line) => line.transaction.check !== null);
            this.displayLines = this.displayLines.filter((line) => line.transaction.check <= this.form.get('checkMax').value);
        }
        if (this.form.get('checkMin').value !== null) {
            this.displayLines = this.displayLines.filter((line) => line.transaction.check !== null);
            this.displayLines = this.displayLines.filter((line) => line.transaction.check >= this.form.get('checkMin').value);
        }
        if (this.form.get('dateMax').value !== null) {
            this.displayLines = this.displayLines.filter((line) => line.transaction.date <= this.form.get('dateMax').value);
        }
        if (this.form.get('dateMin').value !== null) {
            this.displayLines = this.displayLines.filter((line) => line.transaction.date >= this.form.get('dateMin').value);
        }
        if (this.form.get('payeeFilter').value !== null) {
            var payArray: string[] = this.form.get('payeeFilter').value;
            this.displayLines = this.displayLines.filter((line) => payArray.some((element) => element === line.transaction.payeeFrom || element === line.transaction.payeeTo));
        }
        if (this.form.get('taxFilter').value === null) {
            this.displayLines = this.displayLines.filter((line) => line.transaction.tax === true);
        }
    }

    onResetFilter() {
        this.acctFilter.setValue(null);
        this.amountMax.setValue(null);
        this.amountMin.setValue(null);
        this.catFilter.setValue(null);
        this.checkMax.setValue(null);
        this.checkMin.setValue(null);
        this.dateMax.setValue(null);
        this.dateMin.setValue(null);
        this.payeeFilter.setValue(null);
        this.taxFilter.setValue(null);
        this.onSubmit();
    }
}

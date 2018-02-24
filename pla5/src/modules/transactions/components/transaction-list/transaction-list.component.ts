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
    displayAcctIndices: number[];
    displayLineIndices: number[];
    lines: LedgerLine[];
    payees: Payee[];
    transactions: Transaction[];

    filterForm: FormGroup;
    acctFilter: FormControl = new FormControl();
    amountMax: FormControl = new FormControl();
    amountMin: FormControl = new FormControl();
    catFilter: FormControl = new FormControl();
    checkMax: FormControl = new FormControl();
    checkMin: FormControl = new FormControl();
    dateMax: FormControl = new FormControl();
    dateMin: FormControl = new FormControl();
    f0Filter: FormControl = new FormControl();
    f1Filter: FormControl = new FormControl();
    f2Filter: FormControl = new FormControl();
    f3Filter: FormControl = new FormControl();
    payeeFilter: FormControl = new FormControl();
    taxFilter: FormControl = new FormControl();

    showFilter: boolean = false;


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
        //on initialization, every index in the reference arrays is displayed
        this.displayAcctIndices = Array.from(new Array(this.accounts.length), (x, i) => i);
        this.displayLineIndices = Array.from(new Array(this.lines.length), (x, i) => i);
        this.instantiateForm(this.acctFilter, this.amountMax, this.amountMin, this.catFilter, this.checkMax, this.checkMin, this.dateMax, this.dateMin, this.f0Filter, this.f1Filter, this.f2Filter, this.f3Filter, this.payeeFilter, this.taxFilter);
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
                if (account.acctType === "Asset") {
                    this.lines[tidx].assets = this.lines[tidx].assets + this.lines[tidx].balances[aidx];
                }
                if (account.acctType === "Liability") {
                    this.lines[tidx].liabilities = this.lines[tidx].liabilities - this.lines[tidx].balances[aidx];
                }
                this.lines[tidx].net = this.lines[tidx].net + this.lines[tidx].balances[aidx];
            });
        });
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

    instantiateForm(acctFilter: FormControl, amountMax: FormControl, amountMin: FormControl, catFilter: FormControl, checkMax: FormControl, checkMin: FormControl, dateMax: FormControl, dateMin: FormControl, f0Filter: FormControl, f1Filter: FormControl, f2Filter: FormControl, f3Filter: FormControl, payeeFilter: FormControl, taxFilter: FormControl) {
        this.filterForm = new FormGroup({
            acctFilter,
            amountMax,
            amountMin,
            catFilter,
            checkMax,
            checkMin,
            dateMax,
            dateMin,
            f0Filter,
            f1Filter,
            f2Filter,
            f3Filter,
            payeeFilter,
            taxFilter,
        });
    }

    onFilterSubmit() {
        //start with display arrays which point to every index in their reference arrays
        this.displayAcctIndices = Array.from(new Array(this.accounts.length), (x, i) => i);
        this.displayLineIndices = Array.from(new Array(this.lines.length), (x, i) => i);
        //and repetitively filter from there
        if (this.filterForm.get('acctFilter').value !== null) {
            var selectedAccountId: number = this.filterForm.get('acctFilter').value;
            var selectedAccountIndex: number = this.accounts.findIndex((account) => account.id == selectedAccountId);
            this.displayAcctIndices = [selectedAccountIndex];
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.acctFrom == selectedAccountId || this.lines[idx].transaction.acctTo == selectedAccountId);
        }
        if (this.filterForm.get('amountMax').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.amount <= this.filterForm.get('amountMax').value);
        }
        if (this.filterForm.get('amountMin').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.amount >= this.filterForm.get('amountMin').value);
        }
        if (this.filterForm.get('catFilter').value !== null) {
            var catArray: number[] = [this.filterForm.get('catFilter').value];
            this.displayLineIndices = this.displayLineIndices.filter((idx) => catArray.some((element) => element == this.lines[idx].transaction.category));
        }
        if (this.filterForm.get('checkMax').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.check !== null);
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.check <= this.filterForm.get('checkMax').value);
        }
        if (this.filterForm.get('checkMin').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.check !== null);
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.check >= this.filterForm.get('checkMin').value);
        }
        if (this.filterForm.get('dateMax').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.date <= this.filterForm.get('dateMax').value);
        }
        if (this.filterForm.get('dateMin').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.date >= this.filterForm.get('dateMin').value);
        }
        if (this.filterForm.get('f0Filter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.flag0 === true);
        }
        if (this.filterForm.get('f1Filter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.flag1 === true);
        }
        if (this.filterForm.get('f2Filter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.flag2 === true);
        }
        if (this.filterForm.get('f3Filter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.flag3 === true);
        }
        if (this.filterForm.get('payeeFilter').value !== null) {
            var payArray: string[] = [this.filterForm.get('payeeFilter').value];
            this.displayLineIndices = this.displayLineIndices.filter((idx) => payArray.some((element) => element == this.lines[idx].transaction.payeeFrom || element == this.lines[idx].transaction.payeeTo));
        }
        if (this.filterForm.get('taxFilter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter((idx) => this.lines[idx].transaction.tax === true);
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
        this.f0Filter.setValue(null);
        this.f1Filter.setValue(null);
        this.f2Filter.setValue(null);
        this.f3Filter.setValue(null);
        this.payeeFilter.setValue(null);
        this.taxFilter.setValue(null);
    }

    onHideFilter() {
        this.showFilter = false;
    }

    onShowFilter() {
        this.showFilter = true;
    }

}

import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Account, Category, LedgerLine, Payee, Transaction } from '../../../shared/interfaces';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'report-list',
    templateUrl: './report-list.component.html',
    styleUrls: ['./report-list.component.css']
})

export class ReportListComponent {
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

    showFilter: boolean = true;

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
        });
        this.instantiateForm(this.acctFilter, this.amountMax, this.amountMin, this.catFilter, this.checkMax, this.checkMin, this.dateMax, this.dateMin, this.payeeFilter, this.taxFilter);
    }

    accountName(accountId: number) {
        return this.accounts.find((element) => element.id === accountId).name;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    onSubmit() {
        alert('submit');
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
        alert('reset');
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

    onHideFilter() {
        this.showFilter = false;
    }

    onShowFilter() {
        this.showFilter = true;
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
}

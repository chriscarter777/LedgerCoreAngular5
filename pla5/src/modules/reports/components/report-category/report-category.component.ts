import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Account, Category, LedgerLine, Payee, Transaction } from '../../../shared/interfaces';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'report-category',
    templateUrl: './report-category.component.html',
    styleUrls: ['./report-category.component.css']
})

export class ReportCategoryComponent {
    accounts: Account[];
    acctAsset: Account[];
    acctLiability: Account[];
    categories: Category[];
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

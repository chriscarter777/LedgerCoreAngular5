import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MatAutocomplete, MatInput, MatFormField, MatOption } from '@angular/material';
import { DataService } from '../../../shared/data.service';
import { Account, Category, Transaction } from '../../../shared/interfaces';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
    selector: 'transaction-add',
    templateUrl: './transaction-add.component.html',
    styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent {
    accounts: Account[];
    acctAsset: Account[];
    acctLiability: Account[];
    acctPayee: Account[];
    categories: Category[];

    newTransaction: Transaction = this.freshNewTransaction();

    form: FormGroup;
    amount: FormControl = new FormControl(this.newTransaction.amount);
    category: FormControl = new FormControl(this.newTransaction.category);
    crAcct: FormControl = new FormControl(this.newTransaction.crAcct);
    date: FormControl = new FormControl(this.newTransaction.date);
    drAcct: FormControl = new FormControl(this.newTransaction.drAcct);
    tax: FormControl = new FormControl(this.newTransaction.tax);

    filteredCategories: Observable<Category[]>;

    constructor(
        private route: ActivatedRoute,
        private dataService: DataService,
        private location: Location
    ) { }

    ngOnInit() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        };
        document.getElementById("addlink").setAttribute("disabled", "true");



        Promise.all([this.getAccounts(), this.getCategories()])
            .then(() => this.acctAsset = this.accounts.filter(c => c.owned && c.acctType === "Asset"))
            .then(() => this.acctLiability = this.accounts.filter(c => c.owned && c.acctType === "Liability"))
            .then(() => this.acctPayee = this.accounts.filter(c => !c.owned))
            .then(() => this.instantiateForm(this.amount, this.category, this.crAcct, this.date, this.drAcct, this.tax))
            .then(() => this.filteredCategories = this.category.valueChanges.pipe(startWith(''), map(val => this.categoryFilter(val))))
    };

    ngOnDestroy() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        };
        document.getElementById("addlink").removeAttribute("disabled");
    }


    accountName(accountId: number) {
        return this.accounts.find((element) => element.id === accountId).name;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
    }


    instantiateForm(amount: FormControl, category: FormControl, crAcct: FormControl, date: FormControl, drAcct: FormControl, tax: FormControl) {
        this.form = new FormGroup({
            amount,
            category,
            crAcct,
            date,
            drAcct,
            tax,
        });
    }

    categoryFilter(val: string): Category[] {
        return this.categories.filter(category =>
            category.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    freshNewTransaction() {
        return { id: null, amount: 0, category: 0, crAcct: 0, date: new Date().toLocaleDateString(), drAcct: 0, tax: false }
    }

    getAccounts() {
        return new Promise(resolve => {
            this.dataService.getAccounts().subscribe(
                accounts => {
                    this.accounts = accounts;
                    resolve(accounts);
                },
                error => {
                    alert("there was an error getting accounts.");
                }
            )
        })
    }

    getCategories() {
        return new Promise(resolve => {
            this.dataService.getCategories().subscribe(
                categories => {
                    this.categories = categories;
                    resolve(categories);
                },
                error => {
                    alert("there was an error getting categories.");
                }
            )
        })
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.form.get('category').value;
        this.newTransaction.crAcct = this.form.get('crAcct').value;
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.drAcct = this.form.get('drAcct').value;
        this.newTransaction.tax = this.form.get('tax').value;
        this.dataService.addTransaction(this.newTransaction);
        //reset
        this.ngOnInit();
        this.goBack();
    }
}

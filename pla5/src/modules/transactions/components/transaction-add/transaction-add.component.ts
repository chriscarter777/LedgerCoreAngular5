import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MatAutocomplete, MatInput, MatFormField, MatOption } from '@angular/material';
import { DataService } from '../../../shared/data.service';
import { Account, Category, Payee, Transaction } from '../../../shared/interfaces';
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
    categories: Category[];
    payees: Payee[];
    filteredCategoryNames: Observable<string[]>;
    newTransaction: Transaction = this.freshNewTransaction();
    form: FormGroup;
    acctFrom: FormControl = new FormControl();
    acctTo: FormControl = new FormControl();
    amount: FormControl = new FormControl();
    category: FormControl = new FormControl();
    date: FormControl = new FormControl(this.newTransaction.date);
    payeeFrom: FormControl = new FormControl();
    payeeTo: FormControl = new FormControl();
    tax: FormControl = new FormControl();


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

        Promise.all([this.getAccounts(), this.getCategories(), this.getPayees()])
            .then(() => this.acctAsset = this.accounts.filter(c => c.acctType === "Asset"))
            .then(() => this.acctLiability = this.accounts.filter(c => c.acctType === "Liability"))
            .then(() => this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.date, this.payeeFrom, this.payeeTo, this.tax))
            .then(() => this.filteredCategoryNames = this.category.valueChanges.pipe(startWith(''), map(val => this.categoryFilter(val))))
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

    categoryId(categoryName: string) {
        return this.categories.find((element) => element.name === categoryName).id;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
    }


    instantiateForm(acctFrom: FormControl, acctTo: FormControl, amount: FormControl, category: FormControl, date: FormControl, payeeFrom: FormControl, payeeTo: FormControl, tax: FormControl) {
        this.form = new FormGroup({
            acctFrom,
            acctTo,
            amount,
            category,
            date,
            payeeFrom,
            payeeTo,
            tax,
        });
    }

    categoryFilter(val: string): string[] {
        return this.categories.filter(category =>
            category.name.toLowerCase().indexOf(val.toLowerCase()) === 0).map(category => category.name);
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    freshNewTransaction() {
        return { id: null, amount: 0, category: 0, acctFrom: 0, acctTo: 0, date: new Date().toLocaleDateString(), payeeFrom: 0, payeeTo: 0, tax: false }
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

    getPayees(): void {
        this.dataService.getPayees().subscribe(
            payees => this.payees = payees,
            error => alert("there was an error getting payees.")
        );
    }

   goBack(): void {
        this.location.back();
    }

    onSubmit() {
        //set data from the form
        this.newTransaction.acctFrom = this.form.get('acctFrom').value;
        this.newTransaction.acctTo = this.form.get('acctTo').value;
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.categoryId(this.form.get('category').value);
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.payeeFrom = this.form.get('payeeFrom').value;
        this.newTransaction.payeeTo = this.form.get('payeeTo').value;
        this.newTransaction.tax = this.form.get('tax').value;
        //add the transaction
        this.dataService.addTransaction(this.newTransaction);
        //reset and close
        this.ngOnInit();
        this.goBack();
   }

    payeeName(payeeId: number) {
        return this.payees.find((element) => element.id === payeeId).name;
    }

}

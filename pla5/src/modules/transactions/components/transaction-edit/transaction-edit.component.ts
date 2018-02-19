import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { MatAutocomplete, MatInput, MatFormField, MatOption } from '@angular/material';
import { Account, Category, Payee, Transaction } from '../../../shared/interfaces';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
    selector: 'transaction-edit',
    templateUrl: './transaction-edit.component.html',
    styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent {
    accounts: Account[];
    acctAsset: Account[];
    acctLiability: Account[];
    categories: Category[];
    payees: Payee[];
    filteredCategoryNames: Observable<string[]>;
    editTransaction: Transaction;
    form: FormGroup;
    acctFrom: FormControl;
    acctTo: FormControl;
    amount: FormControl;
    category: FormControl;
    date: FormControl;
    payeeFrom: FormControl;
    payeeTo: FormControl;
    tax: FormControl;


    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        };
        document.getElementById("addlink").setAttribute("disabled", "true");

        const id = +this.route.snapshot.paramMap.get('id');

        Promise.all([this.getAccounts(), this.getCategories(), this.getPayees(), this.getTransaction(id)])
            .then(() => this.acctAsset = this.accounts.filter(c => c.acctType === "Asset"))
            .then(() => this.acctLiability = this.accounts.filter(c => c.acctType === "Liability"))
            .then(() => this.instantiateControls())
            .then(() => this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.date, this.payeeFrom, this.payeeTo, this.tax))
            .then(() => this.filteredCategoryNames = this.category.valueChanges.pipe(startWith(''), map(val => this.categoryFilter(val))))
    }

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

    categoryFilter(val: string): string[] {
        return this.categories.filter(category =>
            category.name.toLowerCase().indexOf(val.toLowerCase()) === 0).map(category => category.name);
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    instantiateControls() {
        this.acctFrom = new FormControl(this.editTransaction.acctFrom);
        this.acctTo = new FormControl(this.editTransaction.acctTo);
        this.amount = new FormControl(this.editTransaction.amount);
        this.category = new FormControl(this.categoryName(this.editTransaction.category));
        this.date = new FormControl(this.editTransaction.date);
        this.payeeFrom = new FormControl(this.editTransaction.payeeFrom);
        this.payeeTo = new FormControl(this.editTransaction.payeeTo);
        this.tax = new FormControl(this.editTransaction.tax);
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

    getTransaction(id) {
        return new Promise(resolve => {
            this.dataService.getTransaction(id).subscribe(
                transaction => {
                    this.editTransaction = transaction;
                    resolve(transaction);
                },
                error => {
                    alert("there was an error getting transaction.");
                }
            )
        })
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        //set data from the form
        this.editTransaction.acctFrom = this.form.get('acctFrom').value;
        this.editTransaction.acctTo = this.form.get('acctTo').value;
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.categoryId(this.form.get('category').value);
        this.editTransaction.date = this.form.get('date').value;
        this.editTransaction.payeeFrom = this.form.get('payeeFrom').value;
        this.editTransaction.payeeTo = this.form.get('payeeTo').value;
        this.editTransaction.tax = this.form.get('tax').value;
        //update the transaction
        this.dataService.updateTransaction(this.editTransaction);
        //reset and close
        this.ngOnInit();
        this.goBack();
    }

    payeeName(payeeId: number) {
        return this.payees.find((element) => element.id === payeeId).name;
    }

}

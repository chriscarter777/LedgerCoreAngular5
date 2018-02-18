import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { MatAutocomplete, MatInput, MatFormField, MatOption } from '@angular/material';
import { Account, Category, Transaction } from '../../../shared/interfaces';
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
    acctPayee: Account[];
    categories: Category[];
    filteredCategoryNames: Observable<string[]>;
    editTransaction: Transaction;
    form: FormGroup;
    acctFrom: FormControl;
    acctTo: FormControl;
    amount: FormControl;
    category: FormControl;
    date: FormControl;
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

        Promise.all([this.getAccounts(), this.getCategories(), this.getTransaction(id)])
            .then(() => this.acctAsset = this.accounts.filter(c => c.owned && c.acctType === "Asset"))
            .then(() => this.acctLiability = this.accounts.filter(c => c.owned && c.acctType === "Liability"))
            .then(() => this.acctPayee = this.accounts.filter(c => !c.owned))
            .then(() => this.instantiateControls())
            .then(() => this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.date, this.tax))
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
        this.tax = new FormControl(this.editTransaction.tax);
    }

    instantiateForm(acctFrom: FormControl, acctTo: FormControl, amount: FormControl, category: FormControl, date: FormControl, tax: FormControl) {
        this.form = new FormGroup({
            amount,
            category,
            acctFrom,
            date,
            acctTo,
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
        alert(this.form.get('category').value);
        this.editTransaction.date = this.form.get('date').value;
        this.editTransaction.tax = this.form.get('tax').value;
        //update the transaction
        this.dataService.updateTransaction(this.editTransaction);
        //reset and close
        this.ngOnInit();
        this.goBack();
    }
}

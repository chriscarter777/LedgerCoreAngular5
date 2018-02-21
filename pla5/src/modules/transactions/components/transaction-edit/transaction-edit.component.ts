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
    filteredPayeeFromNames: Observable<string[]>;
    filteredPayeeToNames: Observable<string[]>;
    editTransaction: Transaction;
    form: FormGroup;
    acctFrom: FormControl;
    acctTo: FormControl;
    amount: FormControl;
    category: FormControl;
    comments: FormControl;
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

        this.accounts = this.dataService.Accounts();
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.categories = this.dataService.Categories();
        this.payees = this.dataService.Payees();
        this.editTransaction = this.dataService.Transaction(id);
        this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.comments, this.date, this.payeeFrom, this.payeeTo, this.tax);
        this.filteredCategoryNames = this.category.valueChanges.pipe(startWith(''), map(val => this.categoryFilter(val)));
        this.filteredPayeeFromNames = this.payeeFrom.valueChanges.pipe(startWith(''), map(val => this.payeeFilter(val)));
        this.filteredPayeeToNames = this.payeeTo.valueChanges.pipe(startWith(''), map(val => this.payeeFilter(val)));
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

    categoryFilter(val: string): string[] {
        if (this.categories) {
            return this.categories.filter(category =>
                category.name.toLowerCase().indexOf(val.toLowerCase()) === 0).map(category => category.name);
        } else {
            return [];
        }
    }

    categoryId(categoryName: string) {
        return this.categories.find((element) => element.name === categoryName).id;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    goBack(): void {
        this.location.back();
    }

    instantiateControls() {
        this.acctFrom = new FormControl(this.editTransaction.acctFrom);
        this.acctTo = new FormControl(this.editTransaction.acctTo);
        this.amount = new FormControl(this.editTransaction.amount);
        this.category = new FormControl(this.categoryName(this.editTransaction.category));
        this.comments = new FormControl(this.editTransaction.comments);
        this.date = new FormControl(this.editTransaction.date);
        this.payeeFrom = new FormControl(this.editTransaction.payeeFrom);
        this.payeeTo = new FormControl(this.editTransaction.payeeTo);
        this.tax = new FormControl(this.editTransaction.tax);
    }

    instantiateForm(acctFrom: FormControl, acctTo: FormControl, amount: FormControl, category: FormControl, comments: FormControl, date: FormControl, payeeFrom: FormControl, payeeTo: FormControl, tax: FormControl) {
        this.form = new FormGroup({
            acctFrom,
            acctTo,
            amount,
            category,
            comments,
            date,
            payeeFrom,
            payeeTo,
            tax,
        });
    }

    onCChange(val: string) {
        if (val !== null) {
            if (this.categories) {
                var cat: Category = this.categories.find((c) => c.name.trim().toLowerCase() === val.trim().toLowerCase());
                if (cat) {
                    var taxcheck = cat.tax;
                    this.tax.setValue(taxcheck);
                } else {
                    this.tax.setValue(false);
                }
            }
        } else {
            this.tax.setValue(false);
        }
    }  //onCChange

    onSubmit() {
        //add the payee or update its defaults from payeeFrom, if populated
        if (this.form.get('payeeFrom').value !== '') {
            var pfMatch: Payee = this.payees.find((element) => element.name === this.form.get('payeeFrom').value);
            if (pfMatch) {
                var matchIndex = this.payees.indexOf(pfMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctTo').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.form.get('category').value;
                this.dataService.updatePayee(this.payees[matchIndex]);
            } else {
                var pf: Payee = { id: 0, balance: 0, defaultAcct: this.form.get('acctTo').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeFrom').value };
                this.dataService.addPayee(pf);
            }
        }

        //add the payee or update its defaults from payeeTo, if populated
        if (this.form.get('payeeTo').value !== '') {
            var ptMatch: Payee = this.payees.find((element) => element.name === this.form.get('payeeTo').value);
            if (ptMatch) {
                var matchIndex = this.payees.indexOf(ptMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctFrom').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.form.get('category').value;
                this.dataService.updatePayee(this.payees[matchIndex]);
            } else {
                var pt: Payee = { id: 0, balance: 0, defaultAcct: this.form.get('acctFrom').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeTo').value };
                this.dataService.addPayee(pt);
            }
        }

        //update the transaction
        this.editTransaction.acctFrom = this.form.get('acctFrom').value;
        this.editTransaction.acctTo = this.form.get('acctTo').value;
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.categoryId(this.form.get('category').value);
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.comments = this.form.get('comments').value;
        this.editTransaction.payeeFrom = this.form.get('payeeFrom').value;
        this.editTransaction.payeeTo = this.form.get('payeeTo').value;
        this.editTransaction.tax = this.form.get('tax').value;
        this.dataService.updateTransaction(this.editTransaction);

        //reset and close
        this.ngOnInit();
        this.goBack();
    }

    payeeFilter(val: string): string[] {
        if (this.payees) {
            return this.payees.filter(payee =>
                payee.name.toLowerCase().indexOf(val.toLowerCase()) === 0).map(payee => payee.name);
        }
        else {
            return [];
        }
    }
}

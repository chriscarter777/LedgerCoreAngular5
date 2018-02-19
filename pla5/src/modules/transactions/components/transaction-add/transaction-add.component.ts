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
    filteredPayeeFromNames: Observable<string[]>;
    filteredPayeeToNames: Observable<string[]>;
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
            .then(() => this.filteredPayeeFromNames = this.payeeFrom.valueChanges.pipe(startWith(''), map(val => this.payeeFilter(val))))
            .then(() => this.filteredPayeeToNames = this.payeeTo.valueChanges.pipe(startWith(''), map(val => this.payeeFilter(val))))
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

    categoryFilter(val: string): string[] {
        return this.categories.filter(category =>
            category.name.toLowerCase().indexOf(val.toLowerCase()) === 0).map(category => category.name);
    }

    categoryId(categoryName: string) {
        return this.categories.find((element) => element.name === categoryName).id;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
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

    onSubmit() {
        //add the payee or update its defaults from payeeFrom, if populated
        if (this.form.get('payeeFrom').value !== '') {
            var pfMatch: Payee[] = this.payees.filter((element) => element.name === this.form.get('payeeFrom').value);
            if (pfMatch.length === 0) {
                var pf: Payee = { id: 0, balance: 0, defaultAcct: this.form.get('acctTo').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeFrom').value };
                this.dataService.addPayee(pf);
            } else {
                var matchIndex = this.payees.indexOf(pfMatch[0]);
                this.payees[matchIndex].defaultAcct = this.form.get('acctTo').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.form.get('category').value;
                this.dataService.updatePayee(this.payees[matchIndex]);
            }
        }

        //add the payee or update its defaults from payeeTo, if populated
        if (this.form.get('payeeTo').value !== '') {
            var ptMatch: Payee[] = this.payees.filter((element) => element.name === this.form.get('payeeTo').value);
            if (ptMatch.length === 0) {
                var pt: Payee = { id: 0, balance: 0, defaultAcct: this.form.get('acctFrom').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeTo').value };
                this.dataService.addPayee(pt);
            } else {
                var matchIndex = this.payees.indexOf(ptMatch[0]);
                this.payees[matchIndex].defaultAcct = this.form.get('acctFrom').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.form.get('category').value;
                this.dataService.updatePayee(this.payees[matchIndex]);
            }
        }

        //NEED A MECHANISM TO ENSURE NEW PAYEES GET ADDED TO this.payees !BEFORE! TRYING TO GET THEIR ID BELOW, OR IT WILL FAIL!

        //add the transaction
        this.newTransaction.acctFrom = this.form.get('acctFrom').value;
        this.newTransaction.acctTo = this.form.get('acctTo').value;
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.categoryId(this.form.get('category').value);
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.payeeFrom = this.payeeId(this.form.get('payeeFrom').value);
        this.newTransaction.payeeTo = this.payeeId(this.form.get('payeeTo').value);
        this.newTransaction.tax = this.form.get('tax').value;
        this.dataService.addTransaction(this.newTransaction);

        //reset and close
        this.ngOnInit();
        this.goBack();
   }

    payeeFilter(val: string): string[] {
        return this.payees.filter(payee =>
            payee.name.toLowerCase().indexOf(val.toLowerCase()) === 0).map(payee => payee.name);
    }

    payeeId(payeeName: string) {
        return this.payees.find((element) => element.name === payeeName).id;
    }

    payeeName(payeeId: number) {
        return this.payees.find((element) => element.id === payeeId).name;
    }

}

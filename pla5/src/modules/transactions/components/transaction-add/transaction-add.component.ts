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
    comments: FormControl = new FormControl();
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

        this.accounts = this.dataService.Accounts();
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.categories = this.dataService.Categories();
        this.payees = this.dataService.Payees();
        this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.comments, this.date, this.payeeFrom, this.payeeTo, this.tax);
        this.filteredCategoryNames = this.category.valueChanges.pipe(startWith(''), map(val => this.categoryFilter(val)));
        this.filteredPayeeFromNames = this.payeeFrom.valueChanges.pipe(startWith(''), map(val => this.payeeFilter(val)));
        this.filteredPayeeToNames = this.payeeTo.valueChanges.pipe(startWith(''), map(val => this.payeeFilter(val)));
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

    freshNewTransaction() {
        return { id: null, acctFrom: 0, acctTo: 0, amount: 0, category: 0, comments: '', date: new Date().toLocaleDateString(), payeeFrom: '', payeeTo: '', tax: false }
    }

    goBack(): void {
        this.location.back();
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

    onSubmit() {
        //add the payee or update its defaults from payeeFrom, if populated
        if (this.form.get('payeeFrom').value !== null) {
            console.log('adding payeeFrom ' + this.form.get('payeeFrom').value);
            var pfMatch: Payee = this.payees.find((element) => element.name === this.form.get('payeeFrom').value);
            if (pfMatch) {
                var matchIndex = this.payees.indexOf(pfMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctTo').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.categoryId(this.form.get('category').value);
                console.log('calling update payeeFrom with ' + JSON.stringify(this.payees[matchIndex]));
                this.dataService.updatePayee(this.payees[matchIndex]);
            } else {
                var pf: Payee = { id: 0, balance: 0, defaultAcct: this.form.get('acctTo').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeFrom').value };
                console.log('calling add payeeFrom with ' + JSON.stringify(pf));
                this.dataService.addPayee(pf);}
        }

        //add the payee or update its defaults from payeeTo, if populated
        if (this.form.get('payeeTo').value !== null) {
            console.log('adding payeeTo ' + this.form.get('payeeTo').value);
            var ptMatch: Payee = this.payees.find((element) => element.name === this.form.get('payeeTo').value);
            if (ptMatch) {
                var matchIndex = this.payees.indexOf(ptMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctFrom').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.categoryId(this.form.get('category').value);
                console.log('calling update payeeFrom with ' + JSON.stringify(this.payees[matchIndex]));
                this.dataService.updatePayee(this.payees[matchIndex]);
            } else {
                var pt: Payee = { id: 0, balance: 0, defaultAcct: this.form.get('acctFrom').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeTo').value };
                console.log('calling add payeeTo with ' + JSON.stringify(pt));
                this.dataService.addPayee(pt);}
        }

        //add the transaction
        this.newTransaction.acctFrom = this.form.get('acctFrom').value;
        this.newTransaction.acctTo = this.form.get('acctTo').value;
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.categoryId(this.form.get('category').value);
        this.newTransaction.comments = this.form.get('comments').value;
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.payeeFrom = this.form.get('payeeFrom').value;
        this.newTransaction.payeeTo = this.form.get('payeeTo').value;
        this.newTransaction.tax = this.form.get('tax').value;
        console.log('calling addTransaction with ' + JSON.stringify(this.newTransaction));
        this.dataService.addTransaction(this.newTransaction);

        //reset and close
        this.ngOnInit();
        this.goBack();
    }

    onFPInput(val: string) {
        if (val === '') {
            document.getElementById('payeeToControl').style.display = "inline";
            document.getElementById('accountFromControl').style.display = "inline";
            document.getElementById('accountToControl').style.display = "inline";
        } else {
            document.getElementById('payeeToControl').style.display = "none";
            document.getElementById('accountFromControl').style.display = "none";
        }
    }  //onFPInput

    onTPInput(val: string) {
        if (val === '') {
            document.getElementById('payeeFromControl').style.display = "inline";
            document.getElementById('accountFromControl').style.display = "inline";
            document.getElementById('accountToControl').style.display = "inline";
        } else {
            document.getElementById('payeeFromControl').style.display = "none";
            document.getElementById('accountToControl').style.display = "none";
        }
    }  //onTPInput

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

    onFPChange(val: string) {
        if (val !== null) {
            if (this.payees) {
                var fp: Payee = this.payees.find((p) => p.name.trim().toLowerCase() === val.trim().toLowerCase());
                if (fp) {
                    var acctid = fp.defaultAcct;
                    var amt = fp.defaultAmt.toString();
                    var catname = this.categoryName(fp.defaultCat);
                    var taxcheck = this.categories.find((c) => c.id === fp.defaultCat).tax;
                    this.acctTo.setValue(acctid);
                    this.amount.setValue(amt);
                    this.category.setValue(catname);
                    this.tax.setValue(taxcheck);
                } else {
                    this.acctTo.setValue('')
                    this.amount.setValue('')
                    this.category.setValue('')
                    this.tax.setValue(false);
                }
            }
        } else {
            this.acctTo.setValue('');
            this.amount.setValue('');
            this.category.setValue('');
            this.tax.setValue(false);
        }
    }  //onFPChange

    onTPChange(val: string) {
        if (val !== null) {
            if (this.payees) {
                var tp: Payee = this.payees.find((p) => p.name.trim().toLowerCase() === val.trim().toLowerCase());
                if (tp) {
                    var acctid = tp.defaultAcct;
                    var amt = tp.defaultAmt.toString();
                    var catname = this.categoryName(tp.defaultCat);
                    var taxcheck = this.categories.find((c) => c.id === tp.defaultCat).tax;
                    this.acctFrom.setValue(acctid);
                    this.amount.setValue(amt);
                    this.category.setValue(catname);
                    this.tax.setValue(taxcheck);
                } else {
                    this.acctFrom.setValue('');
                    this.amount.setValue('');
                    this.category.setValue('');
                    this.tax.setValue(false);
                }
            }
        } else {
            this.acctFrom.setValue('');
            this.amount.setValue('');
            this.category.setValue('');
            this.tax.setValue(false);
        }
    }  //onTPChange

    onFPSelection(val: string) {
        this.onFPInput(val);
        this.onFPChange(val);

    }

    onTPSelection(val: string) {
        this.onTPInput(val);
        this.onTPChange(val);
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
}  //component

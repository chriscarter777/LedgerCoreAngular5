import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { Transaction } from '../../../shared/interfaces';

@Component({
    selector: 'transaction-edit',
    templateUrl: './transaction-edit.component.html',
    styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent {
    editTransaction: Transaction;
    form: FormGroup;


    constructor(
        private dataService: DataService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location
    ) { }

    ngOnInit() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        };
        document.getElementById("addlink").setAttribute("disabled", "true");

        const id = +this.route.snapshot.paramMap.get('id');
        this.createForm(id);
    }

    ngOnDestroy() {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        };
        document.getElementById("addlink").removeAttribute("disabled");
    }

    createForm(id): void {
        this.dataService.getTransaction(id).subscribe(
            transaction => {
                this.editTransaction = transaction;
                this.defineForm();
            },
            error => alert("there was an error getting transaction.")
        );
    }

    public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    defineForm() {
        this.form = new FormGroup({
            amount: new FormControl(this.editTransaction.amount),
            category: new FormControl(this.editTransaction.category),
            crAcct: new FormControl(this.editTransaction.crAcct),
            date: new FormControl(this.editTransaction.date),
            drAcct: new FormControl(this.editTransaction.drAcct),
            tax: new FormControl(this.editTransaction.tax),
        });
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.form.get('category').value;
        this.editTransaction.crAcct = this.form.get('crAcct').value;
        this.editTransaction.date = this.form.get('date').value;
        this.editTransaction.drAcct = this.form.get('drAcct').value;
        this.editTransaction.tax = this.form.get('tax').value;
        this.dataService.updateTransaction(this.editTransaction);
        //reset
        this.goBack();
    }
}

import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Location } from '@angular/common';
import { DataService } from '../../../shared/data.service';
import { Transaction } from '../../../shared/interfaces'; 

@Component({
    selector: 'transaction-add',
    templateUrl: './transaction-add.component.html',
    styleUrls: ['./transaction-add.component.css']
})
export class TransactionAddComponent {
  form: FormGroup;
  newTransaction: Transaction;

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

      this.newTransaction = this.freshNewTransaction();
    this.form = new FormGroup({
      amount: new FormControl(this.newTransaction.amount),
      category: new FormControl(this.newTransaction.category),
      crAcct: new FormControl(this.newTransaction.crAcct),
      date: new FormControl(this.newTransaction.date),
      drAcct: new FormControl(this.newTransaction.drAcct),
      tax: new FormControl(this.newTransaction.tax),
    });
  }

  ngOnDestroy() {
      var editlinks = document.getElementsByClassName("editlink");
      for (var i = 0; i < editlinks.length; i++) {
          editlinks[i].removeAttribute("disabled");
      };
      document.getElementById("addlink").removeAttribute("disabled");
  }

  public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

  freshNewTransaction() {
    return { id: null, amount: 0, category: 0, crAcct: 0, date: '', drAcct: 0, tax: false }
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
import { Component, EventEmitter, Output } from '@angular/core';
import { Transaction } from '../../../shared/interfaces'; 

@Component({
    selector: 'transaction-add',
    templateUrl: './transactionAdd.component.html',
    styleUrls: ['./transactionAdd.component.css']
})
export class TransactionAddComponent {
  @Output() add = new EventEmitter();
  public newTransaction: Transaction;

  ngOnInit() {
    this.newTransaction = { id: null, amount:0, category: 0, crAcct: 0, date: '', drAcct: 0, tax: false, };
  }

  public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

  public handleTaxButton() {
    this.newTransaction.tax = !this.newTransaction.tax;
  }

  onSubmit() {
    this.add.emit(this.newTransaction);
  }
}

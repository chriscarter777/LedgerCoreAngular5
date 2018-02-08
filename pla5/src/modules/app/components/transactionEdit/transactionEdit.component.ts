import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../../../shared/interfaces'; 

@Component({
    selector: 'transaction-edit',
    templateUrl: './transactionEdit.component.html',
    styleUrls: ['./transactionEdit.component.css']
})
export class TransactionEditComponent {
  @Input() editTransaction: Transaction;
  @Output() update = new EventEmitter();

  public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

  public handleTaxButton() {
    this.editTransaction.tax = !this.editTransaction.tax;
  }

  onSubmit() {
    this.update.emit(this.editTransaction);
  }
}

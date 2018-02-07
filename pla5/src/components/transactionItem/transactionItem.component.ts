import { Component, Input } from '@angular/core';
import { Transaction } from '../../data/interfaces'; 

@Component({
    selector: 'transaction-item',
    templateUrl: './transactionItem.component.html',
    styleUrls: ['./transactionItem.component.css']
})
export class TransactionItemComponent {
    @Input() transaction: Transaction;
}

import { Component } from '@angular/core';
import { Transaction } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'pl-transactions',
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
    public transactions: Transaction[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getTransactions();
    }

    getTransactions(): void {
        this.dataService.getTransactions().subscribe(transactions => this.transactions = transactions);
    }

    onDelete(id: number): void {
      var confirmation = confirm('are you sure you want to delete transaction on date' + this.transactions.find((element) => element.id == id).date + '?');
      if (confirmation) {
        alert("Ha! Account " + id + " is GONE!")
      };
    }

    onAdd(newTransaction: Transaction) {
      alert("You just added transaction for date " + newTransaction.date + " and amount " + newTransaction.amount + ".");
    }

    onUpdate(transaction: Transaction) {
      alert("You just updated transaction for date " + transaction.date + ".");
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
}

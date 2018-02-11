import { Component } from '@angular/core';
import { Transaction } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'transaction-list',
    templateUrl: './transactionList.component.html',
    styleUrls: ['./transactionList.component.css']
})

export class TransactionListComponent {
    public transactions: Transaction[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getTransactions();
    }

    getTransactions(): void {
        this.dataService.getTransactions().subscribe(
          transactions => this.transactions = transactions,
          error => alert("there was an error getting transactions.")
        );
    }

    onDelete(id: number): void {
      var result: Transaction;
      var indextToDelete = this.transactions.findIndex((element) => element.id === id);
      var confirmation = confirm('are you sure you want to delete transaction on date' + this.transactions[indextToDelete].date + '?');
      if (confirmation) {
        this.dataService.deleteTransaction(id).subscribe(
          result => {
            if (result === null) {
              alert("There was a problem deleting.")
            }
            else {
              this.transactions.splice(indextToDelete, 1)
            }
          },
          error => alert("There was a problem deleting.")
        );
      };
    }

    onAdd(newTransaction: Transaction) {
      var result: Transaction;
      this.dataService.addTransaction(newTransaction).subscribe(
        result => {
          if (result === null) {
            alert("There was a problem adding.");
          }
          else {
            this.transactions.push(result);
          }
        },
        error => alert("There was a problem adding.")
      );
    }

    onUpdate(transaction: Transaction) {
      var result: Transaction;
      this.dataService.updateTransaction(transaction).subscribe(
        result => {
          if (result === null) {
            alert("There was a problem updating.");
          }
          else {
            this.transactions[0] = result;
          }
        },
        error => alert("There was a problem updating.")
      );    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
}

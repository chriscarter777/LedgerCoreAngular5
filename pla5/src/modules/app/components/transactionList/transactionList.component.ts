import { Component } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Transaction } from '../../../shared/interfaces'; 

@Component({
    selector: 'transaction-list',
    templateUrl: './transactionList.component.html',
    styleUrls: ['./transactionList.component.css']
})

export class TransactionListComponent {
    transactions: Transaction[];

    constructor(private dataService: DataService) {

      this.dataService.transactionAdded.subscribe(
        (data: Transaction) => {
          console.log("transactionAdded received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem adding.");
          }
          else {
            this.transactions.push(data);
          }
        },
        error => alert("There was a problem adding.")
      );

      this.dataService.transactionDeleted.subscribe(
        (data: Transaction) => {
          console.log("transactionDeleted received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem deleting.");
          }
          else {
            var indextToDelete = this.transactions.findIndex((element) => element.id === data.id);
            this.transactions.splice(indextToDelete, 1);
          }
        },
        error => alert("There was a problem deleting.")
      );

      this.dataService.transactionUpdated.subscribe(
        (data: Transaction) => {
          console.log("transactionUpdated received from data.service: " + JSON.stringify(data));
          if (data === null) {
            alert("There was a problem updating.");
          }
          else {
            var indexToUpdate = this.transactions.findIndex((element) => element.id == data.id);
            this.transactions[indexToUpdate] = data;
          }
        },
        error => alert("There was a problem updating.")
      );
    }  //ctor

    ngOnInit() {
        this.getTransactions();
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    getTransactions(): void {
        this.dataService.getTransactions().subscribe(
          transactions => this.transactions = transactions,
          error => alert("there was an error getting transactions.")
        );
    }

    onDelete(id: number): void {
      var result: Transaction;
      var indextToDelete = this.transactions.findIndex((element) => element.id === id);
      var dateToDelete = this.transactions[indextToDelete].date;
      var confirmation = confirm('Are you sure you want to delete transaction on ' + dateToDelete + '?');
      if (confirmation) { this.dataService.deleteAccount(id); };
    }
}

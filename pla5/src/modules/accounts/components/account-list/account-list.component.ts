import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Account, Transaction } from '../../../shared/interfaces';

@Component({
  selector: 'account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})

export class AccountListComponent {
    accounts: Account[];
    transactions: Transaction[];

  constructor(private dataService: DataService) {
  }  //ctor

ngOnInit() {
    this.dataService.accounts.subscribe((accounts) => this.accounts = accounts);
    this.dataService.transactions.subscribe((transactions) => this.transactions = transactions);
    this.accounts.forEach((account) => {
        account.balance = this.calculateBalance(account, this.transactions);
    });
}

calculateBalance(account: Account, transactions: Transaction[]) :number {
    var balance: number = 0;
    var transactionsFrom: Transaction[] = transactions.filter((transaction) => transaction.acctFrom === account.id);
    var transactionsTo: Transaction[] = transactions.filter((transaction) => transaction.acctTo === account.id);
    transactionsFrom.forEach((transaction: Transaction) => balance = balance - transaction.amount);
    transactionsTo.forEach((transaction: Transaction) => balance = balance + transaction.amount);
    return balance;
}

displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

displayAsPercent = (value: number) => value.toFixed(2) + "%";

onDelete(id: number): void {
  var result: Account;
  var indextToDelete = this.accounts.findIndex((element) => element.id === id);
  var nameToDelete = this.accounts[indextToDelete].name;
  var confirmation = confirm('are you sure you want to delete ' + this.accounts[indextToDelete].name + '?');
  if(confirmation) { this.dataService.deleteAccount(id); };
}
}  //class

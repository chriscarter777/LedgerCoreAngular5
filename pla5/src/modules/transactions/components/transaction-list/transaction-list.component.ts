import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Account, Category, Payee, Transaction } from '../../../shared/interfaces';

@Component({
    selector: 'transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.css']
})

export class TransactionListComponent {
    accounts: Account[];
    categories: Category[];
    payees: Payee[];
    transactions: Transaction[];


    constructor(private dataService: DataService) {

    }  //ctor

    ngOnInit() {
        this.dataService.accounts.subscribe((accounts) => this.accounts = accounts);
        this.dataService.categories.subscribe((categories) => this.categories = categories);
        this.dataService.payees.subscribe((payees) => this.payees = payees);
        this.dataService.transactions.subscribe((transactions) => this.transactions = transactions);
    }

    accountName(accountId: number) {
        return this.accounts.find((element) => element.id === accountId).name;
    }

    categoryName(categoryId: number) {
        return this.categories.find((element) => element.id === categoryId).name;
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    onDelete(id: number): void {
        var result: Transaction;
        var indextToDelete = this.transactions.findIndex((element) => element.id === id);
        var dateToDelete = this.transactions[indextToDelete].date;
        var confirmation = confirm('Are you sure you want to delete transaction on ' + dateToDelete + '?');
        if (confirmation) { this.dataService.deleteAccount(id); };
    }

    payeeName(payeeId: number) {
        return this.payees.find((element) => element.id === payeeId).name;
    }

}

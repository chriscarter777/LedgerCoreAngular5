import { Component } from '@angular/core';
import { Transaction } from '../../data/interfaces'; 
import { DataService } from '../../data/service';

@Component({
    selector: 'transactions',
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
}

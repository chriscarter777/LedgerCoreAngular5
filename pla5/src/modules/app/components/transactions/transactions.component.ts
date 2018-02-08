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
}

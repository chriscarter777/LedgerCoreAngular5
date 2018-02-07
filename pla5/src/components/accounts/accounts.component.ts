import { Component } from '@angular/core';
import { Account } from '../../data/interfaces'; 
import { DataService } from '../../data/service';

@Component({
    selector: 'accounts',
    templateUrl: './accounts.component.html',
    styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
    public accounts: Account[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getAccounts();
    }

    getAccounts(): void {
        this.dataService.getAccounts().subscribe(accounts => this.accounts = accounts);
    }

}

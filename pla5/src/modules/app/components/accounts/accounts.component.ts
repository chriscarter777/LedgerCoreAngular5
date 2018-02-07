import { Component } from '@angular/core';
import { Account } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

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

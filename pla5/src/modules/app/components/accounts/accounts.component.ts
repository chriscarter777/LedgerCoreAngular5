import { Component } from '@angular/core';
import { Account } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'pl-accounts',
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

    onDelete(id: number): void {
      var confirmation = confirm('are you sure you want to delete ' + this.accounts.find((element) => element.id == id).name + '?');
      if (confirmation) {
        alert("Ha! Account " + id + " is GONE!")
      };
    }

    onAdd(newAccount: Account) {
      alert("You just added " + newAccount.name + ".");
    }

    onUpdate(account: Account) {
      alert("You just updated " + account.name + ".");
    }

    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

    displayAsPercent = (value: number) => value.toFixed(2) + "%";

}

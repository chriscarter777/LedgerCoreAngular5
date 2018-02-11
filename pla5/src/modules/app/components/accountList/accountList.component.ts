import { Component } from '@angular/core';
import { Account } from '../../../shared/interfaces';
import { DataService } from '../../../shared/data.service';

@Component({
  selector: 'account-list',
  templateUrl: './accountList.component.html',
  styleUrls: ['./accountList.component.css']
})

export class AccountListComponent {
  public accounts: Account[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.dataService.getAccounts().subscribe(
      accounts => this.accounts = accounts,
      error => alert("there was an error getting accounts.")
    );
  }

  onDelete(id: number): void {
    var result: Account;
    var indextToDelete = this.accounts.findIndex((element) => element.id === id);
    var nameToDelete = this.accounts[indextToDelete].name;
    var confirmation = confirm('are you sure you want to delete ' + this.accounts[indextToDelete].name + '?');
    if (confirmation) {
      this.dataService.deleteAccount(id).subscribe(
        result => {
          if (result === null) {
            alert("There was a problem deleting.")
          }
          else {
            this.accounts.splice(indextToDelete, 1)
}
        },
        error => alert("There was a problem deleting.")
      );
    };
  }

  onAdd(newAccount: Account) {
    var result: Account;
    console.log("onAdd received from accountAdd: " + JSON.stringify(newAccount));
    this.dataService.addAccount(newAccount).subscribe(
      result => {
        console.log("onAdd received from data.service: " + result);
        if (result === null) {
          alert("There was a problem adding.");
        }
        else {
          this.accounts.push(result);
       }
      },
      error => alert("There was a problem adding.")
    );
  }

  onUpdate(editAccount: Account) {
    var result: Account;
    this.dataService.updateAccount(editAccount).subscribe(
      result => {
        if (result === null) {
          alert("There was a problem updating.");
        }
        else {
          this.accounts[0] = result;
     }
      },
      error => alert("There was a problem updating.")
    );
  }

  displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);

  displayAsPercent = (value: number) => value.toFixed(2) + "%";

}

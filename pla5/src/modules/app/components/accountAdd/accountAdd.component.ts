import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from '../../../shared/interfaces'; 

@Component({
    selector: 'account-add',
    templateUrl: './accountAdd.component.html',
    styleUrls: ['./accountAdd.component.css']
})
export class AccountAddComponent {
  @Output() add = new EventEmitter();
  public newAccount: Account;

  ngOnInit() {
    this.newAccount = { id: null, balance: 0, debit: true, institution: '', interest: 0, limit: 0, name: 'New Account', number: '', owned: true };
  }

    public debit = true;
    public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
    public displayAsPercent = (value: number) => value.toFixed(2) + "%";
    public handleDebitButton() {
        this.debit = !this.debit;
    }

    onSubmit() {
      this.add.emit(this.newAccount);
    }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Account } from '../../../shared/interfaces';

@Component({
  selector: 'account-add',
  templateUrl: './accountAdd.component.html',
  styleUrls: ['./accountAdd.component.css']
})

export class AccountAddComponent {
  @Output() add = new EventEmitter();
  public newAccount: Account;
  form;

  ngOnInit() {
    this.newAccount = this.freshNewAccount();
    this.form = new FormGroup({
      acctType: new FormControl(this.newAccount.acctType),
      institution: new FormControl(this.newAccount.institution),
      interest: new FormControl(this.newAccount.interest),
      limit: new FormControl(this.newAccount.limit),
      name: new FormControl(this.newAccount.name),
      number: new FormControl(this.newAccount.number),
   });
  }

  public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
  public displayAsPercent = (value: number) => value.toFixed(2) + "%";

  onSubmit() {
    this.newAccount.acctType = this.form.get('acctType').value
    this.newAccount.institution = this.form.get('institution').value
    this.newAccount.interest = this.form.get('interest').value
    this.newAccount.limit = this.form.get('limit').value
    this.newAccount.name = this.form.get('name').value
    this.newAccount.number = this.form.get('number').value
    this.add.emit(this.newAccount);
    this.ngOnInit();
  }

  freshNewAccount() {
    return { id: null, balance: 0, acctType: "Asset", institution: '', interest: 0, limit: 0, name: 'New Account', number: '', owned: true }
  }
}

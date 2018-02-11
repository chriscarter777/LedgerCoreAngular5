import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Account } from '../../../shared/interfaces';

@Component({
  selector: 'account-edit',
  templateUrl: './accountEdit.component.html',
  styleUrls: ['./accountEdit.component.css']
})
export class AccountEditComponent {
  @Input() editAccount: Account;
  @Output() update = new EventEmitter();
  form;

  ngOnInit() {
    this.form = new FormGroup({
      acctType: new FormControl(this.editAccount.acctType),
      institution: new FormControl(this.editAccount.institution),
      interest: new FormControl(this.editAccount.interest),
      limit: new FormControl(this.editAccount.limit),
      name: new FormControl(this.editAccount.name),
      number: new FormControl(this.editAccount.number),
    });
  }

  public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
  public displayAsPercent = (value: number) => value.toFixed(2) + "%";

  onSubmit() {
    this.editAccount.acctType = this.form.get('acctType').value
    this.editAccount.institution = this.form.get('institution').value
    this.editAccount.interest = this.form.get('interest').value
    this.editAccount.limit = this.form.get('limit').value
    this.editAccount.name = this.form.get('name').value
    this.editAccount.number = this.form.get('number').value
    this.update.emit(this.editAccount);
  }
}

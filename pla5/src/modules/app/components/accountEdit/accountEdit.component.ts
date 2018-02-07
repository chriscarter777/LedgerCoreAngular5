import { Component } from '@angular/core';
import { Account } from '../../../shared/interfaces'; 

@Component({
    selector: 'account-edit',
    templateUrl: './accountEdit.component.html',
    styleUrls: ['./accountEdit.component.css']
})
export class AccountEditComponent {
    public debit = true;
    public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
    public displayAsPercent = (value: number) => value.toFixed(2) + "%";
    public handleDebitButton() {
        this.debit = !this.debit;
    }
}

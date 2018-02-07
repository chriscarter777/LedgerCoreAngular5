import { Component } from '@angular/core';
import { Account } from '../../../shared/interfaces'; 

@Component({
    selector: 'account-add',
    templateUrl: './accountAdd.component.html',
    styleUrls: ['./accountAdd.component.css']
})
export class AccountAddComponent {
    public debit = true;
    public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
    public displayAsPercent = (value: number) => value.toFixed(2) + "%";
    public handleDebitButton() {
        this.debit = !this.debit;
    }
}

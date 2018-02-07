import { Component, Input } from '@angular/core';
import { Account } from '../../../shared/interfaces'; 

@Component({
    selector: 'account-item',
    templateUrl: './accountItem.component.html',
    styleUrls: ['./accountItem.component.css']
})
export class AccountItemComponent {
    @Input() account: Account;
    displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
    displayAsPercent = (value: number) => value.toFixed(2) + "%";
}

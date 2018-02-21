import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Payee } from '../../../shared/interfaces';

@Component({
    selector: 'payee-list',
    templateUrl: './payee-list.component.html',
    styleUrls: ['./payee-list.component.css']
})

export class PayeeListComponent {
    payees: Payee[];

    constructor(private dataService: DataService) {
    }  //ctor

    ngOnInit() {
        this.dataService.payees.subscribe((payees) => this.payees = payees);
    }

    onDelete(id: number): void {
        var result: Payee;
        var indextToDelete = this.payees.findIndex((element) => element.id === id);
        var nameToDelete = this.payees[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.payees[indextToDelete].name + '?');
        if (confirmation) { this.dataService.deletePayee(id); };
    }
}

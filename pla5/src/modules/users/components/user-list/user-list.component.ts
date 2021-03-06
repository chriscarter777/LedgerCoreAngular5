import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces';
import { DataService } from '../../../shared/data.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    public users: User[];
    form: FormGroup;

    constructor(private dataService: DataService) {
    }  //ctor

    ngOnInit() {
        this.dataService.users.subscribe((users) => this.users = users);
    }

    onDelete(id: string): void {
        var userToDelete = this.users.find((element) => element.id == id).userName;
        var confirmation = confirm('are you sure you want to delete ' + userToDelete + '?');
        if (confirmation) { this.dataService.deleteUser(userToDelete); };
    }

    logCheckbox(element: HTMLInputElement): void {
        alert( `Checkbox ${element.value} was ${element.checked ? '' : 'un'}checked\n`);
    }

    onToggleAdmin(id: string) {
        var indexToToggle = this.users.findIndex((element) => element.id === id);
        if (this.users[indexToToggle].admin === true) {
            this.users[indexToToggle].admin = false;
            this.dataService.unmakeAdmin(id)
        }
        else {
            this.users[indexToToggle].admin = true;
            this.dataService.makeAdmin(id)
        }
    }
    onReset(id: string) {
        this.dataService.resetPassword(id, "Password?123");
    }
}

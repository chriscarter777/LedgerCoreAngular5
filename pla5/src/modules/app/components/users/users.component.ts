import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'pl-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent {
    public users: User[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.dataService.getUsers().subscribe(users => this.users = users);
    }

    onDelete(id: string): void {
      var confirmation = confirm('are you sure you want to delete ' + this.users.find((element) => element.id == id).userName + '?');
      if (confirmation) {
        alert("Ha! User " + id + " is GONE!")
      };
    }

    onAdminChange(user: User) {
      alert("You just updated " + user.userName + "'s admin stsus.");
    }

    onPasswordReset(user: User) {
      alert("You just reset " + user.userName + "'s password.");
    }

}

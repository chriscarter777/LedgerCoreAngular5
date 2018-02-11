import { Component } from '@angular/core';
import { User } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'user-list',
    templateUrl: './userList.component.html',
    styleUrls: ['./userList.component.css']
})
export class UserListComponent {
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

    onMakeAdmin(id: string) {
      this.dataService.makeAdmin(id).subscribe(
        result => {this.users[0].admin = true;},
        error => alert("There was a problem updating.")
      );
    }

    onUnmakeAdmin(id: string) {
      this.dataService.makeAdmin(id).subscribe(
        result => { this.users[0].admin = false; },
        error => alert("There was a problem updating.")
      );
    }

    onPasswordReset(id: string) {
      this.dataService.makeAdmin(id).subscribe(
        result => { },
        error => alert("There was a problem updating.")
      );
    }
}

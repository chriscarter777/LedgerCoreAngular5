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
}

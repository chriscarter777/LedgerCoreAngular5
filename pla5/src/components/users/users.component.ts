import { Component } from '@angular/core';
import { User } from '../../data/interfaces'; 
import { DataService } from '../../data/service';

@Component({
    selector: 'users',
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

import { Component, Input } from '@angular/core';
import { User } from '../../data/interfaces'; 

@Component({
    selector: 'user-item',
    templateUrl: './userItem.component.html',
    styleUrls: ['./userItem.component.css']
})
export class UserItemComponent {
    @Input() user: User;
}

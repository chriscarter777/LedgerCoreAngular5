import { Component } from '@angular/core';
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app-root.component.html',
    styleUrls: ['./app-root.component.css']
})

export class AppComponent {
    title = 'Personal Ledger';

    constructor(private dataService: DataService) {
        //this gets the dataService initializing early
    }  //ctor

}  //component

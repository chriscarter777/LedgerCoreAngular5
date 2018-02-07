﻿import { Component } from '@angular/core';
import { Category } from '../../data/interfaces'; 
import { DataService } from '../../data/service';

@Component({
    selector: 'categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
    public categories: Category[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(): void {
        this.dataService.getCategories().subscribe(categories => this.categories = categories);
    }
}

import { Component, Input } from '@angular/core';
import { DataService } from '../../../shared/data.service';
import { Category } from '../../../shared/interfaces'; 

@Component({
    selector: 'category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent {
    categories: Category[];

    constructor(private dataService: DataService) {
    }  //ctor

    ngOnInit() {
        this.dataService.categories.subscribe((categories) => this.categories = categories);
    }

    onDelete(id: number): void {
      var result: Category;
      var indextToDelete = this.categories.findIndex((element) => element.id === id);
      var nameToDelete = this.categories[indextToDelete].name;
      var confirmation = confirm('are you sure you want to delete ' + this.categories[indextToDelete].name + '?');
      if (confirmation) { this.dataService.deleteCategory(id); };
    }
}

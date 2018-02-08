import { Component } from '@angular/core';
import { Category } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'pl-categories',
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

    onDelete(id: number): void {
      var confirmation = confirm('are you sure you want to delete ' + this.categories.find((element) => element.id == id).name + '?');
      if (confirmation) {
        alert("Ha! Category " + id + " is GONE!")
      };
    }

    onAdd(newCategory: Category) {
      alert("You just added " + newCategory.name + ".");
    }

    onUpdate(category: Category) {
      alert("You just updated " + category.name + ".");
    }
}

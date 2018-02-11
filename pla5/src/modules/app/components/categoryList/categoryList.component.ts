import { Component } from '@angular/core';
import { Category } from '../../../shared/interfaces'; 
import { DataService } from '../../../shared/data.service';

@Component({
    selector: 'category-list',
    templateUrl: './categoryList.component.html',
    styleUrls: ['./categoryList.component.css']
})

export class CategoryListComponent {
    public categories: Category[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(): void {
        this.dataService.getCategories().subscribe(
          categories => this.categories = categories,
          error => alert("there was an error getting categories.")
        );
    }

    onDelete(id: number): void {
      var result: Category;
      var indextToDelete = this.categories.findIndex((element) => element.id === id);
      var confirmation = confirm('are you sure you want to delete ' + this.categories[indextToDelete].name + '?');
      if (confirmation) {
        this.dataService.deleteCategory(id).subscribe(
          result => {
            if (result === null) {
              alert("There was a problem deleting.")
            }
            else {
              this.categories.splice(indextToDelete, 1)
            }
          },
          error => alert("There was a problem deleting.")
        );
      };
   }

    onAdd(newCategory: Category) {
      var result: Category;
      this.dataService.addCategory(newCategory).subscribe(
        result => {
          if (result === null) {
            alert("There was a problem adding.");
          }
          else {
            this.categories.push(result);
          }
        },
        error => alert("There was a problem adding.")
      );
    }

    onUpdate(category: Category) {
      var result: Category;
      this.dataService.updateCategory(category).subscribe(
        result => {
          if (result === null) {
            alert("There was a problem updating.");
          }
          else {
            this.categories[0] = result;
          }
        },
        error => alert("There was a problem updating.")
      );
    }
}

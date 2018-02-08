import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../shared/interfaces'; 

@Component({
    selector: 'category-edit',
    templateUrl: './categoryEdit.component.html',
    styleUrls: ['./categoryEdit.component.css']
})
export class CategoryEditComponent {
  @Input() editCategory: Category;
  @Output() update = new EventEmitter();

  public handleTaxButton() {
    this.editCategory.tax = !this.editCategory.tax;
  }

  onSubmit() {
    this.update.emit(this.editCategory);
  }
}

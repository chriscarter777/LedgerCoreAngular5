import { Component, EventEmitter, Output } from '@angular/core';
import { Category } from '../../../shared/interfaces'; 

@Component({
    selector: 'category-add',
    templateUrl: './categoryAdd.component.html',
    styleUrls: ['./categoryAdd.component.css']
})
export class CategoryAddComponent {
  @Output() add = new EventEmitter();
  public newCategory: Category;

  ngOnInit() {
    this.newCategory = { id: null, name: 'New Category', tax: false, type: '' };
  }

  public tax = false;
  public displayAsDollar = (amt: number) => '$ ' + amt.toFixed(2);
  public displayAsPercent = (value: number) => value.toFixed(2) + "%";
  public handleTaxButton() {
    this.tax = !this.tax;
  }

  onSubmit() {
    this.add.emit(this.newCategory);
  }
}

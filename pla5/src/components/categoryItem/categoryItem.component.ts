import { Component, Input } from '@angular/core';
import { Category } from '../../data/interfaces'; 

@Component({
    selector: 'category-item',
    templateUrl: './categoryItem.component.html',
    styleUrls: ['./categoryItem.component.css']
})
export class CategoryItemComponent {
    @Input() category: Category;
}

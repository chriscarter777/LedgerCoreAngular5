"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../../../shared/data.service");
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(dataService) {
        this.dataService = dataService;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return alert("there was an error getting categories."); });
    };
    CategoryListComponent.prototype.onDelete = function (id) {
        var _this = this;
        var result;
        var indextToDelete = this.categories.findIndex(function (element) { return element.id === id; });
        var confirmation = confirm('are you sure you want to delete ' + this.categories[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteCategory(id).subscribe(function (result) {
                if (result === null) {
                    alert("There was a problem deleting.");
                }
                else {
                    _this.categories.splice(indextToDelete, 1);
                }
            }, function (error) { return alert("There was a problem deleting."); });
        }
        ;
    };
    CategoryListComponent.prototype.onAdd = function (newCategory) {
        var _this = this;
        var result;
        this.dataService.addCategory(newCategory).subscribe(function (result) {
            if (result === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.categories.push(result);
            }
        }, function (error) { return alert("There was a problem adding."); });
    };
    CategoryListComponent.prototype.onUpdate = function (category) {
        var _this = this;
        var result;
        this.dataService.updateCategory(category).subscribe(function (result) {
            if (result === null) {
                alert("There was a problem updating.");
            }
            else {
                _this.categories[0] = result;
            }
        }, function (error) { return alert("There was a problem updating."); });
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: 'category-list',
            templateUrl: './categoryList.component.html',
            styleUrls: ['./categoryList.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;
//# sourceMappingURL=categoryList.component.js.map
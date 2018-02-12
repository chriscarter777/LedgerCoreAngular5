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
        var _this = this;
        this.dataService = dataService;
        this.dataService.categoryAdded.subscribe(function (data) {
            console.log("categoryAdded received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.categories.push(data);
            }
        }, function (error) { return alert("There was a problem adding."); });
        this.dataService.categoryDeleted.subscribe(function (data) {
            console.log("categoryDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.categories.findIndex(function (element) { return element.id === data.id; });
                _this.categories.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
        this.dataService.categoryUpdated.subscribe(function (data) {
            console.log("categoryUpdated received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem updating.");
            }
            else {
                var indexToUpdate = _this.categories.findIndex(function (element) { return element.id == data.id; });
                _this.categories[indexToUpdate] = data;
            }
        }, function (error) { return alert("There was a problem updating."); });
    } //ctor
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return alert("there was an error getting categories."); });
    };
    CategoryListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.categories.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.categories[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.categories[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteCategory(id);
        }
        ;
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
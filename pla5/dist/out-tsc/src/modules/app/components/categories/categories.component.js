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
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(dataService) {
        this.dataService = dataService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; });
    };
    CategoriesComponent.prototype.onDelete = function (id) {
        var confirmation = confirm('are you sure you want to delete ' + this.categories.find(function (element) { return element.id == id; }).name + '?');
        if (confirmation) {
            alert("Ha! Category " + id + " is GONE!");
        }
        ;
    };
    CategoriesComponent.prototype.onAdd = function (newCategory) {
        alert("You just added " + newCategory.name + ".");
    };
    CategoriesComponent.prototype.onUpdate = function (category) {
        alert("You just updated " + category.name + ".");
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'pl-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map
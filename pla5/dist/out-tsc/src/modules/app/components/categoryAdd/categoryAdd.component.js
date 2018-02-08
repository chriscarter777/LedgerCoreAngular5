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
var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent() {
        this.add = new core_1.EventEmitter();
        this.tax = false;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        this.newCategory = { id: null, name: 'New Category', tax: false, type: '' };
    };
    CategoryAddComponent.prototype.handleTaxButton = function () {
        this.tax = !this.tax;
    };
    CategoryAddComponent.prototype.onSubmit = function () {
        this.add.emit(this.newCategory);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CategoryAddComponent.prototype, "add", void 0);
    CategoryAddComponent = __decorate([
        core_1.Component({
            selector: 'category-add',
            templateUrl: './categoryAdd.component.html',
            styleUrls: ['./categoryAdd.component.css']
        })
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());
exports.CategoryAddComponent = CategoryAddComponent;
//# sourceMappingURL=categoryAdd.component.js.map
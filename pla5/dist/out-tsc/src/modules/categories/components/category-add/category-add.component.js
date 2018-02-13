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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var common_1 = require("@angular/common");
var data_service_1 = require("../../../shared/data.service");
var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.newCategory = this.freshNewCategory();
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.newCategory.name),
            tax: new forms_1.FormControl(this.newCategory.tax),
            type: new forms_1.FormControl(this.newCategory.type),
        });
    };
    CategoryAddComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    CategoryAddComponent.prototype.freshNewCategory = function () {
        return { id: null, name: 'New Category', tax: false, type: 'Expense' };
    };
    CategoryAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    CategoryAddComponent.prototype.onSubmit = function () {
        this.newCategory.name = this.form.get('name').value;
        this.newCategory.tax = this.form.get('tax').value;
        this.newCategory.type = this.form.get('type').value;
        this.dataService.addCategory(this.newCategory);
        //reset
        this.ngOnInit();
        this.goBack();
    };
    CategoryAddComponent = __decorate([
        core_1.Component({
            selector: 'category-add',
            templateUrl: './category-add.component.html',
            styleUrls: ['./category-add.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());
exports.CategoryAddComponent = CategoryAddComponent;
//# sourceMappingURL=category-add.component.js.map
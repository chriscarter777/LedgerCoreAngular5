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
var common_1 = require("@angular/common");
var data_service_1 = require("../../../shared/data.service");
var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    CategoryEditComponent.prototype.createForm = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.dataService.getCategory(id).subscribe(function (category) {
            _this.editCategory = category;
            _this.instantiateForm();
        }, function (error) { return alert("there was an error getting category."); });
    };
    CategoryEditComponent.prototype.instantiateForm = function () {
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.editCategory.name),
            tax: new forms_1.FormControl(this.editCategory.tax),
            type: new forms_1.FormControl(this.editCategory.type),
        });
    };
    CategoryEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    CategoryEditComponent.prototype.onSubmit = function () {
        this.editCategory.name = this.form.get('name').value;
        this.editCategory.tax = this.form.get('tax').value;
        this.editCategory.type = this.form.get('type').value;
        this.dataService.updateCategory(this.editCategory);
        //reset
        this.goBack();
    };
    CategoryEditComponent = __decorate([
        core_1.Component({
            selector: 'category-edit',
            templateUrl: './categoryEdit.component.html',
            styleUrls: ['./categoryEdit.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());
exports.CategoryEditComponent = CategoryEditComponent;
//# sourceMappingURL=categoryEdit.component.js.map
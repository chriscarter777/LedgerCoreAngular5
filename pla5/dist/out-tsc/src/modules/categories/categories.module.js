"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var category_list_component_1 = require("./components/category-list/category-list.component");
var category_add_component_1 = require("./components/category-add/category-add.component");
var category_edit_component_1 = require("./components/category-edit/category-edit.component");
var data_service_1 = require("../shared/data.service");
var categories_routing_module_1 = require("./categories.routing.module");
var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                categories_routing_module_1.CategoryRoutingModule
            ],
            declarations: [
                category_add_component_1.CategoryAddComponent,
                category_edit_component_1.CategoryEditComponent,
                category_list_component_1.CategoryListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());
exports.CategoriesModule = CategoriesModule;
//# sourceMappingURL=categories.module.js.map
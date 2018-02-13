"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var category_list_component_1 = require("./components/category-list/category-list.component");
var category_add_component_1 = require("./components/category-add/category-add.component");
var category_edit_component_1 = require("./components/category-edit/category-edit.component");
var categoriesRoutes = [
    {
        path: 'categories',
        component: category_list_component_1.CategoryListComponent,
        children: [
            { path: 'category-add', component: category_add_component_1.CategoryAddComponent },
            { path: 'category-edit/:id', component: category_edit_component_1.CategoryEditComponent }
        ]
    }
];
var CategoryRoutingModule = /** @class */ (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(categoriesRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());
exports.CategoryRoutingModule = CategoryRoutingModule;
//# sourceMappingURL=categories.routing.module.js.map
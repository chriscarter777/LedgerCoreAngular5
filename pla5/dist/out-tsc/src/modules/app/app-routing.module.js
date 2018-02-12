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
var accountAdd_component_1 = require("./components/accountAdd/accountAdd.component");
var accountEdit_component_1 = require("./components/accountEdit/accountEdit.component");
var accountList_component_1 = require("./components/accountList/accountList.component");
var categoryList_component_1 = require("./components/categoryList/categoryList.component");
var categoryAdd_component_1 = require("./components/categoryAdd/categoryAdd.component");
var categoryEdit_component_1 = require("./components/categoryEdit/categoryEdit.component");
var home_component_1 = require("./components/home/home.component");
var transactionAdd_component_1 = require("./components/transactionAdd/transactionAdd.component");
var transactionEdit_component_1 = require("./components/transactionEdit/transactionEdit.component");
var transactionlist_component_1 = require("./components/transactionList/transactionlist.component");
var userList_component_1 = require("./components/userList/userList.component");
var not_found_component_1 = require("./components/notFound/not-found.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    {
        path: 'accounts',
        component: accountList_component_1.AccountListComponent,
        children: [
            {
                path: 'account-add', component: accountAdd_component_1.AccountAddComponent
            },
            { path: 'account-edit/:id', component: accountEdit_component_1.AccountEditComponent }
        ]
    },
    {
        path: 'categories',
        component: categoryList_component_1.CategoryListComponent,
        children: [
            { path: 'category-add', component: categoryAdd_component_1.CategoryAddComponent },
            { path: 'category-edit/:id', component: categoryEdit_component_1.CategoryEditComponent }
        ]
    },
    {
        path: 'transactions',
        component: transactionlist_component_1.TransactionListComponent,
        children: [
            { path: 'transaction-add', component: transactionAdd_component_1.TransactionAddComponent },
            { path: 'transaction-edit/:id', component: transactionEdit_component_1.TransactionEditComponent }
        ]
    },
    { path: 'users', component: userList_component_1.UserListComponent },
    { path: 'Home/Main', redirectTo: 'home', pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // for debugging
                )
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map
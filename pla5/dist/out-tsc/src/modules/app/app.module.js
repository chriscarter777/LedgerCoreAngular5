"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var data_service_1 = require("../shared/data.service");
var app_component_1 = require("./components/app/app.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var home_component_1 = require("./components/home/home.component");
var accountAdd_component_1 = require("./components/accountAdd/accountAdd.component");
var accountEdit_component_1 = require("./components/accountEdit/accountEdit.component");
var accountItem_component_1 = require("./components/accountItem/accountItem.component");
var accounts_component_1 = require("./components/accounts/accounts.component");
var categories_component_1 = require("./components/categories/categories.component");
var categoryAdd_component_1 = require("./components/categoryAdd/categoryAdd.component");
var categoryEdit_component_1 = require("./components/categoryEdit/categoryEdit.component");
var categoryItem_component_1 = require("./components/categoryItem/categoryItem.component");
var transactionAdd_component_1 = require("./components/transactionAdd/transactionAdd.component");
var transactionEdit_component_1 = require("./components/transactionEdit/transactionEdit.component");
var transactionItem_component_1 = require("./components/transactionItem/transactionItem.component");
var transactions_component_1 = require("./components/transactions/transactions.component");
var userItem_component_1 = require("./components/userItem/userItem.component");
var users_component_1 = require("./components/users/users.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navmenu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                accountAdd_component_1.AccountAddComponent,
                accountEdit_component_1.AccountEditComponent,
                accountItem_component_1.AccountItemComponent,
                accounts_component_1.AccountsComponent,
                categories_component_1.CategoriesComponent,
                categoryAdd_component_1.CategoryAddComponent,
                categoryEdit_component_1.CategoryEditComponent,
                categoryItem_component_1.CategoryItemComponent,
                transactionAdd_component_1.TransactionAddComponent,
                transactionEdit_component_1.TransactionEditComponent,
                transactionItem_component_1.TransactionItemComponent,
                transactions_component_1.TransactionsComponent,
                userItem_component_1.UserItemComponent,
                users_component_1.UsersComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'account-add', component: accountAdd_component_1.AccountAddComponent },
                    { path: 'account-edit', component: accountEdit_component_1.AccountEditComponent },
                    { path: 'account-item', component: accountItem_component_1.AccountItemComponent },
                    { path: 'accounts', component: accounts_component_1.AccountsComponent },
                    { path: 'category-add', component: categoryAdd_component_1.CategoryAddComponent },
                    { path: 'category-edit', component: categoryEdit_component_1.CategoryEditComponent },
                    { path: 'category-item', component: categoryEdit_component_1.CategoryEditComponent },
                    { path: 'categories', component: categories_component_1.CategoriesComponent },
                    { path: 'transaction-add', component: transactionAdd_component_1.TransactionAddComponent },
                    { path: 'transaction-edit', component: transactionEdit_component_1.TransactionEditComponent },
                    { path: 'transaction-item', component: transactionItem_component_1.TransactionItemComponent },
                    { path: 'transactions', component: transactions_component_1.TransactionsComponent },
                    { path: 'user-item', component: userItem_component_1.UserItemComponent },
                    { path: 'users', component: users_component_1.UsersComponent },
                    { path: '**', redirectTo: 'home' }
                ])
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
                data_service_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
exports.getBaseUrl = getBaseUrl;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var accounts_module_1 = require("../accounts/accounts.module");
var app_routing_module_1 = require("./app-routing.module");
var categories_module_1 = require("../categories/categories.module");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var transactions_module_1 = require("../transactions/transactions.module");
var users_module_1 = require("../users/users.module");
var data_service_1 = require("../shared/data.service");
var app_root_component_1 = require("./components/app-root/app-root.component");
var app_home_component_1 = require("./components/app-home/app-home.component");
var nav_menu_component_1 = require("./components/nav-menu/nav-menu.component");
var not_found_component_1 = require("./components/not-found/not-found.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                accounts_module_1.AccountsModule,
                categories_module_1.CategoriesModule,
                transactions_module_1.TransactionsModule,
                users_module_1.UsersModule,
                app_routing_module_1.AppRoutingModule,
            ],
            declarations: [
                app_root_component_1.AppComponent,
                app_home_component_1.HomeComponent,
                nav_menu_component_1.NavMenuComponent,
                not_found_component_1.PageNotFoundComponent
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
                data_service_1.DataService
            ],
            bootstrap: [app_root_component_1.AppComponent]
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
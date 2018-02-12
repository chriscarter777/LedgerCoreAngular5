"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_routing_module_1 = require("./app-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../shared/data.service");
var accountAdd_component_1 = require("./components/accountAdd/accountAdd.component");
var accountEdit_component_1 = require("./components/accountEdit/accountEdit.component");
var accountList_component_1 = require("./components/accountList/accountList.component");
var app_component_1 = require("./components/app/app.component");
var categoryList_component_1 = require("./components/categoryList/categoryList.component");
var categoryAdd_component_1 = require("./components/categoryAdd/categoryAdd.component");
var categoryEdit_component_1 = require("./components/categoryEdit/categoryEdit.component");
var home_component_1 = require("./components/home/home.component");
var navmenu_component_1 = require("./components/navmenu/navmenu.component");
var not_found_component_1 = require("./components/notFound/not-found.component");
var transactionAdd_component_1 = require("./components/transactionAdd/transactionAdd.component");
var transactionEdit_component_1 = require("./components/transactionEdit/transactionEdit.component");
var transactionlist_component_1 = require("./components/transactionList/transactionlist.component");
var userList_component_1 = require("./components/userList/userList.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_routing_module_1.AppRoutingModule,
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navmenu_component_1.NavMenuComponent,
                not_found_component_1.PageNotFoundComponent,
                accountAdd_component_1.AccountAddComponent,
                accountEdit_component_1.AccountEditComponent,
                accountList_component_1.AccountListComponent,
                categoryList_component_1.CategoryListComponent,
                categoryAdd_component_1.CategoryAddComponent,
                categoryEdit_component_1.CategoryEditComponent,
                transactionAdd_component_1.TransactionAddComponent,
                transactionEdit_component_1.TransactionEditComponent,
                transactionlist_component_1.TransactionListComponent,
                userList_component_1.UserListComponent
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
                data_service_1.DataService
            ],
            //set entry point
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
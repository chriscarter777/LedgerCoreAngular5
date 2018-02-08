webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/modules/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/modules/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var app_component_1 = __webpack_require__("../../../../../src/modules/app/components/app/app.component.ts");
var navmenu_component_1 = __webpack_require__("../../../../../src/modules/app/components/navmenu/navmenu.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/modules/app/components/home/home.component.ts");
var accountAdd_component_1 = __webpack_require__("../../../../../src/modules/app/components/accountAdd/accountAdd.component.ts");
var accountEdit_component_1 = __webpack_require__("../../../../../src/modules/app/components/accountEdit/accountEdit.component.ts");
var accountItem_component_1 = __webpack_require__("../../../../../src/modules/app/components/accountItem/accountItem.component.ts");
var accounts_component_1 = __webpack_require__("../../../../../src/modules/app/components/accounts/accounts.component.ts");
var categories_component_1 = __webpack_require__("../../../../../src/modules/app/components/categories/categories.component.ts");
var categoryAdd_component_1 = __webpack_require__("../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.ts");
var categoryEdit_component_1 = __webpack_require__("../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.ts");
var categoryItem_component_1 = __webpack_require__("../../../../../src/modules/app/components/categoryItem/categoryItem.component.ts");
var transactionAdd_component_1 = __webpack_require__("../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.ts");
var transactionEdit_component_1 = __webpack_require__("../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.ts");
var transactionItem_component_1 = __webpack_require__("../../../../../src/modules/app/components/transactionItem/transactionItem.component.ts");
var transactions_component_1 = __webpack_require__("../../../../../src/modules/app/components/transactions/transactions.component.ts");
var userItem_component_1 = __webpack_require__("../../../../../src/modules/app/components/userItem/userItem.component.ts");
var users_component_1 = __webpack_require__("../../../../../src/modules/app/components/users/users.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //make non-module items available
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
            //import other modules
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


/***/ }),

/***/ "../../../../../src/modules/app/components/accountAdd/accountAdd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/accountAdd/accountAdd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountAdd\">\r\n  <h4>Add</h4>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{newAccount.id}}</td>\r\n        <td>{{newAccount.debit ? 'Asset' : 'Liability'}}</td>\r\n        <td>{{newAccount.name}}</td>\r\n        <td>{{newAccount.institution}}</td>\r\n        <td>{{newAccount.number}}</td>\r\n        <td className='right'>{{displayAsPercent(newAccount.interest)}}</td>\r\n        <td className='right'>{{account.limit ? displayAsDollar(newAccount.limit) : '--'}}</td>\r\n        <td className='right'>{{displayAsDollar(newAccount.balance)}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n<button (click)=\"onSubmit()\">Add</button>\r\n\r\n  <!--<form>\r\n      <label>Type</label>\r\n      <input type='radio' value='true' checked={{debit}} onChange=\"handleDebitButton()\" /> Asset\r\n      <input type='radio' value='false' checked={{!debit}} onChange=\"handleDebitButton()\" /> Liability\r\n      <label>Name</label>\r\n      <input type='text' />\r\n      <label>Institution</label>\r\n      <input type='text' />\r\n      <label>Number</label>\r\n      <input type='text' />\r\n      <label>Interest Rate</label>\r\n      <input type='number' />%\r\n      <label>Limit</label>\r\n      $<input type='number' />\r\n      <input type='submit' value=\"Add\" />\r\n  </form>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/accountAdd/accountAdd.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AccountAddComponent = /** @class */ (function () {
    function AccountAddComponent() {
        this.add = new core_1.EventEmitter();
        this.debit = true;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountAddComponent.prototype.ngOnInit = function () {
        this.newAccount = { id: null, balance: 0, debit: true, institution: '', interest: 0, limit: 0, name: 'New Account', number: '', owned: true };
    };
    AccountAddComponent.prototype.handleDebitButton = function () {
        this.debit = !this.debit;
    };
    AccountAddComponent.prototype.onSubmit = function () {
        this.add.emit(this.newAccount);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AccountAddComponent.prototype, "add", void 0);
    AccountAddComponent = __decorate([
        core_1.Component({
            selector: 'account-add',
            template: __webpack_require__("../../../../../src/modules/app/components/accountAdd/accountAdd.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/accountAdd/accountAdd.component.css")]
        })
    ], AccountAddComponent);
    return AccountAddComponent;
}());
exports.AccountAddComponent = AccountAddComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/accountEdit/accountEdit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/accountEdit/accountEdit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountEdit\">\r\n  <h4>Edit</h4>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{editAccount.id}}</td>\r\n        <td>{{editAccount.debit ? 'Asset' : 'Liability'}}</td>\r\n        <td>{{editAccount.name}}</td>\r\n        <td>{{editAccount.institution}}</td>\r\n        <td>{{editAccount.number}}</td>\r\n        <td className='right'>{{displayAsPercent(editAccount.interest)}}</td>\r\n        <td className='right'>{{account.limit ? displayAsDollar(editAccount.limit) : '--'}}</td>\r\n        <td className='right'>{{displayAsDollar(editAccount.balance)}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"onSubmit()\">Update</button>\r\n\r\n\r\n\r\n  <!--<form>\r\n      <label>Type</label>\r\n      <input type='radio' value='true' checked={{debit}} (Change)=\"handleDebitButton()\" /> Asset\r\n      <input type='radio' value='false' checked={{!debit}} (Change)=\"handleDebitButton()\" /> Liability\r\n      <label>Name</label>\r\n      <input type='text' />\r\n      <label>Institution</label>\r\n      <input type='text' />\r\n      <label>Number</label>\r\n      <input type='text' />\r\n      <label>Interest Rate</label>\r\n      <input type='number' />%\r\n      <label>Limit</label>\r\n      $<input type='number' />\r\n      <input type='submit' value=\"Update\" />\r\n  </form>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/accountEdit/accountEdit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AccountEditComponent = /** @class */ (function () {
    function AccountEditComponent() {
        this.update = new core_1.EventEmitter();
        this.debit = true;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountEditComponent.prototype.handleDebitButton = function () {
        this.debit = !this.debit;
    };
    AccountEditComponent.prototype.onSubmit = function () {
        this.update.emit(this.editAccount);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccountEditComponent.prototype, "editAccount", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AccountEditComponent.prototype, "update", void 0);
    AccountEditComponent = __decorate([
        core_1.Component({
            selector: 'account-edit',
            template: __webpack_require__("../../../../../src/modules/app/components/accountEdit/accountEdit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/accountEdit/accountEdit.component.css")]
        })
    ], AccountEditComponent);
    return AccountEditComponent;
}());
exports.AccountEditComponent = AccountEditComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/accountItem/accountItem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/accountItem/accountItem.component.html":
/***/ (function(module, exports) {

module.exports = "<tr class=\"accountItem\">\r\n    <td>{{account.id}}</td>\r\n    <td>{{account.debit ? 'Asset' : 'Liability'}}</td>\r\n    <td>{{account.name}}</td>\r\n    <td>{{account.institution}}</td>\r\n    <td>{{account.number}}</td>\r\n    <td className='right'>{{displayAsPercent(account.interest)}}</td>\r\n    <td className='right'>{{limit ? displayAsDollar(account.limit) : '--'}}</td>\r\n    <td className='right'>{{displayAsDollar(account.balance)}}</td>\r\n    <td><a [routerLink]=\"['/accountEdit']\">Edit</a></td>\r\n    <td><a (click)=\"confirm('are you sure you want to delete this account?'); deleteAccount();\">Delete</a></td>\r\n</tr>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/accountItem/accountItem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AccountItemComponent = /** @class */ (function () {
    function AccountItemComponent() {
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AccountItemComponent.prototype, "account", void 0);
    AccountItemComponent = __decorate([
        core_1.Component({
            selector: 'account-item',
            template: __webpack_require__("../../../../../src/modules/app/components/accountItem/accountItem.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/accountItem/accountItem.component.css")]
        })
    ], AccountItemComponent);
    return AccountItemComponent;
}());
exports.AccountItemComponent = AccountItemComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/accounts/accounts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/accounts/accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accounts\">\r\n  <p *ngIf=\"!accounts\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Accounts</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let account of accounts\">\r\n        <td>{{account.id}}</td>\r\n        <td>{{account.debit ? 'Asset' : 'Liability'}}</td>\r\n        <td>{{account.name}}</td>\r\n        <td>{{account.institution}}</td>\r\n        <td>{{account.number}}</td>\r\n        <td className='right'>{{displayAsPercent(account.interest)}}</td>\r\n        <td className='right'>{{account.limit ? displayAsDollar(account.limit) : '--'}}</td>\r\n        <td className='right'>{{displayAsDollar(account.balance)}}</td>\r\n        <td><a [routerLink]=\"['/accountEdit']\">Edit</a></td>\r\n        <td><a (click)=\"onDelete(account.id);\">Delete</a></td>\r\n      </tr>\r\n      <!--<account-item *ngFor=\"let account of accounts\" [account]=\"account\"></account-item>-->\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"addAccount()\">Add Account</button>\r\n  <account-add (add)=\"onAdd($event)\"></account-add>\r\n  <account-edit *ngIf=\"accounts\" [editAccount] =\"accounts[0]\" (update)=\"onUpdate($event)\"></account-edit>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/accounts/accounts.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var AccountsComponent = /** @class */ (function () {
    function AccountsComponent(dataService) {
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountsComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountsComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; });
    };
    AccountsComponent.prototype.onDelete = function (id) {
        var confirmation = confirm('are you sure you want to delete ' + this.accounts.find(function (element) { return element.id == id; }).name + '?');
        if (confirmation) {
            alert("Ha! Account " + id + " is GONE!");
        }
        ;
    };
    AccountsComponent.prototype.onAdd = function (newAccount) {
        alert("You just added " + newAccount.name + ".");
    };
    AccountsComponent.prototype.onUpdate = function (account) {
        alert("You just updated " + account.name + ".");
    };
    AccountsComponent = __decorate([
        core_1.Component({
            selector: 'pl-accounts',
            template: __webpack_require__("../../../../../src/modules/app/components/accounts/accounts.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/accounts/accounts.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AccountsComponent);
    return AccountsComponent;
}());
exports.AccountsComponent = AccountsComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-content {\r\n    margin-top: 50px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-2 nav-menu'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-10 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/modules/app/components/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\r\n  <p *ngIf=\"!categories\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Categories</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Tax?</th>\r\n        <th>Type</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories\">\r\n        <td>{{category.id}}</td>\r\n        <td>{{category.name}}</td>\r\n        <td>&nbsp;{{category.tax && <span class='glyphicon glyphicon-copy' style='color:green;'></span>}}</td>\r\n        <td>{{category.type}}</td>\r\n        <td><a [routerLink]=\"['/categorytEdit']\">Edit</a></td>\r\n        <td><a (click)=\"confirm('are you sure you want to delete this category?'); deleteCategory();\">Delete</a></td>\r\n        <!--<category-item *ngFor=\"let category of categories\" [category]=\"category\"></category-item>-->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"addCategory()\">Add Category</button>\r\n  <category-add (add)=\"onAdd($event)\"></category-add>\r\n  <category-edit *ngIf=\"categories\" [editCategory]=\"categories[0]\" (update)=\"onUpdate($event)\"></category-edit>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/categories/categories.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
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
            template: __webpack_require__("../../../../../src/modules/app/components/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categoryAdd\">\r\n  <h4>Add</h4>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{newAccount.id}}</td>\r\n        <td>{{newAccount.debit ? 'Asset' : 'Liability'}}</td>\r\n        <td>{{newAccount.name}}</td>\r\n        <td>{{newAccount.institution}}</td>\r\n        <td>{{newAccount.number}}</td>\r\n        <td className='right'>{{displayAsPercent(newAccount.interest)}}</td>\r\n        <td className='right'>{{account.limit ? displayAsDollar(newAccount.limit) : '--'}}</td>\r\n        <td className='right'>{{displayAsDollar(newAccount.balance)}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"onSubmit()\">Add</button>\r\n\r\n\r\n  <!--<form>\r\n      <label>Type</label>\r\n      <label>Name</label>\r\n      <label>Institution</label>\r\n      <label>Number</label>\r\n      <label>Interest Rate</label>\r\n      <label>Limit</label>\r\n      <input type='submit' value='Add' />\r\n  </form>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
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
            template: __webpack_require__("../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.css")]
        })
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());
exports.CategoryAddComponent = CategoryAddComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categoryEdit\">\r\n    <form>\r\n        <label>Type</label>\r\n        <label>Name</label>\r\n        <label>Institution</label>\r\n        <label>Number</label>\r\n        <label>Interest Rate</label>\r\n        <label>Limit</label>\r\n        <input type='submit' value=\"Update\" />\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent() {
    }
    CategoryEditComponent = __decorate([
        core_1.Component({
            selector: 'category-edit',
            template: __webpack_require__("../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.css")]
        })
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());
exports.CategoryEditComponent = CategoryEditComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/categoryItem/categoryItem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryItem/categoryItem.component.html":
/***/ (function(module, exports) {

module.exports = "<tr class=\"categoryItem\">\r\n    <td>{{category.id}}</td>\r\n    <td>{{category.name}}</td>\r\n    <td>&nbsp;{{category.tax}} && <span class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n    <td>{{category.type}}</td>\r\n    <td><a [routerLink]=\"['/categorytEdit']\">Edit</a></td>\r\n    <td><a (click)=\"confirm('are you sure you want to delete this category?'); deleteCategory();\">Delete</a></td>\r\n</tr>"

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryItem/categoryItem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CategoryItemComponent = /** @class */ (function () {
    function CategoryItemComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CategoryItemComponent.prototype, "category", void 0);
    CategoryItemComponent = __decorate([
        core_1.Component({
            selector: 'category-item',
            template: __webpack_require__("../../../../../src/modules/app/components/categoryItem/categoryItem.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/categoryItem/categoryItem.component.css")]
        })
    ], CategoryItemComponent);
    return CategoryItemComponent;
}());
exports.CategoryItemComponent = CategoryItemComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainTitle\">\r\n    <p class=\"mainTitle-sub\">Chris Carter's</p>\r\n    <p class=\"mainTitle-main\">PersonalLedger</p>\r\n</div>\r\n<div class=\"center lime\">\r\n    <p>A home bookkeeping application, using traditional debit-credit methodology, built as a hybrid MVC/SPA using:</p>\r\n    <ul class=\"unstyledList left indented35\">\r\n        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n        <li><a>IdentityCore</a> for authentication and security</li>\r\n        <li><a>EntityFrameworkCore</a> for relational object mapping</li>\r\n        <li><a>XUnit for testing</a></li>\r\n        <li><a href='https://angular.io/'>Angular</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n        <li><a href='https://webpack.github.io/'>Webpack</a> for building and bundling client-side resources</li>\r\n        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/modules/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: __webpack_require__("../../../../../src/modules/app/components/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/navmenu/navmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 50px;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(16% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/counter']\">\r\n                        <span class='glyphicon glyphicon-education'></span> Counter\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/fetch-data']\">\r\n                        <span class='glyphicon glyphicon-th-list'></span> Fetch data\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/accounts']\">\r\n                        <span class='glyphicon glyphicon-credit-card'></span> Accounts\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/categories']\">\r\n                        <span class='glyphicon glyphicon-folder-open'></span> Categories\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/transactions']\">\r\n                        <span class='glyphicon glyphicon-list-alt'></span> Transactions\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/users']\">\r\n                        <span class='glyphicon glyphicon-user'></span> Users\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/navmenu/navmenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent() {
    }
    NavMenuComponent = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            template: __webpack_require__("../../../../../src/modules/app/components/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/navmenu/navmenu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactionAdd\">\r\n  <h4>Add</h4>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{newAccount.id}}</td>\r\n        <td>{{newAccount.debit ? 'Asset' : 'Liability'}}</td>\r\n        <td>{{newAccount.name}}</td>\r\n        <td>{{newAccount.institution}}</td>\r\n        <td>{{newAccount.number}}</td>\r\n        <td className='right'>{{displayAsPercent(newAccount.interest)}}</td>\r\n        <td className='right'>{{account.limit ? displayAsDollar(newAccount.limit) : '--'}}</td>\r\n        <td className='right'>{{displayAsDollar(newAccount.balance)}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"onSubmit()\">Add</button>\r\n\r\n\r\n  <!--<form>\r\n      <label>Type</label>\r\n      <label>Name</label>\r\n      <label>Institution</label>\r\n      <label>Number</label>\r\n      <label>Interest Rate</label>\r\n      <label>Limit</label>\r\n      <input type='submit' value='Add' />\r\n  </form>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TransactionAddComponent = /** @class */ (function () {
    function TransactionAddComponent() {
        this.add = new core_1.EventEmitter();
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    TransactionAddComponent.prototype.ngOnInit = function () {
        this.newTransaction = { id: null, amount: 0, category: 0, crAcct: 0, date: '', drAcct: 0, tax: false, };
    };
    TransactionAddComponent.prototype.onSubmit = function () {
        this.add.emit(this.newTransaction);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TransactionAddComponent.prototype, "add", void 0);
    TransactionAddComponent = __decorate([
        core_1.Component({
            selector: 'transaction-add',
            template: __webpack_require__("../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.css")]
        })
    ], TransactionAddComponent);
    return TransactionAddComponent;
}());
exports.TransactionAddComponent = TransactionAddComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactionEdit\">\r\n    <form>\r\n        <label>Type</label>\r\n        <label>Name</label>\r\n        <label>Institution</label>\r\n        <label>Number</label>\r\n        <label>Interest Rate</label>\r\n        <label>Limit</label>\r\n        <input type='submit' value=\"Update\" />\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent() {
    }
    TransactionEditComponent = __decorate([
        core_1.Component({
            selector: 'transaction-edit',
            template: __webpack_require__("../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.css")]
        })
    ], TransactionEditComponent);
    return TransactionEditComponent;
}());
exports.TransactionEditComponent = TransactionEditComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/transactionItem/transactionItem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionItem/transactionItem.component.html":
/***/ (function(module, exports) {

module.exports = "<tr class=\"transactionItem\">\r\n    <td>{{transaction.id}}</td>\r\n    <td>{{transaction.date}}</td>\r\n    <td className='right'>displayAsDollar({{transaction.amount}})</td>\r\n    <td>{{transaction.category}}</td>\r\n    <td>{{transaction.drAcct}}</td>\r\n    <td>{{transaction.crAcct}}</td>\r\n    <td>&nbsp;{{transaction.tax}} && <span className='glyphicon glyphicon-copy' style='color: green;'></span></td>\r\n    <td><a [routerLink]=\"['/transactionEdit']\">Edit</a></td>\r\n    <td><a (click)=\"confirm('are you sure you want to delete this transaction?'); deleteTransaction();\">Delete</a></td>\r\n</tr>"

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionItem/transactionItem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TransactionItemComponent = /** @class */ (function () {
    function TransactionItemComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TransactionItemComponent.prototype, "transaction", void 0);
    TransactionItemComponent = __decorate([
        core_1.Component({
            selector: 'transaction-item',
            template: __webpack_require__("../../../../../src/modules/app/components/transactionItem/transactionItem.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/transactionItem/transactionItem.component.css")]
        })
    ], TransactionItemComponent);
    return TransactionItemComponent;
}());
exports.TransactionItemComponent = TransactionItemComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/transactions/transactions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactions\">\r\n    <p *ngIf=\"!transactions\"><em>Loading...</em></p>\r\n    \r\n    <table>\r\n        <caption>Transactions</caption>\r\n        <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Date</th>\r\n                <th>Amount</th>\r\n                <th>Category</th>\r\n                <th>Debit Account</th>\r\n                <th>Credit Account</th>\r\n                <th>Tax?</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <transaction-item *ngFor=\"let transaction of transactions\" [transaction]=\"transaction\"></transaction-item>\r\n        </tbody>\r\n    </table>\r\n    <button (click)=\"addTransaction()\">Add Transaction</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/transactions/transactions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(dataService) {
        this.dataService = dataService;
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.getTransactions();
    };
    TransactionsComponent.prototype.getTransactions = function () {
        var _this = this;
        this.dataService.getTransactions().subscribe(function (transactions) { return _this.transactions = transactions; });
    };
    TransactionsComponent = __decorate([
        core_1.Component({
            selector: 'pl-transactions',
            template: __webpack_require__("../../../../../src/modules/app/components/transactions/transactions.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/transactions/transactions.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TransactionsComponent);
    return TransactionsComponent;
}());
exports.TransactionsComponent = TransactionsComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/userItem/userItem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/userItem/userItem.component.html":
/***/ (function(module, exports) {

module.exports = "<tr class=\"userItem\">\r\n    <td>{{user.id}}</td>\r\n    <td>{{user.userName}}</td>\r\n    <td><input type='checkbox' checked={{user.admin}} (Change)=\"toggleAdmin()\" /></td>\r\n    <td class='deleteLink'><a (click)=\"confirm('Are you sure you want to delete this user?'); deleteUser();\">Delete</a></td>\r\n</tr>"

/***/ }),

/***/ "../../../../../src/modules/app/components/userItem/userItem.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "user", void 0);
    UserItemComponent = __decorate([
        core_1.Component({
            selector: 'user-item',
            template: __webpack_require__("../../../../../src/modules/app/components/userItem/userItem.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/userItem/userItem.component.css")]
        })
    ], UserItemComponent);
    return UserItemComponent;
}());
exports.UserItemComponent = UserItemComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"users\">\r\n    <p *ngIf=\"!users\"><em>Loading...</em></p>\r\n\r\n    <table>\r\n        <caption>Users</caption>\r\n        <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Username</th>\r\n                <th>Admin</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <user-item *ngFor=\"let user of users\" [user]=\"user\"></user-item>\r\n        </tbody>\r\n    </table>\r\n    <button (click)=\"addUser()\">Add User</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/users/users.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(dataService) {
        this.dataService = dataService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'pl-users',
            template: __webpack_require__("../../../../../src/modules/app/components/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;


/***/ }),

/***/ "../../../../../src/modules/shared/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getAccounts = function () {
        return this.http.get('/Accounts//AccountsAsync');
        //return this.http.get<Account[]>(this.baseUrl + 'Accounts//AccountsAsync');
    };
    DataService.prototype.getCategories = function () {
        return this.http.get('/Categories/CategoriesAsync');
    };
    DataService.prototype.getTransactions = function () {
        return this.http.get('/Transactions/TransactionsAsync');
    };
    DataService.prototype.getUsers = function () {
        return this.http.get('/Users/UsersAsync');
    };
    __decorate([
        core_1.Inject('BASE_URL'),
        __metadata("design:type", String)
    ], DataService.prototype, "baseUrl", void 0);
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
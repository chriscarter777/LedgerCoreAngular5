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
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var accountAdd_component_1 = __webpack_require__("../../../../../src/modules/app/components/accountAdd/accountAdd.component.ts");
var accountEdit_component_1 = __webpack_require__("../../../../../src/modules/app/components/accountEdit/accountEdit.component.ts");
var accountList_component_1 = __webpack_require__("../../../../../src/modules/app/components/accountList/accountList.component.ts");
var app_component_1 = __webpack_require__("../../../../../src/modules/app/components/app/app.component.ts");
var categoryList_component_1 = __webpack_require__("../../../../../src/modules/app/components/categoryList/categoryList.component.ts");
var categoryAdd_component_1 = __webpack_require__("../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.ts");
var categoryEdit_component_1 = __webpack_require__("../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/modules/app/components/home/home.component.ts");
var navmenu_component_1 = __webpack_require__("../../../../../src/modules/app/components/navmenu/navmenu.component.ts");
var transactionAdd_component_1 = __webpack_require__("../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.ts");
var transactionEdit_component_1 = __webpack_require__("../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.ts");
var transactionlist_component_1 = __webpack_require__("../../../../../src/modules/app/components/transactionList/transactionlist.component.ts");
var userList_component_1 = __webpack_require__("../../../../../src/modules/app/components/userList/userList.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            //make non-module items available
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navmenu_component_1.NavMenuComponent,
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
            //import other modules
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'home', component: home_component_1.HomeComponent },
                    {
                        path: 'accounts',
                        component: accountList_component_1.AccountListComponent,
                        children: [
                            { path: 'account-add', component: accountAdd_component_1.AccountAddComponent },
                            { path: 'account-edit', component: accountEdit_component_1.AccountEditComponent },
                        ]
                    },
                    { path: 'category-add', component: categoryAdd_component_1.CategoryAddComponent },
                    { path: 'category-edit', component: categoryEdit_component_1.CategoryEditComponent },
                    { path: 'categories', component: categoryList_component_1.CategoryListComponent },
                    { path: 'transaction-add', component: transactionAdd_component_1.TransactionAddComponent },
                    { path: 'transaction-edit', component: transactionEdit_component_1.TransactionEditComponent },
                    { path: 'transactions', component: transactionlist_component_1.TransactionListComponent },
                    { path: 'users', component: userList_component_1.UserListComponent },
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
exports.push([module.i, "body {\r\n}\r\n\r\nlabel{\r\n  width:100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/accountAdd/accountAdd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountAdd\">\r\n  <h4>Add</h4>\r\n  <!--<table>\r\n      <thead>\r\n        <tr>\r\n          <th>ID</th>\r\n          <th>Type</th>\r\n          <th>Name</th>\r\n          <th>Institution</th>\r\n          <th>Number</th>\r\n          <th>Interest</th>\r\n          <th>Limit</th>\r\n          <th>Balance</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>{{newAccount.id}}</td>\r\n          <td>{{newAccount.acctType ? 'Asset' : 'Liability'}}</td>\r\n          <td>{{newAccount.name}}</td>\r\n          <td>{{newAccount.institution}}</td>\r\n          <td>{{newAccount.number}}</td>\r\n          <td class='right'>{{displayAsPercent(newAccount.interest)}}</td>\r\n          <td class='right'>{{newAccount.limit ? displayAsDollar(newAccount.limit) : '--'}}</td>\r\n          <td class='right'>{{displayAsDollar(newAccount.balance)}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  <button (click)=\"onSubmit()\">Add</button>-->\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Type</label>\r\n    <input type='radio' name=\"acctType\" formControlName=\"acctType\" value=\"Asset\" /> Asset\r\n    <input type='radio' name=\"acctType\" formControlName=\"acctType\" value=\"Liability\" /> Liability <br />\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Institution</label>\r\n    <input type='text' name=\"institution\" formControlName=\"institution\" /> <br />\r\n    <label>Number</label>\r\n    <input type='text' name=\"number\" formControlName=\"number\" /> <br />\r\n    <label>Interest Rate</label>\r\n    <input type='number' name=\"interest\" formControlName=\"interest\" />% <br />\r\n    <label>Limit<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"limit\" formControlName=\"limit\" /> <br />\r\n    <input type='submit' value=\"Add\" />\r\n  </form>\r\n</div>\r\n"

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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var AccountAddComponent = /** @class */ (function () {
    function AccountAddComponent() {
        this.add = new core_1.EventEmitter();
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountAddComponent.prototype.ngOnInit = function () {
        this.newAccount = this.freshNewAccount();
        this.form = new forms_1.FormGroup({
            acctType: new forms_1.FormControl(this.newAccount.acctType),
            institution: new forms_1.FormControl(this.newAccount.institution),
            interest: new forms_1.FormControl(this.newAccount.interest),
            limit: new forms_1.FormControl(this.newAccount.limit),
            name: new forms_1.FormControl(this.newAccount.name),
            number: new forms_1.FormControl(this.newAccount.number),
        });
    };
    AccountAddComponent.prototype.onSubmit = function () {
        this.newAccount.acctType = this.form.get('acctType').value;
        this.newAccount.institution = this.form.get('institution').value;
        this.newAccount.interest = this.form.get('interest').value;
        this.newAccount.limit = this.form.get('limit').value;
        this.newAccount.name = this.form.get('name').value;
        this.newAccount.number = this.form.get('number').value;
        this.add.emit(this.newAccount);
        this.ngOnInit();
    };
    AccountAddComponent.prototype.freshNewAccount = function () {
        return { id: null, balance: 0, acctType: "Asset", institution: '', interest: 0, limit: 0, name: 'New Account', number: '', owned: true };
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
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/accountEdit/accountEdit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountEdit\">\r\n  <h4>Edit</h4>\r\n  <!--<table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{editAccount.id}}</td>\r\n        <td>{{editAccount.acctType}}</td>\r\n        <td>{{editAccount.name}}</td>\r\n        <td>{{editAccount.institution}}</td>\r\n        <td>{{editAccount.number}}</td>\r\n        <td class='right'>{{displayAsPercent(editAccount.interest)}}</td>\r\n        <td class='right'>{{editAccount.limit ? displayAsDollar(editAccount.limit) : '--'}}</td>\r\n        <td class='right'>{{displayAsDollar(editAccount.balance)}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"onSubmit()\">Update</button>-->\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Type</label>\r\n    <input type='radio' name=\"acctType\" value=\"Asset\" formControlName=\"acctType\" /> Asset\r\n    <input type='radio' name=\"acctType\" value=\"Liability\" formControlName=\"acctType\" /> Liability <br />\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Institution</label>\r\n    <input type='text' name=\"institution\" formControlName=\"institution\" /> <br />\r\n    <label>Number</label>\r\n    <input type='text' name=\"number\" formControlName=\"number\" /> <br />\r\n    <label>Interest Rate</label>\r\n    <input type='number' name=\"interest\" formControlName=\"interest\" />% <br />\r\n    <label>Limit<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"limit\" formControlName=\"limit\" /> <br />\r\n    <input type='submit' value=\"Update\" />\r\n  </form>\r\n</div>\r\n"

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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var AccountEditComponent = /** @class */ (function () {
    function AccountEditComponent() {
        this.update = new core_1.EventEmitter();
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountEditComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            acctType: new forms_1.FormControl(this.editAccount.acctType),
            institution: new forms_1.FormControl(this.editAccount.institution),
            interest: new forms_1.FormControl(this.editAccount.interest),
            limit: new forms_1.FormControl(this.editAccount.limit),
            name: new forms_1.FormControl(this.editAccount.name),
            number: new forms_1.FormControl(this.editAccount.number),
        });
    };
    AccountEditComponent.prototype.onSubmit = function () {
        this.editAccount.acctType = this.form.get('acctType').value;
        this.editAccount.institution = this.form.get('institution').value;
        this.editAccount.interest = this.form.get('interest').value;
        this.editAccount.limit = this.form.get('limit').value;
        this.editAccount.name = this.form.get('name').value;
        this.editAccount.number = this.form.get('number').value;
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

/***/ "../../../../../src/modules/app/components/accountList/accountList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/accountList/accountList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accounts\">\r\n  <p *ngIf=\"!accounts\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Accounts</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let account of accounts\">\r\n        <td>{{account.id}}</td>\r\n        <td>{{account.acctType}}</td>\r\n        <td>{{account.name}}</td>\r\n        <td>{{account.institution}}</td>\r\n        <td>{{account.number}}</td>\r\n        <td class='right'>{{displayAsPercent(account.interest)}}</td>\r\n        <td class='right'>{{account.limit ? displayAsDollar(account.limit) : '--'}}</td>\r\n        <td class='right'>{{displayAsDollar(account.balance)}}</td>\r\n        <td><a [routerLink]=\"['./account-edit']\">Edit</a></td>\r\n        <td><a (click)=\"onDelete(account.id);\">Delete</a></td>\r\n      </tr>\r\n      <!--<account-item *ngFor=\"let account of accounts\" [account]=\"account\"></account-item>-->\r\n    </tbody>\r\n  </table>\r\n  <a [routerLink]=\"['./account-add']\">Add New Account</a>\r\n  <br />\r\n  <router-outlet>These are your accounts.</router-outlet>\r\n  <account-add (add)=\"onAdd($event)\"></account-add>\r\n  <account-edit *ngIf=\"accounts\" [editAccount] =\"accounts[0]\" (update)=\"onUpdate($event)\"></account-edit>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/accountList/accountList.component.ts":
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
var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(dataService) {
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; }, function (error) { return alert("there was an error getting accounts."); });
    };
    AccountListComponent.prototype.onDelete = function (id) {
        var _this = this;
        var result;
        var indextToDelete = this.accounts.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.accounts[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.accounts[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteAccount(id).subscribe(function (result) {
                if (result === null) {
                    alert("There was a problem deleting.");
                }
                else {
                    _this.accounts.splice(indextToDelete, 1);
                }
            }, function (error) { return alert("There was a problem deleting."); });
        }
        ;
    };
    AccountListComponent.prototype.onAdd = function (newAccount) {
        var _this = this;
        var result;
        console.log("onAdd received from accountAdd: " + JSON.stringify(newAccount));
        this.dataService.addAccount(newAccount).subscribe(function (result) {
            console.log("onAdd received from data.service: " + result);
            if (result === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.accounts.push(result);
            }
        }, function (error) { return alert("There was a problem adding."); });
    };
    AccountListComponent.prototype.onUpdate = function (editAccount) {
        var _this = this;
        var result;
        this.dataService.updateAccount(editAccount).subscribe(function (result) {
            if (result === null) {
                alert("There was a problem updating.");
            }
            else {
                _this.accounts[0] = result;
            }
        }, function (error) { return alert("There was a problem updating."); });
    };
    AccountListComponent = __decorate([
        core_1.Component({
            selector: 'account-list',
            template: __webpack_require__("../../../../../src/modules/app/components/accountList/accountList.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/accountList/accountList.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AccountListComponent);
    return AccountListComponent;
}());
exports.AccountListComponent = AccountListComponent;


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

module.exports = "<div class=\"categoryAdd\">\r\n  <h4>Add</h4>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Tax?</th>\r\n        <th>Type</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{newCategory.id}}</td>\r\n        <td>{{newCategory.name}}</td>\r\n        <td>&nbsp;<span *ngIf=\"newCategory.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n        <td>{{newCategory.type}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"onSubmit()\">Add</button>\r\n\r\n\r\n  <!--<form>\r\n      <label>Type</label>\r\n      <label>Name</label>\r\n      <label>Institution</label>\r\n      <label>Number</label>\r\n      <label>Interest Rate</label>\r\n      <label>Limit</label>\r\n      <input type='submit' value='Add' />\r\n  </form>-->\r\n</div>\r\n"

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
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        this.newCategory = { id: null, name: 'New Category', tax: false, type: '' };
    };
    CategoryAddComponent.prototype.handleTaxButton = function () {
        this.newCategory.tax = !this.newCategory.tax;
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

module.exports = "<div class=\"categoryEdit\">\r\n  <h4>Edit</h4>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Tax?</th>\r\n        <th>Type</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{editCategory.id}}</td>\r\n        <td>{{editCategory.name}}</td>\r\n        <td>&nbsp;<span *ngIf=\"editCategory.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n        <td>{{editCategory.type}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"onSubmit()\">Update</button>\r\n\r\n\r\n  <!--<form>\r\n      <label>Type</label>\r\n      <label>Name</label>\r\n      <label>Institution</label>\r\n      <label>Number</label>\r\n      <label>Interest Rate</label>\r\n      <label>Limit</label>\r\n      <input type='submit' value=\"Update\" />\r\n  </form>-->\r\n</div>\r\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent() {
        this.update = new core_1.EventEmitter();
    }
    CategoryEditComponent.prototype.handleTaxButton = function () {
        this.editCategory.tax = !this.editCategory.tax;
    };
    CategoryEditComponent.prototype.onSubmit = function () {
        this.update.emit(this.editCategory);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CategoryEditComponent.prototype, "editCategory", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CategoryEditComponent.prototype, "update", void 0);
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

/***/ "../../../../../src/modules/app/components/categoryList/categoryList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryList/categoryList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\r\n  <p *ngIf=\"!categories\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Categories</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Tax?</th>\r\n        <th>Type</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories\">\r\n        <td>{{category.id}}</td>\r\n        <td>{{category.name}}</td>\r\n        <td>&nbsp;<span *ngIf=\"category.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n        <td>{{category.type}}</td>\r\n        <td><a [routerLink]=\"['/categorytEdit']\">Edit</a></td>\r\n        <td><a (click)=\"confirm('are you sure you want to delete this category?'); deleteCategory();\">Delete</a></td>\r\n        <!--<category-item *ngFor=\"let category of categories\" [category]=\"category\"></category-item>-->\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"addCategory()\">Add Category</button>\r\n  <category-add (add)=\"onAdd($event)\"></category-add>\r\n  <category-edit *ngIf=\"categories\" [editCategory]=\"categories[0]\" (update)=\"onUpdate($event)\"></category-edit>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryList/categoryList.component.ts":
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
var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(dataService) {
        this.dataService = dataService;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return alert("there was an error getting categories."); });
    };
    CategoryListComponent.prototype.onDelete = function (id) {
        var _this = this;
        var result;
        var indextToDelete = this.categories.findIndex(function (element) { return element.id === id; });
        var confirmation = confirm('are you sure you want to delete ' + this.categories[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteCategory(id).subscribe(function (result) {
                if (result === null) {
                    alert("There was a problem deleting.");
                }
                else {
                    _this.categories.splice(indextToDelete, 1);
                }
            }, function (error) { return alert("There was a problem deleting."); });
        }
        ;
    };
    CategoryListComponent.prototype.onAdd = function (newCategory) {
        var _this = this;
        var result;
        this.dataService.addCategory(newCategory).subscribe(function (result) {
            if (result === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.categories.push(result);
            }
        }, function (error) { return alert("There was a problem adding."); });
    };
    CategoryListComponent.prototype.onUpdate = function (category) {
        var _this = this;
        var result;
        this.dataService.updateCategory(category).subscribe(function (result) {
            if (result === null) {
                alert("There was a problem updating.");
            }
            else {
                _this.categories[0] = result;
            }
        }, function (error) { return alert("There was a problem updating."); });
    };
    CategoryListComponent = __decorate([
        core_1.Component({
            selector: 'category-list',
            template: __webpack_require__("../../../../../src/modules/app/components/categoryList/categoryList.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/categoryList/categoryList.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;


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

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/home']\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                 <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/accounts']\">\r\n                        <span class='glyphicon glyphicon-credit-card'></span> Accounts\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/categories']\">\r\n                        <span class='glyphicon glyphicon-folder-open'></span> Categories\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/transactions']\">\r\n                        <span class='glyphicon glyphicon-list-alt'></span> Transactions\r\n                    </a>\r\n                </li>\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/users']\">\r\n                        <span class='glyphicon glyphicon-user'></span> Users\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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

module.exports = "<div class=\"transactionAdd\">\r\n  <h4>Add</h4>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Data</th>\r\n        <th>Amount</th>\r\n        <th>Category</th>\r\n        <th>Debit Account</th>\r\n        <th>Credit Account</th>\r\n        <th>Tax</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{newTransaction.id}}</td>\r\n        <td>{{newTransaction.date}}</td>\r\n        <td class='right'>{{displayAsDollar(newTransaction.amount)}}</td>\r\n        <td>{{newTransaction.category}}</td>\r\n        <td>{{newTransaction.drAcct}}</td>\r\n        <td>{{newTransaction.crAcct}}</td>\r\n        <td>&nbsp;<span *ngIf=\"newTransaction.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"onSubmit()\">Add</button>\r\n\r\n\r\n  <!--<form>\r\n      <label>Type</label>\r\n      <label>Name</label>\r\n      <label>Institution</label>\r\n      <label>Number</label>\r\n      <label>Interest Rate</label>\r\n      <label>Limit</label>\r\n      <input type='submit' value='Add' />\r\n  </form>-->\r\n</div>\r\n"

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
    }
    TransactionAddComponent.prototype.ngOnInit = function () {
        this.newTransaction = { id: null, amount: 0, category: 0, crAcct: 0, date: '', drAcct: 0, tax: false, };
    };
    TransactionAddComponent.prototype.handleTaxButton = function () {
        this.newTransaction.tax = !this.newTransaction.tax;
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

module.exports = "<div class=\"transactionEdit\">\r\n  <h4>Edit</h4>\r\n  <table>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Data</th>\r\n        <th>Amount</th>\r\n        <th>Category</th>\r\n        <th>Debit Account</th>\r\n        <th>Credit Account</th>\r\n        <th>Tax</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr>\r\n        <td>{{editTransaction.id}}</td>\r\n        <td>{{editTransaction.date}}</td>\r\n        <td class='right'>{{displayAsDollar(editTransaction.amount)}}</td>\r\n        <td>{{editTransaction.category}}</td>\r\n        <td>{{editTransaction.drAcct}}</td>\r\n        <td>{{editTransaction.crAcct}}</td>\r\n        <td>&nbsp;<span *ngIf=\"editTransaction.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"onSubmit()\">Update</button>\r\n\r\n\r\n  <!--<form>\r\n      <label>Type</label>\r\n      <label>Name</label>\r\n      <label>Institution</label>\r\n      <label>Number</label>\r\n      <label>Interest Rate</label>\r\n      <label>Limit</label>\r\n      <input type='submit' value=\"Update\" />\r\n  </form>-->\r\n</div>\r\n"

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent() {
        this.update = new core_1.EventEmitter();
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionEditComponent.prototype.handleTaxButton = function () {
        this.editTransaction.tax = !this.editTransaction.tax;
    };
    TransactionEditComponent.prototype.onSubmit = function () {
        this.update.emit(this.editTransaction);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TransactionEditComponent.prototype, "editTransaction", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TransactionEditComponent.prototype, "update", void 0);
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

/***/ "../../../../../src/modules/app/components/transactionList/transactionList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionList/transactionList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactions\">\r\n  <p *ngIf=\"!transactions\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Transactions</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Date</th>\r\n        <th>Amount</th>\r\n        <th>Category</th>\r\n        <th>Debit Account</th>\r\n        <th>Credit Account</th>\r\n        <th>Tax?</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let transaction of transactions\">\r\n        <td>{{transaction.id}}</td>\r\n        <td>{{transaction.date | date}}</td>\r\n        <td className='right'>{{displayAsDollar(transaction.amount)}}</td>\r\n        <td>{{transaction.category}}</td>\r\n        <td>{{transaction.drAcct}}</td>\r\n        <td>{{transaction.crAcct}}</td>\r\n        <td>&nbsp;<span *ngIf=\"transaction.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n        <td><a [routerLink]=\"['/transactionEdit']\">Edit</a></td>\r\n        <td><a (click)=\"onDelete(transaction.id);\">Delete</a></td>\r\n      </tr>\r\n      <!--<transaction-item *ngFor=\"let transaction of transactions\" [transaction]=\"transaction\"></transaction-item>-->\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"addTransaction()\">Add Transaction</button>\r\n  <transaction-add (add)=\"onAdd($event)\"></transaction-add>\r\n  <transaction-edit *ngIf=\"transactions\" [editTransaction]=\"transactions[0]\" (update)=\"onUpdate($event)\"></transaction-edit>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionList/transactionlist.component.ts":
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
var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent(dataService) {
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionListComponent.prototype.ngOnInit = function () {
        this.getTransactions();
    };
    TransactionListComponent.prototype.getTransactions = function () {
        var _this = this;
        this.dataService.getTransactions().subscribe(function (transactions) { return _this.transactions = transactions; }, function (error) { return alert("there was an error getting transactions."); });
    };
    TransactionListComponent.prototype.onDelete = function (id) {
        var _this = this;
        var result;
        var indextToDelete = this.transactions.findIndex(function (element) { return element.id === id; });
        var confirmation = confirm('are you sure you want to delete transaction on date' + this.transactions[indextToDelete].date + '?');
        if (confirmation) {
            this.dataService.deleteTransaction(id).subscribe(function (result) {
                if (result === null) {
                    alert("There was a problem deleting.");
                }
                else {
                    _this.transactions.splice(indextToDelete, 1);
                }
            }, function (error) { return alert("There was a problem deleting."); });
        }
        ;
    };
    TransactionListComponent.prototype.onAdd = function (newTransaction) {
        var _this = this;
        var result;
        this.dataService.addTransaction(newTransaction).subscribe(function (result) {
            if (result === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.transactions.push(result);
            }
        }, function (error) { return alert("There was a problem adding."); });
    };
    TransactionListComponent.prototype.onUpdate = function (transaction) {
        var _this = this;
        var result;
        this.dataService.updateTransaction(transaction).subscribe(function (result) {
            if (result === null) {
                alert("There was a problem updating.");
            }
            else {
                _this.transactions[0] = result;
            }
        }, function (error) { return alert("There was a problem updating."); });
    };
    TransactionListComponent = __decorate([
        core_1.Component({
            selector: 'transaction-list',
            template: __webpack_require__("../../../../../src/modules/app/components/transactionList/transactionList.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/transactionList/transactionList.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TransactionListComponent);
    return TransactionListComponent;
}());
exports.TransactionListComponent = TransactionListComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/userList/userList.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/userList/userList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"users\">\r\n  <p *ngIf=\"!users\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Users</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Username</th>\r\n        <th>Admin</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>{{user.id}}</td>\r\n        <td>{{user.userName}}</td>\r\n        <td><input type='checkbox' checked={{user.admin}} (Change)=\"toggleAdmin()\" /></td>\r\n        <td><a [routerLink]=\"['/accountEdit']\">Edit</a></td>\r\n        <td><a (click)=\"onDelete(account.id);\">Delete</a></td>\r\n      </tr>\r\n      <!--<user-item *ngFor=\"let user of users\" [user]=\"user\"></user-item>-->\r\n    </tbody>\r\n  </table>\r\n  <button (click)=\"addUser()\">Add User</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/userList/userList.component.ts":
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
var UserListComponent = /** @class */ (function () {
    function UserListComponent(dataService) {
        this.dataService = dataService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UserListComponent.prototype.onDelete = function (id) {
        var confirmation = confirm('are you sure you want to delete ' + this.users.find(function (element) { return element.id == id; }).userName + '?');
        if (confirmation) {
            alert("Ha! User " + id + " is GONE!");
        }
        ;
    };
    UserListComponent.prototype.onMakeAdmin = function (id) {
        var _this = this;
        this.dataService.makeAdmin(id).subscribe(function (result) { _this.users[0].admin = true; }, function (error) { return alert("There was a problem updating."); });
    };
    UserListComponent.prototype.onUnmakeAdmin = function (id) {
        var _this = this;
        this.dataService.makeAdmin(id).subscribe(function (result) { _this.users[0].admin = false; }, function (error) { return alert("There was a problem updating."); });
    };
    UserListComponent.prototype.onPasswordReset = function (id) {
        this.dataService.makeAdmin(id).subscribe(function (result) { }, function (error) { return alert("There was a problem updating."); });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            template: __webpack_require__("../../../../../src/modules/app/components/userList/userList.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/userList/userList.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;


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
    // --Accounts--
    DataService.prototype.getAccounts = function () {
        console.log("data.service.getAccounts...");
        return this.http.get('/api/Accounts');
    };
    DataService.prototype.addAccount = function (accountToAdd) {
        console.log("data.service.addAccount received: " + JSON.stringify(accountToAdd));
        return this.http.post('/api/Accounts', accountToAdd);
    };
    DataService.prototype.deleteAccount = function (id) {
        console.log("data.service.deleteAccount received: " + id);
        return this.http.delete('/api/Accounts/' + id);
    };
    DataService.prototype.updateAccount = function (accountToUpdate) {
        console.log("data.service.updateAccount received: " + JSON.stringify(accountToUpdate));
        return this.http.put('/api/Accounts', accountToUpdate);
    };
    // --Categories--
    DataService.prototype.getCategories = function () {
        return this.http.get('/api/Categories');
    };
    DataService.prototype.addCategory = function (categoryToAdd) {
        return this.http.post('/api/Categories', categoryToAdd);
    };
    DataService.prototype.deleteCategory = function (id) {
        return this.http.delete('/api/Categories/' + id);
    };
    DataService.prototype.updateCategory = function (categoryToUpdate) {
        return this.http.put('/api/Categories', categoryToUpdate);
    };
    // --Transactions--
    DataService.prototype.getTransactions = function () {
        return this.http.get('/api/Transactions');
    };
    DataService.prototype.addTransaction = function (transactionToAdd) {
        return this.http.post('/api/Transactions', transactionToAdd);
    };
    DataService.prototype.deleteTransaction = function (id) {
        return this.http.delete('/api/Transactions/' + id);
    };
    DataService.prototype.updateTransaction = function (transactionToUpdate) {
        return this.http.put('/api/Transactions', transactionToUpdate);
    };
    // --Users--
    DataService.prototype.getUsers = function () {
        return this.http.get('/api/Users');
    };
    DataService.prototype.makeAdmin = function (id) {
        return this.http.put('/api/Users/Admin/' + id, id);
    };
    DataService.prototype.unmakeAdmin = function (id) {
        return this.http.put('/api/Users/NoAdmin/' + id, id);
    };
    DataService.prototype.resetPassword = function (id, newPassword) {
        return this.http.put('/api/Users/Reset' + id, newPassword);
    };
    DataService.prototype.deleteUser = function (id) {
        return this.http.delete('/api/Users' + id);
    };
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
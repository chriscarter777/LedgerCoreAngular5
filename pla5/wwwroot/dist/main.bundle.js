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

module.exports = "<div class=\"accountAdd\">\r\n  <h4>Add</h4>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Type</label>\r\n    <input type='radio' name=\"acctType\" formControlName=\"acctType\" value=\"Asset\" /> Asset\r\n    <input type='radio' name=\"acctType\" formControlName=\"acctType\" value=\"Liability\" /> Liability <br />\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Institution</label>\r\n    <input type='text' name=\"institution\" formControlName=\"institution\" /> <br />\r\n    <label>Number</label>\r\n    <input type='text' name=\"number\" formControlName=\"number\" /> <br />\r\n    <label>Interest Rate</label>\r\n    <input type='number' name=\"interest\" formControlName=\"interest\" />% <br />\r\n    <label>Limit<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"limit\" formControlName=\"limit\" /> <br />\r\n    <input type='submit' value=\"Add\" />\r\n    <button (click)=\"goBack()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var AccountAddComponent = /** @class */ (function () {
    function AccountAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
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
    AccountAddComponent.prototype.freshNewAccount = function () {
        return { id: null, balance: 0, acctType: "Asset", institution: '', interest: 0, limit: 0, name: 'New Account', number: '', owned: true };
    };
    AccountAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    AccountAddComponent.prototype.onSubmit = function () {
        this.newAccount.acctType = this.form.get('acctType').value;
        this.newAccount.institution = this.form.get('institution').value;
        this.newAccount.interest = this.form.get('interest').value;
        this.newAccount.limit = this.form.get('limit').value;
        this.newAccount.name = this.form.get('name').value;
        this.newAccount.number = this.form.get('number').value;
        this.dataService.addAccount(this.newAccount);
        //reset
        this.ngOnInit();
        this.goBack();
    };
    AccountAddComponent = __decorate([
        core_1.Component({
            selector: 'account-add',
            template: __webpack_require__("../../../../../src/modules/app/components/accountAdd/accountAdd.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/accountAdd/accountAdd.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], AccountAddComponent);
    return AccountAddComponent;
}()); //class
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

module.exports = "<div class=\"accountEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Type</label>\r\n    <input type='radio' name=\"acctType\" value=\"Asset\" formControlName=\"acctType\" /> Asset\r\n    <input type='radio' name=\"acctType\" value=\"Liability\" formControlName=\"acctType\" /> Liability <br />\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Institution</label>\r\n    <input type='text' name=\"institution\" formControlName=\"institution\" /> <br />\r\n    <label>Number</label>\r\n    <input type='text' name=\"number\" formControlName=\"number\" /> <br />\r\n    <label>Interest Rate</label>\r\n    <input type='number' name=\"interest\" formControlName=\"interest\" />% <br />\r\n    <label>Limit<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"limit\" formControlName=\"limit\" /> <br />\r\n    <input type='submit' value=\"Update\" />\r\n    <button (click)=\"goBack()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var AccountEditComponent = /** @class */ (function () {
    function AccountEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountEditComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AccountEditComponent.prototype.createForm = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.dataService.getAccount(id).subscribe(function (account) {
            _this.editAccount = account;
            _this.instantiateForm();
        }, function (error) { return alert("there was an error getting account."); });
    };
    AccountEditComponent.prototype.instantiateForm = function () {
        this.form = new forms_1.FormGroup({
            acctType: new forms_1.FormControl(this.editAccount.acctType),
            institution: new forms_1.FormControl(this.editAccount.institution),
            interest: new forms_1.FormControl(this.editAccount.interest),
            limit: new forms_1.FormControl(this.editAccount.limit),
            name: new forms_1.FormControl(this.editAccount.name),
            number: new forms_1.FormControl(this.editAccount.number),
        });
    };
    AccountEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    AccountEditComponent.prototype.onSubmit = function () {
        this.editAccount.acctType = this.form.get('acctType').value;
        this.editAccount.institution = this.form.get('institution').value;
        this.editAccount.interest = this.form.get('interest').value;
        this.editAccount.limit = this.form.get('limit').value;
        this.editAccount.name = this.form.get('name').value;
        this.editAccount.number = this.form.get('number').value;
        this.dataService.updateAccount(this.editAccount);
        //reset
        this.goBack();
    };
    AccountEditComponent = __decorate([
        core_1.Component({
            selector: 'account-edit',
            template: __webpack_require__("../../../../../src/modules/app/components/accountEdit/accountEdit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/accountEdit/accountEdit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], AccountEditComponent);
    return AccountEditComponent;
}()); //class
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

module.exports = "<div class=\"accounts\">\r\n  <p *ngIf=\"!accounts\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Accounts</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Type</th>\r\n        <th>Name</th>\r\n        <th>Institution</th>\r\n        <th>Number</th>\r\n        <th>Interest</th>\r\n        <th>Limit</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let account of accounts\">\r\n        <td>{{account.id}}</td>\r\n        <td>{{account.acctType}}</td>\r\n        <td>{{account.name}}</td>\r\n        <td>{{account.institution}}</td>\r\n        <td>{{account.number}}</td>\r\n        <td class='right'>{{displayAsPercent(account.interest)}}</td>\r\n        <td class='right'>{{account.limit ? displayAsDollar(account.limit) : '--'}}</td>\r\n        <td class='right'>{{displayAsDollar(account.balance)}}</td>\r\n        <td><a routerLink=\"./account-edit/{{account.id}}\">Edit</a></td>\r\n        <td><a (click)=\"onDelete(account.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a routerLink=\"./account-add\">Add New Account</a>\r\n  <br />\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
        var _this = this;
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
        this.dataService.accountAdded.subscribe(function (data) {
            console.log("accountAdded received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.accounts.push(data);
            }
        }, function (error) { return alert("There was a problem adding."); });
        this.dataService.accountDeleted.subscribe(function (data) {
            console.log("accountDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.accounts.findIndex(function (element) { return element.id === data.id; });
                _this.accounts.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
        this.dataService.accountUpdated.subscribe(function (data) {
            console.log("accountUpdated received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem updating.");
            }
            else {
                var indexToUpdate = _this.accounts.findIndex(function (element) { return element.id == data.id; });
                _this.accounts[indexToUpdate] = data;
            }
        }, function (error) { return alert("There was a problem updating."); });
    } //ctor
    AccountListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; }, function (error) { return alert("there was an error getting accounts."); });
    };
    AccountListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.accounts.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.accounts[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.accounts[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteAccount(id);
        }
        ;
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
}()); //class
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
        this.title = 'Personal Ledger';
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
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n\r\nselect {\r\n  width: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categoryAdd\">\r\n  <h4>Add</h4>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Type</label>\r\n    <select name=\"type\" formControlName=\"type\">\r\n      <option value=\"Expense\">Expense</option>\r\n      <option value=\"Income\">Income</option>\r\n      <option value=\"Other\">Other</option>\r\n    </select> <br />\r\n    <!--<input type='text' name=\"type\" formControlName=\"type\" /> <br />-->\r\n    <label>Tax</label>\r\n    <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" /> <br />\r\n    <input type='submit' value=\"Add\" />\r\n    <button (click)=\"goBack()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        this.newCategory = this.freshNewCategory();
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.newCategory.name),
            tax: new forms_1.FormControl(this.newCategory.tax),
            type: new forms_1.FormControl(this.newCategory.type),
        });
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
            template: __webpack_require__("../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/categoryAdd/categoryAdd.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
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
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n\r\nselect {\r\n  width: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categoryEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Type</label>\r\n    <select name=\"type\" formControlName=\"type\">\r\n      <option value=\"Expense\">Expense</option>\r\n      <option value=\"Income\">Income</option>\r\n      <option value=\"Other\">Other</option>\r\n    </select> <br />\r\n    <!--<input type='text' name=\"type\" formControlName=\"type\" /> <br />-->\r\n    <label>Tax</label>\r\n    <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" /> <br />\r\n    <input type='submit' value=\"Update\" />\r\n    <button (click)=\"goBack()\">Cancel</button>\r\n    <button (click)=\"goBack()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
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
            template: __webpack_require__("../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/categoryEdit/categoryEdit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
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
exports.push([module.i, "body {\r\n}\r\n\r\ntable{\r\n  display:block;\r\n  max-height:60vh;\r\n  overflow-y:auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/categoryList/categoryList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\r\n  <p *ngIf=\"!categories\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Categories</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Tax?</th>\r\n        <th>Type</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories\">\r\n        <td>{{category.id}}</td>\r\n        <td>{{category.name}}</td>\r\n        <td>&nbsp;<span *ngIf=\"category.tax\" class='glyphicon glyphicon-record' style='color:green;'></span></td>\r\n        <td>{{category.type}}</td>\r\n        <td><a routerLink=\"./category-edit/{{category.id}}\">Edit</a></td>\r\n        <td><a (click)=\"onDelete(category.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a routerLink=\"./category-add\">Add New Category</a>\r\n  <br />\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
        var _this = this;
        this.dataService = dataService;
        this.dataService.categoryAdded.subscribe(function (data) {
            console.log("categoryAdded received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.categories.push(data);
            }
        }, function (error) { return alert("There was a problem adding."); });
        this.dataService.categoryDeleted.subscribe(function (data) {
            console.log("categoryDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.categories.findIndex(function (element) { return element.id === data.id; });
                _this.categories.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
        this.dataService.categoryUpdated.subscribe(function (data) {
            console.log("categoryUpdated received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem updating.");
            }
            else {
                var indexToUpdate = _this.categories.findIndex(function (element) { return element.id == data.id; });
                _this.categories[indexToUpdate] = data;
            }
        }, function (error) { return alert("There was a problem updating."); });
    } //ctor
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return alert("there was an error getting categories."); });
    };
    CategoryListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.categories.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.categories[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.categories[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteCategory(id);
        }
        ;
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

module.exports = "<div class=\"mainTitle\">\r\n    <p class=\"mainTitle-sub\">Chris Carter's</p>\r\n    <p class=\"mainTitle-main\">PersonalLedger</p>\r\n</div>\r\n<div class=\"center lime\">\r\n    <p>A home bookkeeping application, using traditional debit-credit methodology, built as a hybrid MVC/SPA using:</p>\r\n    <ul class=\"unstyledList left indented35\">\r\n        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n        <li><a>IdentityCore</a> for authentication and security</li>\r\n        <li><a>EntityFrameworkCore</a> for relational object mapping</li>\r\n        <li><a>XUnit</a>, <a>Karma</a> and <a>Protractor</a> for testing</li>\r\n        <li><a href='https://angular.io/'>Angular 5</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n    </ul>\r\n</div>\r\n"

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
        this.title = 'PLA5 Home';
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

module.exports = "<div class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/home\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                 <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/accounts\">\r\n                        <span class='glyphicon glyphicon-credit-card'></span> Accounts\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/categories\">\r\n                        <span class='glyphicon glyphicon-folder-open'></span> Categories\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/transactions\">\r\n                        <span class='glyphicon glyphicon-list-alt'></span> Transactions\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/users\">\r\n                        <span class='glyphicon glyphicon-user'></span> Users\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

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
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactionAdd\">\r\n  <h4>Add</h4>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Date</label>\r\n    <input type='date' name=\"date\" formControlName=\"date\" /> <br />\r\n    <label>Category</label>\r\n    <input type='text' name=\"category\" formControlName=\"category\" /> <br />\r\n    <label>Amount<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"amount\" formControlName=\"amount\" /> <br />\r\n    <label>Debit Account</label>\r\n    <input type='text' name=\"drAccount\" formControlName=\"drAccount\" /> <br />\r\n    <label>Credit Account</label>\r\n    <input type='text' name=\"crAccount\" formControlName=\"crAccount\" /> <br />\r\n    <label>Tax</label>\r\n    <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" />\r\n    <input type='submit' value=\"Add\" />\r\n  </form>\r\n</div>\r\n"

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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var TransactionAddComponent = /** @class */ (function () {
    function TransactionAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionAddComponent.prototype.ngOnInit = function () {
        this.newTransaction = this.freshNewTransaction();
        this.form = new forms_1.FormGroup({
            amount: new forms_1.FormControl(this.newTransaction.amount),
            category: new forms_1.FormControl(this.newTransaction.category),
            crAcct: new forms_1.FormControl(this.newTransaction.crAcct),
            date: new forms_1.FormControl(this.newTransaction.date),
            drAcct: new forms_1.FormControl(this.newTransaction.drAcct),
            tax: new forms_1.FormControl(this.newTransaction.tax),
        });
    };
    TransactionAddComponent.prototype.freshNewTransaction = function () {
        return { id: null, amount: 0, category: 0, crAcct: 0, date: '', drAcct: 0, tax: false };
    };
    TransactionAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionAddComponent.prototype.onSubmit = function () {
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.form.get('category').value;
        this.newTransaction.crAcct = this.form.get('crAcct').value;
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.drAcct = this.form.get('drAcct').value;
        this.newTransaction.tax = this.form.get('tax').value;
        this.dataService.addTransaction(this.newTransaction);
        //reset
        this.ngOnInit();
        this.goBack();
    };
    TransactionAddComponent = __decorate([
        core_1.Component({
            selector: 'transaction-add',
            template: __webpack_require__("../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/transactionAdd/transactionAdd.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
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
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactionEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Date</label>\r\n    <input type='date' name=\"date\" formControlName=\"date\" /> <br />\r\n    <label>Category</label>\r\n    <input type='text' name=\"category\" formControlName=\"category\" /> <br />\r\n    <label>Amount<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"amount\" formControlName=\"amount\" /> <br />\r\n    <label>Debit Account</label>\r\n    <input type='text' name=\"drAcct\" formControlName=\"drAcct\" /> <br />\r\n    <label>Credit Account</label>\r\n    <input type='text' name=\"crAcct\" formControlName=\"crAcct\" /> <br />\r\n    <label>Tax</label>\r\n    <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" />\r\n    <input type='submit' value=\"Update\" />\r\n    <button (click)=\"goBack()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

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
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionEditComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    TransactionEditComponent.prototype.createForm = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.dataService.getTransaction(id).subscribe(function (transaction) {
            _this.editTransaction = transaction;
            _this.instantiateForm();
        }, function (error) { return alert("there was an error getting transaction."); });
    };
    TransactionEditComponent.prototype.instantiateForm = function () {
        this.form = new forms_1.FormGroup({
            amount: new forms_1.FormControl(this.editTransaction.amount),
            category: new forms_1.FormControl(this.editTransaction.category),
            crAcct: new forms_1.FormControl(this.editTransaction.crAcct),
            date: new forms_1.FormControl(this.editTransaction.date),
            drAcct: new forms_1.FormControl(this.editTransaction.drAcct),
            tax: new forms_1.FormControl(this.editTransaction.tax),
        });
    };
    TransactionEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionEditComponent.prototype.onSubmit = function () {
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.form.get('category').value;
        this.editTransaction.crAcct = this.form.get('crAcct').value;
        this.editTransaction.date = this.form.get('date').value;
        this.editTransaction.drAcct = this.form.get('drAcct').value;
        this.editTransaction.tax = this.form.get('tax').value;
        this.dataService.updateTransaction(this.editTransaction);
        //reset
        this.goBack();
    };
    TransactionEditComponent = __decorate([
        core_1.Component({
            selector: 'transaction-edit',
            template: __webpack_require__("../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/transactionEdit/transactionEdit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
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

module.exports = "<div class=\"transactions\">\r\n  <p *ngIf=\"!transactions\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Transactions</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Date</th>\r\n        <th>Amount</th>\r\n        <th>Category</th>\r\n        <th>Debit Account</th>\r\n        <th>Credit Account</th>\r\n        <th>Tax?</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let transaction of transactions\">\r\n        <td>{{transaction.id}}</td>\r\n        <td>{{transaction.date | date}}</td>\r\n        <td className='right'>{{displayAsDollar(transaction.amount)}}</td>\r\n        <td>{{transaction.category}}</td>\r\n        <td>{{transaction.drAcct}}</td>\r\n        <td>{{transaction.crAcct}}</td>\r\n        <td>&nbsp;<span *ngIf=\"transaction.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n        <td><a routerLink=\"./transaction-edit/{{transaction.id}}\">Edit</a></td>\r\n        <td><a (click)=\"onDelete(transaction.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a routerLink=\"./transaction-add\">Add New Transaction</a>\r\n  <br />\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

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
        var _this = this;
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.dataService.transactionAdded.subscribe(function (data) {
            console.log("transactionAdded received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.transactions.push(data);
            }
        }, function (error) { return alert("There was a problem adding."); });
        this.dataService.transactionDeleted.subscribe(function (data) {
            console.log("transactionDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.transactions.findIndex(function (element) { return element.id === data.id; });
                _this.transactions.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
        this.dataService.transactionUpdated.subscribe(function (data) {
            console.log("transactionUpdated received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem updating.");
            }
            else {
                var indexToUpdate = _this.transactions.findIndex(function (element) { return element.id == data.id; });
                _this.transactions[indexToUpdate] = data;
            }
        }, function (error) { return alert("There was a problem updating."); });
    } //ctor
    TransactionListComponent.prototype.ngOnInit = function () {
        this.getTransactions();
    };
    TransactionListComponent.prototype.getTransactions = function () {
        var _this = this;
        this.dataService.getTransactions().subscribe(function (transactions) { return _this.transactions = transactions; }, function (error) { return alert("there was an error getting transactions."); });
    };
    TransactionListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.transactions.findIndex(function (element) { return element.id === id; });
        var dateToDelete = this.transactions[indextToDelete].date;
        var confirmation = confirm('Are you sure you want to delete transaction on ' + dateToDelete + '?');
        if (confirmation) {
            this.dataService.deleteAccount(id);
        }
        ;
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

module.exports = "<div class=\"users\">\r\n  <p *ngIf=\"!users\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Users</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Username</th>\r\n        <th>Admin</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let user of users\">\r\n        <td>{{user.id}}</td>\r\n        <td>{{user.userName}}</td>\r\n        <td><input type='checkbox' checked={{user.admin}} (Change)=\"onToggleAdmin(user.id)\" /></td>\r\n        <td><a (click)=\"onReset(user.id);\">Reset Password</a></td>\r\n        <td><a (click)=\"onDelete(user.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

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
        var _this = this;
        this.dataService = dataService;
        this.dataService.userDeleted.subscribe(function (data) {
            console.log("accountDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.users.findIndex(function (element) { return element.id === data.id; });
                _this.users.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
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
            this.dataService.deleteUser(id);
        }
        ;
    };
    UserListComponent.prototype.onToggleAdmin = function (id) {
        var indexToToggle = this.users.findIndex(function (element) { return element.id === id; });
        if (this.users[indexToToggle].admin === true) {
            this.users[indexToToggle].admin = false;
            this.dataService.unmakeAdmin(id);
        }
        else {
            this.users[indexToToggle].admin = true;
            this.dataService.makeAdmin(id);
        }
    };
    UserListComponent.prototype.onReset = function (id) {
        this.dataService.resetPassword(id, "Password?123");
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

//This class is responsible for all interation with the data API (a .NET Core WebAPI, which in turn interacts with a repository), and emitting notifications when data changes 
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
        // --Events--
        this.accountAdded = new core_1.EventEmitter();
        this.accountDeleted = new core_1.EventEmitter();
        this.accountUpdated = new core_1.EventEmitter();
        this.categoryAdded = new core_1.EventEmitter();
        this.categoryDeleted = new core_1.EventEmitter();
        this.categoryUpdated = new core_1.EventEmitter();
        this.transactionAdded = new core_1.EventEmitter();
        this.transactionDeleted = new core_1.EventEmitter();
        this.transactionUpdated = new core_1.EventEmitter();
        this.userDeleted = new core_1.EventEmitter();
        this.userDemoted = new core_1.EventEmitter();
        this.userPromoted = new core_1.EventEmitter();
        this.userReset = new core_1.EventEmitter();
    }
    // --Accounts--
    DataService.prototype.getAccounts = function () {
        console.log("data.service.getAccounts...");
        return this.http.get('/api/Accounts');
    };
    DataService.prototype.getAccount = function (id) {
        console.log("data.service.getAccount...");
        return this.http.get('/api/Accounts/' + id);
    };
    DataService.prototype.addAccount = function (accountToAdd) {
        var _this = this;
        console.log("data.service.addAccount received: " + JSON.stringify(accountToAdd));
        var response = this.http.post('/api/Accounts', accountToAdd)
            .toPromise()
            .then(function (result) {
            _this.accountAdded.emit(result);
        });
    };
    DataService.prototype.deleteAccount = function (id) {
        var _this = this;
        console.log("data.service.deleteAccount received: " + id);
        var response = this.http.delete('/api/Accounts/' + id)
            .toPromise()
            .then(function (result) {
            _this.accountDeleted.emit(result);
        });
    };
    DataService.prototype.updateAccount = function (accountToUpdate) {
        var _this = this;
        console.log("data.service.updateAccount received: " + JSON.stringify(accountToUpdate));
        var response = this.http.put('/api/Accounts', accountToUpdate)
            .toPromise()
            .then(function (result) {
            _this.accountUpdated.emit(result);
        });
    };
    // --Categories--
    DataService.prototype.getCategories = function () {
        return this.http.get('/api/Categories');
    };
    DataService.prototype.getCategory = function (id) {
        console.log("data.service.getCategory...");
        return this.http.get('/api/Categories/' + id);
    };
    DataService.prototype.addCategory = function (categoryToAdd) {
        var _this = this;
        var response = this.http.post('/api/Categories', categoryToAdd)
            .toPromise()
            .then(function (result) {
            _this.categoryAdded.emit(result);
        });
    };
    DataService.prototype.deleteCategory = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Categories/' + id)
            .toPromise()
            .then(function (result) {
            _this.categoryDeleted.emit(result);
        });
    };
    DataService.prototype.updateCategory = function (categoryToUpdate) {
        var _this = this;
        var response = this.http.put('/api/Categories', categoryToUpdate)
            .toPromise()
            .then(function (result) {
            _this.categoryUpdated.emit(result);
        });
    };
    // --Transactions--
    DataService.prototype.getTransactions = function () {
        return this.http.get('/api/Transactions');
    };
    DataService.prototype.getTransaction = function (id) {
        console.log("data.service.getTransaction...");
        return this.http.get('/api/Transactions/' + id);
    };
    DataService.prototype.addTransaction = function (transactionToAdd) {
        var _this = this;
        var response = this.http.post('/api/Transactions', transactionToAdd)
            .toPromise()
            .then(function (result) {
            _this.transactionAdded.emit(result);
        });
    };
    DataService.prototype.deleteTransaction = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Transactions/' + id)
            .toPromise()
            .then(function (result) {
            _this.transactionDeleted.emit(result);
        });
    };
    DataService.prototype.updateTransaction = function (transactionToUpdate) {
        var _this = this;
        var response = this.http.put('/api/Transactions', transactionToUpdate)
            .toPromise()
            .then(function (result) {
            _this.transactionUpdated.emit(result);
        });
    };
    // --Users--
    DataService.prototype.getUsers = function () {
        return this.http.get('/api/Users');
    };
    DataService.prototype.getUser = function (id) {
        console.log("data.service.getUser...");
        return this.http.get('/api/User/' + id);
    };
    DataService.prototype.makeAdmin = function (id) {
        var _this = this;
        var response = this.http.put('/api/Users/Admin/' + id, id)
            .toPromise()
            .then(function (result) {
            _this.userPromoted.emit(result);
        });
    };
    DataService.prototype.unmakeAdmin = function (id) {
        var _this = this;
        var response = this.http.put('/api/Users/NoAdmin/' + id, id)
            .toPromise()
            .then(function (result) {
            _this.userDemoted.emit(result);
        });
    };
    DataService.prototype.resetPassword = function (id, newPassword) {
        var _this = this;
        var response = this.http.put('/api/Users/Reset' + id, newPassword)
            .toPromise()
            .then(function (result) {
            _this.userReset.emit(result);
        });
    };
    DataService.prototype.deleteUser = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Users' + id)
            .toPromise()
            .then(function (result) {
            _this.userDeleted.emit(result);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userDemoted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userPromoted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userReset", void 0);
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
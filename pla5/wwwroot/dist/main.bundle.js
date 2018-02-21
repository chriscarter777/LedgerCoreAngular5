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

/***/ "../../../../../src/modules/accounts/accounts.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var account_add_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-add/account-add.component.ts");
var account_edit_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-edit/account-edit.component.ts");
var account_list_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-list/account-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var accounts_routing_module_1 = __webpack_require__("../../../../../src/modules/accounts/accounts.routing.module.ts");
var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                accounts_routing_module_1.AccountRoutingModule
            ],
            declarations: [
                account_add_component_1.AccountAddComponent,
                account_edit_component_1.AccountEditComponent,
                account_list_component_1.AccountListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], AccountsModule);
    return AccountsModule;
}());
exports.AccountsModule = AccountsModule;


/***/ }),

/***/ "../../../../../src/modules/accounts/accounts.routing.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var account_add_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-add/account-add.component.ts");
var account_edit_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-edit/account-edit.component.ts");
var account_list_component_1 = __webpack_require__("../../../../../src/modules/accounts/components/account-list/account-list.component.ts");
var accountsRoutes = [
    {
        path: 'accounts',
        component: account_list_component_1.AccountListComponent,
        children: [
            {
                path: 'account-add', component: account_add_component_1.AccountAddComponent
            },
            { path: 'account-edit/:id', component: account_edit_component_1.AccountEditComponent }
        ]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(accountsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());
exports.AccountRoutingModule = AccountRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-add/account-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel{\r\n  width:100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-add/account-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountAdd\">\r\n  <h4>Add</h4>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Type</label>\r\n    <input type='radio' name=\"acctType\" formControlName=\"acctType\" value=\"Asset\" /> Asset\r\n    <input type='radio' name=\"acctType\" formControlName=\"acctType\" value=\"Liability\" /> Liability <br />\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" autofocus/> <br />\r\n    <label>Institution</label>\r\n    <input type='text' name=\"institution\" formControlName=\"institution\" /> <br />\r\n    <label>Number</label>\r\n    <input type='text' name=\"number\" formControlName=\"number\" /> <br />\r\n    <label>Interest Rate</label>\r\n    <input type='number' name=\"interest\" formControlName=\"interest\" />% <br />\r\n    <label>Limit<span class=\"pull-right\">$</span></label>\r\n    <input type='number' name=\"limit\" formControlName=\"limit\" /> <br />\r\n    <input type='submit' value=\"Add\" />\r\n    <button routerLink=\"/accounts\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-add/account-add.component.ts":
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
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
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
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
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
    AccountAddComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    AccountAddComponent.prototype.freshNewAccount = function () {
        return { id: null, active: true, balance: 0, acctType: "Asset", institution: '', interest: 0, limit: 0, name: 'New Account', number: '', owned: true };
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
            template: __webpack_require__("../../../../../src/modules/accounts/components/account-add/account-add.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/accounts/components/account-add/account-add.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], AccountAddComponent);
    return AccountAddComponent;
}()); //class
exports.AccountAddComponent = AccountAddComponent;


/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-edit/account-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-edit/account-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accountEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n      <label>Active</label>\r\n      <input type=\"checkbox\" formControlName=\"active\"> <br />\r\n      <label>Type</label>\r\n      <input type='radio' name=\"acctType\" value=\"Asset\" formControlName=\"acctType\" /> Asset\r\n      <input type='radio' name=\"acctType\" value=\"Liability\" formControlName=\"acctType\" /> Liability <br />\r\n      <label>Name</label>\r\n      <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n      <label>Institution</label>\r\n      <input type='text' name=\"institution\" formControlName=\"institution\" /> <br />\r\n      <label>Number</label>\r\n      <input type='text' name=\"number\" formControlName=\"number\" /> <br />\r\n      <label>Interest Rate</label>\r\n      <input type='number' name=\"interest\" formControlName=\"interest\" />% <br />\r\n      <label>Limit<span class=\"pull-right\">$</span></label>\r\n      <input type='number' name=\"limit\" formControlName=\"limit\" /> <br />\r\n      <input type='submit' value=\"Update\" />\r\n      <button routerLink=\"/accounts\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-edit/account-edit.component.ts":
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
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
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
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        var id = +this.route.snapshot.paramMap.get('id');
        this.createForm(id);
    };
    AccountEditComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    AccountEditComponent.prototype.createForm = function (id) {
        this.editAccount = this.dataService.Account(id);
        this.defineForm();
    };
    AccountEditComponent.prototype.defineForm = function () {
        this.form = new forms_1.FormGroup({
            acctType: new forms_1.FormControl(this.editAccount.acctType),
            active: new forms_1.FormControl(this.editAccount.active),
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
        this.editAccount.active = this.form.get('active').value;
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
            template: __webpack_require__("../../../../../src/modules/accounts/components/account-edit/account-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/accounts/components/account-edit/account-edit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], AccountEditComponent);
    return AccountEditComponent;
}()); //class
exports.AccountEditComponent = AccountEditComponent;


/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-list/account-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\n.red {\r\n    color: red;\r\n}\r\n\r\n.green {\r\n    color: green;\r\n}\r\n\r\n.greyed{\r\n    color:lightgray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-list/account-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"accounts\">\r\n  <p *ngIf=\"!accounts\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Accounts</caption>\r\n    <thead>\r\n        <tr>\r\n            <th>Active</th>\r\n            <th>ID</th>\r\n            <th>Type</th>\r\n            <th>Name</th>\r\n            <th>Institution</th>\r\n            <th>Number</th>\r\n            <th>Interest</th>\r\n            <th>Limit</th>\r\n            <th>Balance</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let account of accounts\">\r\n            <td *ngIf=\"account.active\"><span class=\"green\">Active</span></td>\r\n            <td *ngIf=\"!account.active\"><span class=\"red\">Closed</span></td>\r\n            <td>{{account.id}}</td>\r\n            <td>{{account.acctType}}</td>\r\n            <td>{{account.name}}</td>\r\n            <td>{{account.institution}}</td>\r\n            <td>{{account.number}}</td>\r\n            <td class='right'>{{displayAsPercent(account.interest)}}</td>\r\n            <td class='right'>{{account.limit ? displayAsDollar(account.limit) : '--'}}</td>\r\n            <td class='right'>{{displayAsDollar(account.balance)}}</td>\r\n            <td><a class=\"btn btn-xs editlink\" routerLink=\"./account-edit/{{account.id}}\">Edit</a></td>\r\n            <td><a class=\"btn btn-xs deletelink\" (click)=\"onDelete(account.id);\">Delete</a></td>\r\n        </tr>\r\n    </tbody>\r\n  </table>\r\n  <a class=\"btn\" id=\"addlink\" routerLink=\"./account-add\">Add New Account</a>\r\n  <br />\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/accounts/components/account-list/account-list.component.ts":
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
    } //ctor
    AccountListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.accounts.subscribe(function (accounts) { return _this.accounts = accounts; });
        this.dataService.transactions.subscribe(function (transactions) { return _this.transactions = transactions; });
        this.accounts.forEach(function (account) {
            account.balance = _this.calculateBalance(account, _this.transactions);
        });
    };
    AccountListComponent.prototype.calculateBalance = function (account, transactions) {
        var balance = 0;
        var transactionsFrom = transactions.filter(function (transaction) { return transaction.acctFrom === account.id; });
        var transactionsTo = transactions.filter(function (transaction) { return transaction.acctTo === account.id; });
        transactionsFrom.forEach(function (transaction) { return balance = balance - transaction.amount; });
        transactionsTo.forEach(function (transaction) { return balance = balance + transaction.amount; });
        return balance;
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
            template: __webpack_require__("../../../../../src/modules/accounts/components/account-list/account-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/accounts/components/account-list/account-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AccountListComponent);
    return AccountListComponent;
}()); //class
exports.AccountListComponent = AccountListComponent;


/***/ }),

/***/ "../../../../../src/modules/app/app-routing.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var app_home_component_1 = __webpack_require__("../../../../../src/modules/app/components/app-home/app-home.component.ts");
var not_found_component_1 = __webpack_require__("../../../../../src/modules/app/components/not-found/not-found.component.ts");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: app_home_component_1.HomeComponent },
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
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var accounts_module_1 = __webpack_require__("../../../../../src/modules/accounts/accounts.module.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/modules/app/app-routing.module.ts");
var categories_module_1 = __webpack_require__("../../../../../src/modules/categories/categories.module.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var payees_module_1 = __webpack_require__("../../../../../src/modules/payees/payees.module.ts");
var reports_module_1 = __webpack_require__("../../../../../src/modules/reports/reports.module.ts");
var transactions_module_1 = __webpack_require__("../../../../../src/modules/transactions/transactions.module.ts");
var users_module_1 = __webpack_require__("../../../../../src/modules/users/users.module.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var app_root_component_1 = __webpack_require__("../../../../../src/modules/app/components/app-root/app-root.component.ts");
var app_home_component_1 = __webpack_require__("../../../../../src/modules/app/components/app-home/app-home.component.ts");
var nav_menu_component_1 = __webpack_require__("../../../../../src/modules/app/components/nav-menu/nav-menu.component.ts");
var not_found_component_1 = __webpack_require__("../../../../../src/modules/app/components/not-found/not-found.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                forms_1.ReactiveFormsModule,
                accounts_module_1.AccountsModule,
                categories_module_1.CategoriesModule,
                payees_module_1.PayeesModule,
                reports_module_1.ReportsModule,
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


/***/ }),

/***/ "../../../../../src/modules/app/components/app-home/app-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/app-home/app-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainTitle\">\r\n    <p class=\"mainTitle-sub\">Chris Carter's</p>\r\n    <p class=\"mainTitle-main\">PersonalLedger</p>\r\n</div>\r\n<div class=\"center lime\">\r\n    <p>A home bookkeeping application, using traditional debit-credit methodology, built as a hybrid MVC/SPA using:</p>\r\n    <ul class=\"unstyledList left indented35\">\r\n        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>\r\n        <li><a>IdentityCore</a> for authentication and security</li>\r\n        <li><a>EntityFrameworkCore</a> for relational object mapping</li>\r\n        <li><a>XUnit</a>, <a>Karma</a> and <a>Protractor</a> for testing</li>\r\n        <li><a href='https://angular.io/'>Angular 5</a> and <a href='http://www.typescriptlang.org/'>TypeScript</a> for client-side code</li>\r\n        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/app-home/app-home.component.ts":
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
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/modules/app/components/app-home/app-home.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/app-home/app-home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/app-root/app-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-content {\r\n    margin-top: 50px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    /* On small screens, the nav menu spans the full width of the screen. Leave a space for it. */\r\n    .body-content {\r\n        padding-top: 50px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/app-root/app-root.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <div class='col-sm-2 nav-menu'>\r\n            <nav-menu></nav-menu>\r\n        </div>\r\n        <div class='col-sm-10 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/app-root/app-root.component.ts":
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
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'Personal Ledger';
        //this gets the dataService initializing early
    } //ctor
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/modules/app/components/app-root/app-root.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/app-root/app-root.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}()); //component
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/nav-menu/nav-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li .glyphicon {\r\n    margin-right: 10px;\r\n}\r\n\r\n/* Highlighting rules for nav menu items */\r\n\r\nli.link-active a,\r\nli.link-active a:hover,\r\nli.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n}\r\n\r\n/* Keep the nav menu independent of scrolling and on top of other items */\r\n\r\n.main-nav {\r\n    position: fixed;\r\n    top: 50px;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n        height: 100%;\r\n        width: calc(16% - 20px);\r\n    }\r\n    .navbar {\r\n        border-radius: 0px;\r\n        border-width: 0px;\r\n        height: 100%;\r\n    }\r\n    .navbar-header {\r\n        float: none;\r\n    }\r\n    .navbar-collapse {\r\n        border-top: 1px solid #444;\r\n        padding: 0px;\r\n    }\r\n    .navbar ul {\r\n        float: none;\r\n    }\r\n    .navbar li {\r\n        float: none;\r\n        font-size: 15px;\r\n        margin: 6px;\r\n    }\r\n    .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n    }\r\n    .navbar a {\r\n        /* If a menu item's text is too long, truncate it */\r\n        width: 100%;\r\n        white-space: nowrap;\r\n        overflow: hidden;\r\n        text-overflow: ellipsis;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/nav-menu/nav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class='main-nav'>\r\n    <div class='navbar navbar-inverse'>\r\n        <div class='navbar-header'>\r\n            <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                <span class='sr-only'>Toggle navigation</span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n                <span class='icon-bar'></span>\r\n            </button>\r\n        </div>\r\n        <div class='clearfix'></div>\r\n        <div class='navbar-collapse collapse'>\r\n            <ul class='nav navbar-nav'>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/home\">\r\n                        <span class='glyphicon glyphicon-home'></span> Home\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/accounts\">\r\n                        <span class='glyphicon glyphicon-credit-card'></span> Accounts\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/categories\">\r\n                        <span class='glyphicon glyphicon-list-alt'></span> Categories\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/payees\">\r\n                        <span class='glyphicon glyphicon-globe'></span> Payees\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/transactions\">\r\n                        <span class='glyphicon glyphicon-transfer'></span> Transactions\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/reports\">\r\n                        <span class='glyphicon glyphicon-stats'></span> Reports\r\n                    </a>\r\n                </li>\r\n                <li routerLinkActive=\"link-active\">\r\n                    <a routerLink=\"/users\">\r\n                        <span class='glyphicon glyphicon-user'></span> Users\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/nav-menu/nav-menu.component.ts":
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
            template: __webpack_require__("../../../../../src/modules/app/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/nav-menu/nav-menu.component.css")]
        })
    ], NavMenuComponent);
    return NavMenuComponent;
}());
exports.NavMenuComponent = NavMenuComponent;


/***/ }),

/***/ "../../../../../src/modules/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n  <h1>Error 404 - Page Not Found</h1>\r\n  <h3>Sorry, the page you requested was not found.</h3>\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "../../../../../src/modules/app/components/not-found/not-found.component.ts":
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
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'not-found',
            template: __webpack_require__("../../../../../src/modules/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/app/components/not-found/not-found.component.css")]
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "../../../../../src/modules/categories/categories.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var category_list_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-list/category-list.component.ts");
var category_add_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-add/category-add.component.ts");
var category_edit_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-edit/category-edit.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var categories_routing_module_1 = __webpack_require__("../../../../../src/modules/categories/categories.routing.module.ts");
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


/***/ }),

/***/ "../../../../../src/modules/categories/categories.routing.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var category_list_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-list/category-list.component.ts");
var category_add_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-add/category-add.component.ts");
var category_edit_component_1 = __webpack_require__("../../../../../src/modules/categories/components/category-edit/category-edit.component.ts");
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


/***/ }),

/***/ "../../../../../src/modules/categories/components/category-add/category-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n\r\nselect {\r\n  width: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-add/category-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categoryAdd\">\r\n  <h4>Add</h4>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" autofocus/> <br />\r\n    <label>Type</label>\r\n    <select name=\"type\" formControlName=\"type\">\r\n      <option value=\"Expense\">Expense</option>\r\n      <option value=\"Income\">Income</option>\r\n      <option value=\"Other\">Other</option>\r\n    </select> <br />\r\n    <!--<input type='text' name=\"type\" formControlName=\"type\" /> <br />-->\r\n    <label>Tax</label>\r\n    <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" /> <br />\r\n    <input type='submit' value=\"Add\" />\r\n    <button routerLink=\"/categories\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-add/category-add.component.ts":
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
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.newCategory = this.freshNewCategory();
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl(this.newCategory.name),
            tax: new forms_1.FormControl(this.newCategory.tax),
            type: new forms_1.FormControl(this.newCategory.type),
        });
    };
    CategoryAddComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
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
            template: __webpack_require__("../../../../../src/modules/categories/components/category-add/category-add.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/categories/components/category-add/category-add.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());
exports.CategoryAddComponent = CategoryAddComponent;


/***/ }),

/***/ "../../../../../src/modules/categories/components/category-edit/category-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 100px;\r\n}\r\n\r\nselect {\r\n  width: 160px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-edit/category-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categoryEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n    <label>Name</label>\r\n    <input type='text' name=\"name\" formControlName=\"name\" /> <br />\r\n    <label>Type</label>\r\n    <select name=\"type\" formControlName=\"type\">\r\n      <option value=\"Expense\">Expense</option>\r\n      <option value=\"Income\">Income</option>\r\n      <option value=\"Other\">Other</option>\r\n    </select> <br />\r\n    <!--<input type='text' name=\"type\" formControlName=\"type\" /> <br />-->\r\n    <label>Tax</label>\r\n    <input type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" /> <br />\r\n    <input type='submit' value=\"Update\" />\r\n    <button routerLink=\"/categories\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-edit/category-edit.component.ts":
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
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        var id = +this.route.snapshot.paramMap.get('id');
        this.createForm(id);
    };
    CategoryEditComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    CategoryEditComponent.prototype.createForm = function (id) {
        this.editCategory = this.dataService.Category(id);
        this.defineForm();
    };
    CategoryEditComponent.prototype.defineForm = function () {
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
            template: __webpack_require__("../../../../../src/modules/categories/components/category-edit/category-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/categories/components/category-edit/category-edit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());
exports.CategoryEditComponent = CategoryEditComponent;


/***/ }),

/***/ "../../../../../src/modules/categories/components/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\ntable{\r\n  display:block;\r\n  max-height:60vh;\r\n  overflow-y:auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\r\n  <p *ngIf=\"!categories\"><em>Loading...</em></p>\r\n\r\n  <table>\r\n    <caption>Categories</caption>\r\n    <thead>\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Name</th>\r\n        <th>Tax?</th>\r\n        <th>Type</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let category of categories\">\r\n        <td>{{category.id}}</td>\r\n        <td>{{category.name}}</td>\r\n        <td>&nbsp;<span *ngIf=\"category.tax\" class='glyphicon glyphicon-record' style='color:green;'></span></td>\r\n        <td>{{category.type}}</td>\r\n        <td><a class=\"btn btn-xs editlink\" routerLink=\"./category-edit/{{category.id}}\">Edit</a></td>\r\n        <td><a class=\"btn btn-xs deletelink\" (click)=\"onDelete(category.id);\">Delete</a></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <a class=\"btn\" id=\"addlink\" routerLink=\"./category-add\">Add New Category</a>\r\n  <br />\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/categories/components/category-list/category-list.component.ts":
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
    } //ctor
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.categories.subscribe(function (categories) { return _this.categories = categories; });
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
            template: __webpack_require__("../../../../../src/modules/categories/components/category-list/category-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/categories/components/category-list/category-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], CategoryListComponent);
    return CategoryListComponent;
}());
exports.CategoryListComponent = CategoryListComponent;


/***/ }),

/***/ "../../../../../src/modules/payees/components/payee-list/payee-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/payees/components/payee-list/payee-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"payees\">\r\n    <p *ngIf=\"!payees\"><em>Loading...</em></p>\r\n\r\n    <table>\r\n        <caption>Payees</caption>\r\n        <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Name</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let payee of payees\">\r\n                <td>{{payee.id}}</td>\r\n                <td>{{payee.name}}</td>\r\n                <td><a class=\"btn btn-xs deletelink\" (click)=\"onDelete(payee.id);\">Delete</a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/payees/components/payee-list/payee-list.component.ts":
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
var PayeeListComponent = /** @class */ (function () {
    function PayeeListComponent(dataService) {
        this.dataService = dataService;
    } //ctor
    PayeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.payees.subscribe(function (payees) { return _this.payees = payees; });
    };
    PayeeListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.payees.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.payees[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.payees[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deletePayee(id);
        }
        ;
    };
    PayeeListComponent = __decorate([
        core_1.Component({
            selector: 'payee-list',
            template: __webpack_require__("../../../../../src/modules/payees/components/payee-list/payee-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/payees/components/payee-list/payee-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], PayeeListComponent);
    return PayeeListComponent;
}());
exports.PayeeListComponent = PayeeListComponent;


/***/ }),

/***/ "../../../../../src/modules/payees/payees.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var payee_list_component_1 = __webpack_require__("../../../../../src/modules/payees/components/payee-list/payee-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var payees_routing_module_1 = __webpack_require__("../../../../../src/modules/payees/payees.routing.module.ts");
var PayeesModule = /** @class */ (function () {
    function PayeesModule() {
    }
    PayeesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                payees_routing_module_1.PayeeRoutingModule
            ],
            declarations: [
                payee_list_component_1.PayeeListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], PayeesModule);
    return PayeesModule;
}());
exports.PayeesModule = PayeesModule;


/***/ }),

/***/ "../../../../../src/modules/payees/payees.routing.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var payee_list_component_1 = __webpack_require__("../../../../../src/modules/payees/components/payee-list/payee-list.component.ts");
var payeesRoutes = [
    {
        path: 'payees',
        component: payee_list_component_1.PayeeListComponent
    }
];
var PayeeRoutingModule = /** @class */ (function () {
    function PayeeRoutingModule() {
    }
    PayeeRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(payeesRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], PayeeRoutingModule);
    return PayeeRoutingModule;
}());
exports.PayeeRoutingModule = PayeeRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/reports/components/report-list/report-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/reports/components/report-list/report-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reports\">\r\n    <h2 style=\"margin-top:100px;\" class=\"lemonlime\">This feature not yet supported.</h2>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/reports/components/report-list/report-list.component.ts":
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
var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(dataService) {
        this.dataService = dataService;
    } //ctor
    ReportListComponent.prototype.ngOnInit = function () {
    };
    ReportListComponent = __decorate([
        core_1.Component({
            selector: 'report-list',
            template: __webpack_require__("../../../../../src/modules/reports/components/report-list/report-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/reports/components/report-list/report-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ReportListComponent);
    return ReportListComponent;
}());
exports.ReportListComponent = ReportListComponent;


/***/ }),

/***/ "../../../../../src/modules/reports/reports.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var report_list_component_1 = __webpack_require__("../../../../../src/modules/reports/components/report-list/report-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var reports_routing_module_1 = __webpack_require__("../../../../../src/modules/reports/reports.routing.module.ts");
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                reports_routing_module_1.ReportRoutingModule
            ],
            declarations: [
                report_list_component_1.ReportListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], ReportsModule);
    return ReportsModule;
}());
exports.ReportsModule = ReportsModule;


/***/ }),

/***/ "../../../../../src/modules/reports/reports.routing.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var report_list_component_1 = __webpack_require__("../../../../../src/modules/reports/components/report-list/report-list.component.ts");
var reportsRoutes = [
    {
        path: 'reports',
        component: report_list_component_1.ReportListComponent
    }
];
var ReportRoutingModule = /** @class */ (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(reportsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());
exports.ReportRoutingModule = ReportRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/shared/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//This class is responsible for all interaction with the data API (a .NET Core WebAPI, which in turn interacts with a repository)
//Data collections are exposed as observable BehaviorSubjects
//It also serves as the central client-side data store ("single source of truth")
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
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.accountsSource = new BehaviorSubject_1.BehaviorSubject(this._accounts);
        this.accounts = this.accountsSource.asObservable();
        this.acctAssetSource = new BehaviorSubject_1.BehaviorSubject(this._acctAsset);
        this.acctAsset = this.acctAssetSource.asObservable();
        this.acctLiabilitySource = new BehaviorSubject_1.BehaviorSubject(this._acctLiability);
        this.acctLiability = this.acctLiabilitySource.asObservable();
        this.categoriesSource = new BehaviorSubject_1.BehaviorSubject(this._categories);
        this.categories = this.categoriesSource.asObservable();
        this.catExpenseSource = new BehaviorSubject_1.BehaviorSubject(this._catExpense);
        this.catExpense = this.catExpenseSource.asObservable();
        this.catIncomeSource = new BehaviorSubject_1.BehaviorSubject(this._catIncome);
        this.catIncome = this.catIncomeSource.asObservable();
        this.catOtherSource = new BehaviorSubject_1.BehaviorSubject(this._catOther);
        this.catOther = this.catOtherSource.asObservable();
        this.payeesSource = new BehaviorSubject_1.BehaviorSubject(this._payees);
        this.payees = this.payeesSource.asObservable();
        this.transactionsSource = new BehaviorSubject_1.BehaviorSubject(this._transactions);
        this.transactions = this.transactionsSource.asObservable();
        this.usersSource = new BehaviorSubject_1.BehaviorSubject(this._users);
        this.users = this.usersSource.asObservable();
        console.log('----dataservice initializing');
        this.getAccounts();
        this.getCategories();
        this.getPayees();
        this.getTransactions();
        this.getUsers();
    } //ctor
    // ---PUBLIC METHODS ---
    // --Accounts--
    DataService.prototype.addAccount = function (accountToAdd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('/api/Accounts', accountToAdd).subscribe(function (account) {
                resolve(account);
            }, function (error) {
                reject(alert("there was an error adding account."));
            });
        });
        promise.then(function (result) {
            _this._accounts.push(result);
            _this._accounts.sort(_this.accountComparator);
            _this.accountsSource.next(_this._accounts);
            _this._acctAsset.push(result);
            _this._acctAsset.sort(_this.accountComparator);
            _this.acctAssetSource.next(_this._acctAsset);
            _this._acctLiability.push(result);
            _this._acctLiability.sort(_this.accountComparator);
            _this.acctLiabilitySource.next(_this._acctLiability);
        });
    }; //addAccount
    DataService.prototype.deleteAccount = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Accounts/' + id).subscribe(function (account) {
                resolve(account);
            }, function (error) {
                reject(alert("there was an error deleting account."));
            });
        });
        promise.then(function (result) {
            //remove from accounts
            var indexToDelete = _this._accounts.findIndex(function (element) { return element.id === result.id; });
            _this._accounts.splice(indexToDelete, 1);
            _this.accountsSource.next(_this._accounts);
            //remove from acctAsset
            var aaIdx = _this._acctAsset.indexOf(result);
            if (aaIdx !== -1) {
                _this._acctAsset.splice(aaIdx, 1);
            }
            _this.acctAssetSource.next(_this._acctAsset);
            //remove from acctLiability
            var alIdx = _this._acctLiability.indexOf(result);
            if (alIdx !== -1) {
                _this._acctLiability.splice(alIdx, 1);
            }
            _this.acctLiabilitySource.next(_this._acctLiability);
        });
    }; //deleteAccount
    DataService.prototype.Account = function (id) {
        return this._accounts.find(function (x) { return x.id === id; });
    }; //Account
    DataService.prototype.Accounts = function () {
        return this._accounts;
    }; //Accounts
    DataService.prototype.AssetAccounts = function () {
        return this._acctAsset;
    }; //AssetAccounts
    DataService.prototype.LiabilityAccounts = function () {
        return this._acctLiability;
    }; //LiabilityAccounts
    DataService.prototype.updateAccount = function (accountToUpdate) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Accounts', accountToUpdate).subscribe(function (account) {
                resolve(account);
            }, function (error) {
                reject(alert("there was an error updating account."));
            });
        });
        promise.then(function (result) {
            //update accounts
            var indexToUpdate = _this._accounts.findIndex(function (element) { return element.id == result.id; });
            _this._accounts[indexToUpdate] = result;
            _this._accounts.sort(_this.accountComparator);
            _this.accountsSource.next(_this._accounts);
            //update acctAsset
            var aaMatch = _this._acctAsset.find(function (x) { return x.id === result.id; });
            if (aaMatch) {
                var aaIdx = _this._acctAsset.indexOf(aaMatch);
                _this._acctAsset[aaIdx] = result;
                _this._acctAsset.sort(_this.accountComparator);
                _this.acctAssetSource.next(_this._acctAsset);
            }
            //update acctLiability
            var alMatch = _this._acctLiability.find(function (x) { return x.id === result.id; });
            if (alMatch) {
                var alIdx = _this._acctLiability.indexOf(aaMatch);
                _this._acctLiability[alIdx] = result;
                _this._acctLiability.sort(_this.accountComparator);
                _this.acctLiabilitySource.next(_this._acctLiability);
            }
        });
    }; //updateAccount
    // --Categories--
    DataService.prototype.addCategory = function (categoryToAdd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('/api/Categories', categoryToAdd).subscribe(function (category) {
                resolve(category);
            }, function (error) {
                reject(alert("there was an error adding category."));
            });
        });
        promise.then(function (result) {
            _this._categories.push(result);
            _this._categories.sort(_this.categoryComparator);
            _this.categoriesSource.next(_this._categories);
            _this._catExpense.push(result);
            _this._catExpense.sort(_this.categoryComparator);
            _this.catExpenseSource.next(_this._catExpense);
            _this._catIncome.push(result);
            _this._catIncome.sort(_this.categoryComparator);
            _this.catIncomeSource.next(_this._catIncome);
            _this._catOther.push(result);
            _this._catOther.sort(_this.categoryComparator);
            _this.catOtherSource.next(_this._catOther);
        });
    }; //addCategory
    DataService.prototype.deleteCategory = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Categories/' + id).subscribe(function (category) {
                resolve(category);
            }, function (error) {
                reject(alert("there was an error deleting category."));
            });
        });
        promise.then(function (result) {
            //remove from categories
            var indexToDelete = _this._categories.findIndex(function (element) { return element.id === result.id; });
            _this._categories.splice(indexToDelete, 1);
            _this.categoriesSource.next(_this._categories);
            //remove from catExpense
            var ceIdx = _this._catExpense.indexOf(result);
            if (ceIdx !== -1) {
                _this._catExpense.splice(ceIdx, 1);
                _this.catExpenseSource.next(_this._catExpense);
            }
            //remove from catIncome
            var ciIdx = _this._catIncome.indexOf(result);
            if (ciIdx !== -1) {
                _this._catIncome.splice(ciIdx, 1);
                _this.catIncomeSource.next(_this._catIncome);
            }
            //remove from catOther
            var coIdx = _this._catOther.indexOf(result);
            if (coIdx !== -1) {
                _this._catOther.splice(coIdx, 1);
                _this.catOtherSource.next(_this._catOther);
            }
        });
    }; //deleteCategory
    DataService.prototype.Category = function (id) {
        return this._categories.find(function (x) { return x.id === id; });
    }; //Category
    DataService.prototype.Categories = function () {
        return this._categories;
    }; //Categories
    DataService.prototype.ExpenseCategories = function () {
        return this._catExpense;
    }; //ExpenseCategories
    DataService.prototype.IncomeCategories = function () {
        return this._catIncome;
    }; //IncomeCategories
    DataService.prototype.OtherCategories = function () {
        return this._catOther;
    }; //OtherCategories
    DataService.prototype.updateCategory = function (categoryToUpdate) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Categories', categoryToUpdate).subscribe(function (category) {
                resolve(category);
            }, function (error) {
                reject(alert("there was an error updating category."));
            });
        });
        promise.then(function (result) {
            //update categories
            var indexToUpdate = _this._categories.findIndex(function (element) { return element.id == result.id; });
            _this._categories[indexToUpdate] = result;
            _this._categories.sort(_this.categoryComparator);
            _this.categoriesSource.next(_this._categories);
            //update catExpense
            var aaMatch = _this._catExpense.find(function (x) { return x.id === result.id; });
            if (aaMatch) {
                var aaIdx = _this._catExpense.indexOf(aaMatch);
                _this._catExpense[aaIdx] = result;
                _this._catExpense.sort(_this.categoryComparator);
                _this.catExpenseSource.next(_this._catExpense);
            }
            //update catIncome
            var aaMatch = _this._catIncome.find(function (x) { return x.id === result.id; });
            if (aaMatch) {
                var aaIdx = _this._catIncome.indexOf(aaMatch);
                _this._catIncome[aaIdx] = result;
                _this._catIncome.sort(_this.categoryComparator);
                _this.catIncomeSource.next(_this._catIncome);
            }
            //update catOther
            var aaMatch = _this._catOther.find(function (x) { return x.id === result.id; });
            if (aaMatch) {
                var aaIdx = _this._catOther.indexOf(aaMatch);
                _this._catOther[aaIdx] = result;
                _this._catOther.sort(_this.categoryComparator);
                _this.catOtherSource.next(_this._catOther);
            }
        });
    }; //updateCategory
    // --Payees--
    DataService.prototype.addPayee = function (payeeToAdd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('/api/Payees', payeeToAdd).subscribe(function (payee) {
                resolve(payee);
            }, function (error) {
                reject(alert("there was an error adding payee."));
            });
        });
        promise.then(function (result) {
            _this._payees.push(result);
            _this._payees.sort(_this.payeeComparator);
            _this.payeesSource.next(_this._payees);
        });
    }; //addPayee
    DataService.prototype.deletePayee = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Accounts/' + id).subscribe(function (payee) {
                resolve(payee);
            }, function (error) {
                reject(alert("there was an error deleting payee."));
            });
        });
        promise.then(function (result) {
            var indexToDelete = _this._payees.findIndex(function (element) { return element.id === result.id; });
            _this._payees.splice(indexToDelete, 1);
            _this.payeesSource.next(_this._payees);
        });
    }; //deletePayee
    DataService.prototype.Payee = function (id) {
        return this._payees.find(function (x) { return x.id === id; });
    }; //Payee
    DataService.prototype.Payees = function () {
        return this._payees;
    }; //Payees
    DataService.prototype.updatePayee = function (payeeToUpdate) {
        var _this = this;
        console.log('dataService executing updatePayee with ' + JSON.stringify(payeeToUpdate));
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Payees', payeeToUpdate).subscribe(function (payee) {
                resolve(payee);
            }, function (error) {
                reject(alert("there was an error updating payee."));
            });
        });
        promise.then(function (result) {
            var indexToUpdate = _this._payees.findIndex(function (element) { return element.id == result.id; });
            _this._payees[indexToUpdate] = result;
            _this._payees.sort(_this.payeeComparator);
            _this.payeesSource.next(_this._payees);
        });
    }; //updatePayee
    // --Transactions--
    DataService.prototype.addTransaction = function (transactionToAdd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('/api/Transactions', transactionToAdd).subscribe(function (transaction) {
                resolve(transaction);
            }, function (error) {
                reject(alert("there was an error adding transaction."));
            });
        });
        promise.then(function (result) {
            _this._transactions.push(result);
            _this._transactions.sort(_this.transactionComparator);
            _this.transactionsSource.next(_this._transactions);
        });
    }; //addTransaction
    DataService.prototype.deleteTransaction = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Transactions/' + id).subscribe(function (transaction) {
                resolve(transaction);
            }, function (error) {
                reject(alert("there was an error deleting transaction."));
            });
        });
        promise.then(function (result) {
            var indextToDelete = _this._transactions.findIndex(function (element) { return element.id === result.id; });
            _this._transactions.splice(indextToDelete, 1);
            _this.transactionsSource.next(_this._transactions);
        });
    }; //deleteTransaction
    DataService.prototype.Transaction = function (id) {
        return this._transactions.find(function (x) { return x.id === id; });
    }; //Transaction
    DataService.prototype.Transactions = function () {
        return this._transactions;
    }; //Transactions
    DataService.prototype.updateTransaction = function (transactionToUpdate) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Transactions', transactionToUpdate).subscribe(function (transaction) {
                resolve(transaction);
            }, function (error) {
                reject(alert("there was an error updating transaction."));
            });
        });
        promise.then(function (result) {
            var indexToUpdate = _this._transactions.findIndex(function (element) { return element.id == result.id; });
            _this._transactions[indexToUpdate] = result;
            _this._transactions.sort(_this.transactionComparator);
            _this.transactionsSource.next(_this._transactions);
        });
    }; //updateTransaction
    // --Users--
    DataService.prototype.deleteUser = function (userName) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Users/' + userName).subscribe(function (user) {
                resolve(user);
            }, function (error) {
                reject(alert("there was an error deleting user."));
            });
        });
        promise.then(function (result) {
            //remove from users
            var indexToDelete = _this._users.findIndex(function (element) { return element.id === result.id; });
            _this._users.splice(indexToDelete, 1);
            _this.usersSource.next(_this._users);
        });
    }; //deleteUser
    DataService.prototype.User = function (id) {
        return this._users.find(function (x) { return x.id === id; });
    }; //User
    DataService.prototype.Users = function () {
        return this._users;
    }; //Users
    DataService.prototype.makeAdmin = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Users/Admin/' + id, id).subscribe(function (user) {
                resolve();
            }, function (error) {
                reject(alert("there was an error promoting user."));
            });
        });
        promise.then(function (result) {
            //update users
            var indexToUpdate = _this._users.findIndex(function (element) { return element.id === id; });
            _this._users[indexToUpdate].admin = true;
            _this.usersSource.next(_this._users);
        });
    }; //makeAdmin
    DataService.prototype.resetPassword = function (id, newPassword) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Users/Reset/' + id, newPassword).subscribe(function (user) {
                resolve();
            }, function (error) {
                reject(alert("there was an error resetting user password."));
            });
        });
        promise.then(function (result) {
            //nothing to do here--passwords not stored in the client
        });
    }; //resetPassword
    DataService.prototype.unmakeAdmin = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Users/NoAdmin/' + id, id).subscribe(function (user) {
                resolve();
            }, function (error) {
                reject(alert("there was an error demoting user."));
            });
        });
        promise.then(function (result) {
            //update users
            var indexToUpdate = _this._users.findIndex(function (element) { return element.id === id; });
            _this._users[indexToUpdate].admin = false;
            _this.usersSource.next(_this._users);
        });
    }; //unmakeAdmin
    // ---PRIVATE METHODS ---
    DataService.prototype.getAccounts = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Accounts').subscribe(function (accounts) {
                resolve(accounts);
            }, function (error) {
                reject(alert("there was an error getting accounts."));
            });
        });
        promise.then(function (result) {
            _this._accounts = result;
            _this._accounts.sort(_this.accountComparator);
            _this.accountsSource.next(_this._accounts);
            _this._acctAsset = result.filter(function (element) { return element.acctType === "Asset"; });
            _this._acctAsset.sort(_this.accountComparator);
            _this.acctAssetSource.next(_this._acctAsset);
            _this._acctLiability = result.filter(function (element) { return element.acctType === "Liability"; });
            _this._acctLiability.sort(_this.accountComparator);
            _this.acctLiabilitySource.next(_this._acctLiability);
        });
    }; //getAccounts
    DataService.prototype.getCategories = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Categories').subscribe(function (categories) {
                resolve(categories);
            }, function (error) {
                reject(alert("there was an error getting categories."));
            });
        });
        promise.then(function (result) {
            _this._categories = result;
            _this._categories.sort(_this.categoryComparator);
            _this.categoriesSource.next(_this._categories);
            _this._catExpense = result.filter(function (element) { return element.type === "Expense"; });
            _this._catExpense.sort(_this.categoryComparator);
            _this.catExpenseSource.next(_this._catExpense);
            _this._catIncome = result.filter(function (element) { return element.type === "Income"; });
            _this._catIncome.sort(_this.categoryComparator);
            _this.catIncomeSource.next(_this._catIncome);
            _this._catOther = result.filter(function (element) { return element.type === "Other"; });
            _this._catOther.sort(_this.categoryComparator);
            _this.catOtherSource.next(_this._catOther);
        });
    }; //getCategories
    DataService.prototype.getPayees = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Payees').subscribe(function (payees) {
                resolve(payees);
            }, function (error) {
                reject(alert("there was an error getting payees."));
            });
        });
        promise.then(function (result) {
            _this._payees = result;
            _this._payees.sort(_this.payeeComparator);
            _this.payeesSource.next(_this._payees);
        });
    }; //getPayees
    DataService.prototype.getTransactions = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Transactions').subscribe(function (transactions) {
                resolve(transactions);
            }, function (error) {
                reject(alert("there was an error getting transactions."));
            });
        });
        promise.then(function (result) {
            _this._transactions = result;
            _this._transactions.sort(_this.transactionComparator);
            _this.transactionsSource.next(_this._transactions);
        });
    }; //getTransactions
    DataService.prototype.getUsers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Users').subscribe(function (users) {
                resolve(users);
            }, function (error) {
                reject(alert("there was an error getting users."));
            });
        });
        promise.then(function (result) {
            _this._users = result;
            _this._users.sort(_this.userComparator);
            _this.usersSource.next(_this._users);
        });
    }; //getUsers
    DataService.prototype.accountComparator = function (elementA, elementB) {
        if (elementA.name < elementB.name)
            return -1;
        if (elementA.name > elementB.name)
            return 1;
        return 0;
    };
    DataService.prototype.categoryComparator = function (elementA, elementB) {
        if (elementA.name < elementB.name)
            return -1;
        if (elementA.name > elementB.name)
            return 1;
        return 0;
    };
    DataService.prototype.payeeComparator = function (elementA, elementB) {
        if (elementA.name < elementB.name)
            return -1;
        if (elementA.name > elementB.name)
            return 1;
        return 0;
    };
    DataService.prototype.transactionComparator = function (elementA, elementB) {
        if (elementA.date < elementB.date)
            return -1;
        if (elementA.date > elementB.date)
            return 1;
        return 0;
    };
    DataService.prototype.userComparator = function (elementA, elementB) {
        if (elementA.userName < elementB.userName)
            return -1;
        if (elementA.userName > elementB.userName)
            return 1;
        return 0;
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}()); //service
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 80px;\r\n}\r\n\r\nselect, input, .mat-form-field {\r\n    width: 250px;\r\n    margin-right:20px;\r\n}\r\n\r\ninput[type='checkbox'], input[type='submit'] {\r\n    width: auto;\r\n}\r\n\r\n.red {\r\n    color: red;\r\n}\r\n\r\n.green {\r\n    color: green;\r\n}\r\n\r\n.greyed {\r\n    color: lightgray;\r\n}\r\n\r\n.payeeSelector {\r\n    background: snow;\r\n}\r\n\r\n.accountSelector {\r\n    background: floralwhite;\r\n}\r\n\r\n.comments {\r\n    width: 610px;\r\n    margin-bottom: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactionAdd\">\r\n    <h4>Add</h4>\r\n    <p *ngIf=\"!form\">Loading...</p>\r\n\r\n    <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n        <label>Date</label>\r\n        <input type='date' name=\"date\" formControlName=\"date\" autofocus />\r\n        <br />\r\n        <div class=\"payeeSelector\">\r\n            <span id=\"payeeToControl\">\r\n                <label id=\"tpLabel\">To Payee</label>\r\n                <mat-form-field>\r\n                    <input type=\"text\" matInput formControlName=\"payeeTo\" [matAutocomplete]=\"autoPT\" (input)=\"onTPInput($event.target.value)\" (change)=\"onTPChange($event.target.value)\" />\r\n                    <mat-autocomplete #autoPT=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let payeeName of filteredPayeeToNames | async\" value=\"{{payeeName}}\" (onSelectionChange)=\"onTPSelection(payeeName)\">\r\n                            {{ payeeName }}\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n                </mat-form-field>\r\n            </span>\r\n            <span id=\"payeeFromControl\">\r\n                <label id=\"fpLabel\">From Payee</label>\r\n                <mat-form-field>\r\n                    <input type=\"text\" matInput formControlName=\"payeeFrom\" [matAutocomplete]=\"autoPF\" (input)=\"onFPInput($event.target.value)\" (change)=\"onFPChange($event.target.value)\" id=\"fpField\" />\r\n                    <mat-autocomplete #autoPF=\"matAutocomplete\">\r\n                        <mat-option *ngFor=\"let payeeName of filteredPayeeFromNames | async\" value=\"{{payeeName}}\" (onSelectionChange)=\"onTPSelection(payeeName)\">\r\n                            {{ payeeName }}\r\n                        </mat-option>\r\n                    </mat-autocomplete>\r\n                </mat-form-field>\r\n            </span>\r\n        </div>\r\n        <br />\r\n        <div class=\"accountSelector\">\r\n            <span id=\"accountFromControl\">\r\n                <label id=\"faLabel\">From Acct</label>\r\n                <select id=\"faField\" name=\"acctFrom\" formControlName=\"acctFrom\">\r\n                    <option *ngFor=\"let account of acctLiability\" [class]=\"account.active? '' : 'greyed'\" value=\"{{account.id}}\">{{account.name}}</option>\r\n                    <option disabled>──────────</option>\r\n                    <option *ngFor=\"let account of acctAsset\" [class]=\"account.active? '' : 'greyed'\" value=\"{{account.id}}\">{{account.name}}</option>\r\n                </select>\r\n            </span>\r\n            <span id=\"accountToControl\">\r\n                <label id=\"taLabel\">To Acct</label>\r\n                <select id=\"taField\" name=\"acctTo\" formControlName=\"acctTo\">\r\n                    <option *ngFor=\"let account of acctAsset\" [class]=\"account.active? '' : 'greyed'\" value=\"{{account.id}}\">{{account.name}}</option>\r\n                    <option disabled>──────────</option>\r\n                    <option *ngFor=\"let account of acctLiability\" [class]=\"account.active? '' : 'greyed'\" value=\"{{account.id}}\">{{account.name}}</option>\r\n                </select>\r\n            </span>\r\n        </div>\r\n        <br />\r\n        <label>Amount<span class=\"pull-right\">$</span></label>\r\n        <input id=\"amtField\" type='number' name=\"amount\" formControlName=\"amount\" />\r\n        <br />\r\n        <label>Category</label>\r\n        <mat-form-field>\r\n            <input id=\"catField\" type=\"text\" matInput formControlName=\"category\" [matAutocomplete]=\"autoC\" (change)=\"onCChange($event.target.value)\" />\r\n            <mat-autocomplete #autoC=\"matAutocomplete\">\r\n                <mat-option *ngFor=\"let categoryName of filteredCategoryNames | async\" value=\"{{categoryName}}\" (onSelectionChange)=\"onCChange(categoryName)\">\r\n                    {{ categoryName }}\r\n                </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <br />\r\n        <label>Tax</label>\r\n        <input id=\"taxField\" type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" />\r\n        <br />\r\n        <label>Comments</label>\r\n        <input type='text' class=\"comments\" name=\"comments\" formControlName=\"comments\" />\r\n        <br />\r\n        <input type='submit' value=\"Add\" />\r\n        <button routerLink=\"/transactions\">Cancel</button>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.ts":
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
var startWith_1 = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
var map_1 = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var TransactionAddComponent = /** @class */ (function () {
    function TransactionAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
        this.newTransaction = this.freshNewTransaction();
        this.acctFrom = new forms_1.FormControl();
        this.acctTo = new forms_1.FormControl();
        this.amount = new forms_1.FormControl();
        this.category = new forms_1.FormControl();
        this.comments = new forms_1.FormControl();
        this.date = new forms_1.FormControl(this.newTransaction.date);
        this.payeeFrom = new forms_1.FormControl();
        this.payeeTo = new forms_1.FormControl();
        this.tax = new forms_1.FormControl();
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.accounts = this.dataService.Accounts();
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.categories = this.dataService.Categories();
        this.payees = this.dataService.Payees();
        this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.comments, this.date, this.payeeFrom, this.payeeTo, this.tax);
        this.filteredCategoryNames = this.category.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.categoryFilter(val); }));
        this.filteredPayeeFromNames = this.payeeFrom.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.payeeFilter(val); }));
        this.filteredPayeeToNames = this.payeeTo.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.payeeFilter(val); }));
    };
    ;
    TransactionAddComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    TransactionAddComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    TransactionAddComponent.prototype.categoryFilter = function (val) {
        if (this.categories) {
            return this.categories.filter(function (category) {
                return category.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            }).map(function (category) { return category.name; });
        }
        else {
            return [];
        }
    };
    TransactionAddComponent.prototype.categoryId = function (categoryName) {
        return this.categories.find(function (element) { return element.name === categoryName; }).id;
    };
    TransactionAddComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionAddComponent.prototype.freshNewTransaction = function () {
        return { id: null, acctFrom: 0, acctTo: 0, amount: 0, category: 0, comments: '', date: new Date().toLocaleDateString(), payeeFrom: '', payeeTo: '', tax: false };
    };
    TransactionAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionAddComponent.prototype.instantiateForm = function (acctFrom, acctTo, amount, category, comments, date, payeeFrom, payeeTo, tax) {
        this.form = new forms_1.FormGroup({
            acctFrom: acctFrom,
            acctTo: acctTo,
            amount: amount,
            category: category,
            comments: comments,
            date: date,
            payeeFrom: payeeFrom,
            payeeTo: payeeTo,
            tax: tax,
        });
    };
    TransactionAddComponent.prototype.onSubmit = function () {
        var _this = this;
        //add the payee or update its defaults from payeeFrom, if populated
        if (this.form.get('payeeFrom').value !== null) {
            console.log('adding payeeFrom ' + this.form.get('payeeFrom').value);
            var pfMatch = this.payees.find(function (element) { return element.name === _this.form.get('payeeFrom').value; });
            if (pfMatch) {
                var matchIndex = this.payees.indexOf(pfMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctTo').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.categoryId(this.form.get('category').value);
                console.log('calling update payeeFrom with ' + JSON.stringify(this.payees[matchIndex]));
                this.dataService.updatePayee(this.payees[matchIndex]);
            }
            else {
                var pf = { id: 0, balance: 0, defaultAcct: this.form.get('acctTo').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeFrom').value };
                console.log('calling add payeeFrom with ' + JSON.stringify(pf));
                this.dataService.addPayee(pf);
            }
        }
        //add the payee or update its defaults from payeeTo, if populated
        if (this.form.get('payeeTo').value !== null) {
            console.log('adding payeeTo ' + this.form.get('payeeTo').value);
            var ptMatch = this.payees.find(function (element) { return element.name === _this.form.get('payeeTo').value; });
            if (ptMatch) {
                var matchIndex = this.payees.indexOf(ptMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctFrom').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.categoryId(this.form.get('category').value);
                console.log('calling update payeeFrom with ' + JSON.stringify(this.payees[matchIndex]));
                this.dataService.updatePayee(this.payees[matchIndex]);
            }
            else {
                var pt = { id: 0, balance: 0, defaultAcct: this.form.get('acctFrom').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeTo').value };
                console.log('calling add payeeTo with ' + JSON.stringify(pt));
                this.dataService.addPayee(pt);
            }
        }
        //add the transaction
        this.newTransaction.acctFrom = this.form.get('acctFrom').value;
        this.newTransaction.acctTo = this.form.get('acctTo').value;
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.categoryId(this.form.get('category').value);
        this.newTransaction.comments = this.form.get('comments').value;
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.payeeFrom = this.form.get('payeeFrom').value;
        this.newTransaction.payeeTo = this.form.get('payeeTo').value;
        this.newTransaction.tax = this.form.get('tax').value;
        console.log('calling addTransaction with ' + JSON.stringify(this.newTransaction));
        this.dataService.addTransaction(this.newTransaction);
        //reset and close
        this.ngOnInit();
        this.goBack();
    };
    TransactionAddComponent.prototype.onFPInput = function (val) {
        if (val === '') {
            document.getElementById('payeeToControl').style.display = "inline";
            document.getElementById('accountFromControl').style.display = "inline";
            document.getElementById('accountToControl').style.display = "inline";
        }
        else {
            document.getElementById('payeeToControl').style.display = "none";
            document.getElementById('accountFromControl').style.display = "none";
        }
    }; //onFPInput
    TransactionAddComponent.prototype.onTPInput = function (val) {
        if (val === '') {
            document.getElementById('payeeFromControl').style.display = "inline";
            document.getElementById('accountFromControl').style.display = "inline";
            document.getElementById('accountToControl').style.display = "inline";
        }
        else {
            document.getElementById('payeeFromControl').style.display = "none";
            document.getElementById('accountToControl').style.display = "none";
        }
    }; //onTPInput
    TransactionAddComponent.prototype.onCChange = function (val) {
        if (val !== null) {
            if (this.categories) {
                var cat = this.categories.find(function (c) { return c.name.trim().toLowerCase() === val.trim().toLowerCase(); });
                if (cat) {
                    var taxcheck = cat.tax;
                    this.tax.setValue(taxcheck);
                }
                else {
                    this.tax.setValue(false);
                }
            }
        }
        else {
            this.tax.setValue(false);
        }
    }; //onCChange
    TransactionAddComponent.prototype.onFPChange = function (val) {
        if (val !== null) {
            if (this.payees) {
                var fp = this.payees.find(function (p) { return p.name.trim().toLowerCase() === val.trim().toLowerCase(); });
                if (fp) {
                    var acctid = fp.defaultAcct;
                    var amt = fp.defaultAmt.toString();
                    var catname = this.categoryName(fp.defaultCat);
                    var taxcheck = this.categories.find(function (c) { return c.id === fp.defaultCat; }).tax;
                    this.acctTo.setValue(acctid);
                    this.amount.setValue(amt);
                    this.category.setValue(catname);
                    this.tax.setValue(taxcheck);
                }
                else {
                    this.acctTo.setValue('');
                    this.amount.setValue('');
                    this.category.setValue('');
                    this.tax.setValue(false);
                }
            }
        }
        else {
            this.acctTo.setValue('');
            this.amount.setValue('');
            this.category.setValue('');
            this.tax.setValue(false);
        }
    }; //onFPChange
    TransactionAddComponent.prototype.onTPChange = function (val) {
        if (val !== null) {
            if (this.payees) {
                var tp = this.payees.find(function (p) { return p.name.trim().toLowerCase() === val.trim().toLowerCase(); });
                if (tp) {
                    var acctid = tp.defaultAcct;
                    var amt = tp.defaultAmt.toString();
                    var catname = this.categoryName(tp.defaultCat);
                    var taxcheck = this.categories.find(function (c) { return c.id === tp.defaultCat; }).tax;
                    this.acctFrom.setValue(acctid);
                    this.amount.setValue(amt);
                    this.category.setValue(catname);
                    this.tax.setValue(taxcheck);
                }
                else {
                    this.acctFrom.setValue('');
                    this.amount.setValue('');
                    this.category.setValue('');
                    this.tax.setValue(false);
                }
            }
        }
        else {
            this.acctFrom.setValue('');
            this.amount.setValue('');
            this.category.setValue('');
            this.tax.setValue(false);
        }
    }; //onTPChange
    TransactionAddComponent.prototype.onFPSelection = function (val) {
        this.onFPInput(val);
        this.onFPChange(val);
    };
    TransactionAddComponent.prototype.onTPSelection = function (val) {
        this.onTPInput(val);
        this.onTPChange(val);
    };
    TransactionAddComponent.prototype.payeeFilter = function (val) {
        if (this.payees) {
            return this.payees.filter(function (payee) {
                return payee.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            }).map(function (payee) { return payee.name; });
        }
        else {
            return [];
        }
    };
    TransactionAddComponent = __decorate([
        core_1.Component({
            selector: 'transaction-add',
            template: __webpack_require__("../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], TransactionAddComponent);
    return TransactionAddComponent;
}()); //component
exports.TransactionAddComponent = TransactionAddComponent;


/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\nlabel {\r\n  width: 80px;\r\n}\r\n\r\nselect, input {\r\n    width: 180px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.red {\r\n    color: red;\r\n}\r\n\r\n.green {\r\n    color: green;\r\n}\r\n\r\n.greyed {\r\n    color: lightgray;\r\n}\r\n\r\n.payeeSelector {\r\n    background: snow;\r\n}\r\n\r\n.accontSelector {\r\n    background: floralwhite;\r\n}\r\n\r\n.comments {\r\n    width: 610px;\r\n    margin-bottom:20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactionEdit\">\r\n  <h4>Edit</h4>\r\n\r\n  <form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\">\r\n      <label>Date</label>\r\n      <input type='date' name=\"date\" formControlName=\"date\" />\r\n      <br />\r\n      <div class=\"payeeSelector\">\r\n          <label>To Payee</label>\r\n          <mat-form-field>\r\n              <input type=\"text\" matInput formControlName=\"payeeTo\" [matAutocomplete]=\"autoPT\" />\r\n              <mat-autocomplete #autoPT=\"matAutocomplete\">\r\n                  <mat-option *ngFor=\"let payeeName of filteredPayeeToNames | async\" value=\"{{payeeName}}\">\r\n                      {{ payeeName }}\r\n                  </mat-option>\r\n              </mat-autocomplete>\r\n          </mat-form-field>\r\n          <label>From Payee</label>\r\n          <mat-form-field>\r\n              <input type=\"text\" matInput formControlName=\"payeeFrom\" [matAutocomplete]=\"autoPF\" />\r\n              <mat-autocomplete #autoPF=\"matAutocomplete\">\r\n                  <mat-option *ngFor=\"let payeeName of filteredPayeeFromNames | async\" value=\"{{payeeName}}\">\r\n                      {{ payeeName }}\r\n                  </mat-option>\r\n              </mat-autocomplete>\r\n          </mat-form-field>\r\n      </div>\r\n      <br />\r\n      <div class=\"accountSelector\">\r\n          <label>From Acct</label>\r\n          <select name=\"acctFrom\" formControlName=\"acctFrom\">\r\n              <option *ngFor=\"let account of acctLiability\" [class]=\"account.active? '' : 'greyed'\" value=\"{{account.id}}\">{{account.name}}</option>\r\n              <option disabled>──────────</option>\r\n              <option *ngFor=\"let account of acctAsset\" [class]=\"account.active? '' : 'greyed'\" value=\"{{account.id}}\">{{account.name}}</option>\r\n          </select>\r\n          <label>To Acct</label>\r\n          <select name=\"acctTo\" formControlName=\"acctTo\">\r\n              <option *ngFor=\"let account of acctAsset\" [class]=\"account.active? '' : 'greyed'\" value=\"{{account.id}}\">{{account.name}}</option>\r\n              <option disabled>──────────</option>\r\n              <option *ngFor=\"let account of acctLiability\" [class]=\"account.active? '' : 'greyed'\" value=\"{{account.id}}\">{{account.name}}</option>\r\n          </select>\r\n      </div>\r\n      <br />\r\n      <label>Amount<span class=\"pull-right\">$</span></label>\r\n      <input type='number' name=\"amount\" formControlName=\"amount\" />\r\n      <br />\r\n      <label>Category</label>\r\n      <mat-form-field>\r\n          <input id=\"catField\" type=\"text\" matInput formControlName=\"category\" [matAutocomplete]=\"autoC\" (change)=\"onCChange($event.target.value)\" />\r\n          <mat-autocomplete #autoC=\"matAutocomplete\">\r\n              <mat-option *ngFor=\"let categoryName of filteredCategoryNames | async\" value=\"{{categoryName}}\" (onSelectionChange)=\"onCChange(categoryName)\">\r\n                  {{ categoryName }}\r\n              </mat-option>\r\n          </mat-autocomplete>\r\n      </mat-form-field>\r\n      <br />\r\n      <label>Tax</label>\r\n      <input id=\"taxField\" type='checkbox' name=\"tax\" value=\"true\" formControlName=\"tax\" />\r\n      <br />\r\n      <label>Comments</label>\r\n      <input type='text' class=\"comments\" name=\"comments\" formControlName=\"comments\" />\r\n      <br />\r\n      <input type='submit' value=\"Update\" />\r\n      <button routerLink=\"/transactions\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.ts":
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
__webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var startWith_1 = __webpack_require__("../../../../rxjs/_esm5/operators/startWith.js");
var map_1 = __webpack_require__("../../../../rxjs/_esm5/operators/map.js");
var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        var id = +this.route.snapshot.paramMap.get('id');
        this.accounts = this.dataService.Accounts();
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.categories = this.dataService.Categories();
        this.payees = this.dataService.Payees();
        this.editTransaction = this.dataService.Transaction(id);
        this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.comments, this.date, this.payeeFrom, this.payeeTo, this.tax);
        this.filteredCategoryNames = this.category.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.categoryFilter(val); }));
        this.filteredPayeeFromNames = this.payeeFrom.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.payeeFilter(val); }));
        this.filteredPayeeToNames = this.payeeTo.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.payeeFilter(val); }));
    };
    TransactionEditComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    TransactionEditComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    TransactionEditComponent.prototype.categoryFilter = function (val) {
        if (this.categories) {
            return this.categories.filter(function (category) {
                return category.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            }).map(function (category) { return category.name; });
        }
        else {
            return [];
        }
    };
    TransactionEditComponent.prototype.categoryId = function (categoryName) {
        return this.categories.find(function (element) { return element.name === categoryName; }).id;
    };
    TransactionEditComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionEditComponent.prototype.instantiateControls = function () {
        this.acctFrom = new forms_1.FormControl(this.editTransaction.acctFrom);
        this.acctTo = new forms_1.FormControl(this.editTransaction.acctTo);
        this.amount = new forms_1.FormControl(this.editTransaction.amount);
        this.category = new forms_1.FormControl(this.categoryName(this.editTransaction.category));
        this.comments = new forms_1.FormControl(this.editTransaction.comments);
        this.date = new forms_1.FormControl(this.editTransaction.date);
        this.payeeFrom = new forms_1.FormControl(this.editTransaction.payeeFrom);
        this.payeeTo = new forms_1.FormControl(this.editTransaction.payeeTo);
        this.tax = new forms_1.FormControl(this.editTransaction.tax);
    };
    TransactionEditComponent.prototype.instantiateForm = function (acctFrom, acctTo, amount, category, comments, date, payeeFrom, payeeTo, tax) {
        this.form = new forms_1.FormGroup({
            acctFrom: acctFrom,
            acctTo: acctTo,
            amount: amount,
            category: category,
            comments: comments,
            date: date,
            payeeFrom: payeeFrom,
            payeeTo: payeeTo,
            tax: tax,
        });
    };
    TransactionEditComponent.prototype.onCChange = function (val) {
        if (val !== null) {
            if (this.categories) {
                var cat = this.categories.find(function (c) { return c.name.trim().toLowerCase() === val.trim().toLowerCase(); });
                if (cat) {
                    var taxcheck = cat.tax;
                    this.tax.setValue(taxcheck);
                }
                else {
                    this.tax.setValue(false);
                }
            }
        }
        else {
            this.tax.setValue(false);
        }
    }; //onCChange
    TransactionEditComponent.prototype.onSubmit = function () {
        var _this = this;
        //add the payee or update its defaults from payeeFrom, if populated
        if (this.form.get('payeeFrom').value !== '') {
            var pfMatch = this.payees.find(function (element) { return element.name === _this.form.get('payeeFrom').value; });
            if (pfMatch) {
                var matchIndex = this.payees.indexOf(pfMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctTo').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.form.get('category').value;
                this.dataService.updatePayee(this.payees[matchIndex]);
            }
            else {
                var pf = { id: 0, balance: 0, defaultAcct: this.form.get('acctTo').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeFrom').value };
                this.dataService.addPayee(pf);
            }
        }
        //add the payee or update its defaults from payeeTo, if populated
        if (this.form.get('payeeTo').value !== '') {
            var ptMatch = this.payees.find(function (element) { return element.name === _this.form.get('payeeTo').value; });
            if (ptMatch) {
                var matchIndex = this.payees.indexOf(ptMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctFrom').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.form.get('category').value;
                this.dataService.updatePayee(this.payees[matchIndex]);
            }
            else {
                var pt = { id: 0, balance: 0, defaultAcct: this.form.get('acctFrom').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeTo').value };
                this.dataService.addPayee(pt);
            }
        }
        //update the transaction
        this.editTransaction.acctFrom = this.form.get('acctFrom').value;
        this.editTransaction.acctTo = this.form.get('acctTo').value;
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.categoryId(this.form.get('category').value);
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.comments = this.form.get('comments').value;
        this.editTransaction.payeeFrom = this.form.get('payeeFrom').value;
        this.editTransaction.payeeTo = this.form.get('payeeTo').value;
        this.editTransaction.tax = this.form.get('tax').value;
        this.dataService.updateTransaction(this.editTransaction);
        //reset and close
        this.ngOnInit();
        this.goBack();
    };
    TransactionEditComponent.prototype.payeeFilter = function (val) {
        if (this.payees) {
            return this.payees.filter(function (payee) {
                return payee.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            }).map(function (payee) { return payee.name; });
        }
        else {
            return [];
        }
    };
    TransactionEditComponent = __decorate([
        core_1.Component({
            selector: 'transaction-edit',
            template: __webpack_require__("../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], TransactionEditComponent);
    return TransactionEditComponent;
}());
exports.TransactionEditComponent = TransactionEditComponent;


/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n\r\n.account-name{\r\n    font-weight: bold;\r\n    color:darkblue;\r\n}\r\n\r\n.actionCell {\r\n    background: floralwhite;\r\n}\r\n\r\n.balanceCell{\r\n    background:mintcream;\r\n    color:darkgreen;\r\n    text-align:right;\r\n}\r\n\r\ntable {\r\n    display: block;\r\n    font-size:12px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"transactions\">\r\n    <p *ngIf=\"!transactions\"><em>Loading...</em></p>\r\n\r\n    <table *ngIf=\"transactions && payees && categories && accounts\">\r\n        <caption>Transactions</caption>\r\n        <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Date</th>\r\n                <th>To</th>\r\n                <th>From</th>\r\n                <th>Amount</th>\r\n                <th>Category</th>\r\n                <th>Tax?</th>\r\n                <th>Comment</th>\r\n                <th colspan=\"2\">Actions</th>\r\n                <th *ngFor=\"let account of accounts\">{{account.name}}</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let transaction of transactions; let tidx = index\">\r\n                <td>{{transaction.id}}</td>\r\n                <td>{{transaction.date | date}}</td>\r\n\r\n                <td *ngIf=\"transaction.payeeTo\">{{transaction.payeeTo}}</td>\r\n                <td *ngIf=\"transaction.acctTo\" class=\"account-name\">{{accountName(transaction.acctTo)}}</td>\r\n                <td *ngIf=\"!transaction.payeeTo && !transaction.acctTo\">&nbsp;</td> <!--occurs for (-) adjustment-type transactions-->\r\n\r\n                <td *ngIf=\"transaction.payeeFrom\">{{transaction.payeeFrom}}</td>\r\n                <td *ngIf=\"transaction.acctFrom\" class=\"account-name\">{{accountName(transaction.acctFrom)}}</td>\r\n                <td *ngIf=\"!transaction.payeeFrom && !transaction.acctFrom\">&nbsp;</td> <!--occurs for (+) adjustment-type transactions-->\r\n\r\n                <td class='right'>{{displayAsDollar(transaction.amount)}}</td>\r\n                <td>{{categoryName(transaction.category)}}</td>\r\n                <td>&nbsp;<span *ngIf=\"transaction.tax\" class='glyphicon glyphicon-copy' style='color:green;'></span></td>\r\n                <td>{{transaction.comments}}</td>\r\n                <td class=\"actionCell\"><a class=\"btn btn-xs editlink\" routerLink=\"./transaction-edit/{{transaction.id}}\">Edit</a></td>\r\n                <td class=\"actionCell\"><a class=\"btn btn-xs deletelink\" (click)=\"onDelete(transaction.id);\">Delete</a></td>\r\n                <td *ngFor=\"let account of accounts; let aidx = index\" class=\"balanceCell\">{{displayAsDollar(balances[tidx][aidx])}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <a class=\"btn\" id=\"addlink\" routerLink=\"./transaction-add\">Add New Transaction</a>\r\n    <br />\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.ts":
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
    } //ctor
    TransactionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.accounts.subscribe(function (accounts) { return _this.accounts = accounts; });
        this.dataService.categories.subscribe(function (categories) { return _this.categories = categories; });
        this.dataService.payees.subscribe(function (payees) { return _this.payees = payees; });
        this.dataService.transactions.subscribe(function (transactions) {
            _this.transactions = transactions;
            _this.balances = [];
            _this.transactions.forEach(function (transaction, tidx) {
                _this.balances[tidx] = [];
                _this.accounts.forEach(function (account, aidx) {
                    if (tidx === 0) {
                        if (transaction.acctFrom === account.id) {
                            _this.balances[tidx][aidx] = (-1) * transaction.amount;
                        }
                        else if (transaction.acctTo === account.id) {
                            _this.balances[tidx][aidx] = transaction.amount;
                        }
                        else {
                            _this.balances[tidx][aidx] = 0;
                        }
                    }
                    else {
                        if (transaction.acctFrom === account.id) {
                            _this.balances[tidx][aidx] = _this.balances[tidx - 1][aidx] - transaction.amount;
                        }
                        else if (transaction.acctTo === account.id) {
                            _this.balances[tidx][aidx] = _this.balances[tidx - 1][aidx] + transaction.amount;
                        }
                        else {
                            _this.balances[tidx][aidx] = _this.balances[tidx - 1][aidx];
                        }
                    }
                });
            });
        });
    };
    TransactionListComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    TransactionListComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
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
            template: __webpack_require__("../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TransactionListComponent);
    return TransactionListComponent;
}());
exports.TransactionListComponent = TransactionListComponent;


/***/ }),

/***/ "../../../../../src/modules/transactions/transactions.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var transaction_add_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.ts");
var transaction_edit_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.ts");
var transaction_list_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var transactions_routing_module_1 = __webpack_require__("../../../../../src/modules/transactions/transactions.routing.module.ts");
var TransactionsModule = /** @class */ (function () {
    function TransactionsModule() {
    }
    TransactionsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                material_1.MatInputModule,
                material_1.MatAutocompleteModule,
                material_1.MatFormFieldModule,
                material_1.MatOptionModule,
                transactions_routing_module_1.TransactionRoutingModule,
            ],
            declarations: [
                transaction_add_component_1.TransactionAddComponent,
                transaction_edit_component_1.TransactionEditComponent,
                transaction_list_component_1.TransactionListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], TransactionsModule);
    return TransactionsModule;
}());
exports.TransactionsModule = TransactionsModule;


/***/ }),

/***/ "../../../../../src/modules/transactions/transactions.routing.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var transaction_add_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-add/transaction-add.component.ts");
var transaction_edit_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-edit/transaction-edit.component.ts");
var transaction_list_component_1 = __webpack_require__("../../../../../src/modules/transactions/components/transaction-list/transaction-list.component.ts");
var transactionsRoutes = [
    {
        path: 'transactions',
        component: transaction_list_component_1.TransactionListComponent,
        children: [
            { path: 'transaction-add', component: transaction_add_component_1.TransactionAddComponent },
            { path: 'transaction-edit/:id', component: transaction_edit_component_1.TransactionEditComponent }
        ]
    }
];
var TransactionRoutingModule = /** @class */ (function () {
    function TransactionRoutingModule() {
    }
    TransactionRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(transactionsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], TransactionRoutingModule);
    return TransactionRoutingModule;
}());
exports.TransactionRoutingModule = TransactionRoutingModule;


/***/ }),

/***/ "../../../../../src/modules/users/components/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/modules/users/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"users\">\r\n    <p *ngIf=\"!users\"><em>Loading...</em></p>\r\n\r\n    <table>\r\n        <caption>Users</caption>\r\n        <thead>\r\n            <tr>\r\n                <th>ID</th>\r\n                <th>Username</th>\r\n                <th>Admin</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let user of users\">\r\n                <td>{{user.id}}</td>\r\n                <td>{{user.userName}}</td>\r\n                <td><input #cb1 type=\"checkbox\" value=\"true\" [checked]=\"user.admin\" (change)=\"onToggleAdmin(user.id)\"></td>\r\n                <td><a (click)=\"onReset(user.id);\">Reset Password</a></td>\r\n                <td><a (click)=\"onDelete(user.id);\">Delete</a></td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/modules/users/components/user-list/user-list.component.ts":
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
    } //ctor
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.users.subscribe(function (users) { return _this.users = users; });
    };
    UserListComponent.prototype.onDelete = function (id) {
        var userToDelete = this.users.find(function (element) { return element.id == id; }).userName;
        var confirmation = confirm('are you sure you want to delete ' + userToDelete + '?');
        if (confirmation) {
            this.dataService.deleteUser(userToDelete);
        }
        ;
    };
    UserListComponent.prototype.logCheckbox = function (element) {
        alert("Checkbox " + element.value + " was " + (element.checked ? '' : 'un') + "checked\n");
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
            template: __webpack_require__("../../../../../src/modules/users/components/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/modules/users/components/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;


/***/ }),

/***/ "../../../../../src/modules/users/users.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var user_list_component_1 = __webpack_require__("../../../../../src/modules/users/components/user-list/user-list.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/modules/shared/data.service.ts");
var users_routing_module_1 = __webpack_require__("../../../../../src/modules/users/users.routing.module.ts");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                users_routing_module_1.UserRoutingModule
            ],
            declarations: [
                user_list_component_1.UserListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;


/***/ }),

/***/ "../../../../../src/modules/users/users.routing.module.ts":
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
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_list_component_1 = __webpack_require__("../../../../../src/modules/users/components/user-list/user-list.component.ts");
var usersRoutes = [
    { path: 'users', component: user_list_component_1.UserListComponent }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(usersRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());
exports.UserRoutingModule = UserRoutingModule;


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
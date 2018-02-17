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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var common_1 = require("@angular/common");
var data_service_1 = require("../../../shared/data.service");
var TransactionAddComponent = /** @class */ (function () {
    function TransactionAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
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
        this.newTransaction = this.freshNewTransaction();
        Promise.all([this.getAccounts(), this.getCategories()])
            .then(function () { return _this.defineForm(); });
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
    TransactionAddComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionAddComponent.prototype.defineForm = function () {
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
        return { id: null, amount: 0, category: 0, crAcct: 0, date: new Date().toLocaleDateString(), drAcct: 0, tax: false };
    };
    TransactionAddComponent.prototype.getAccounts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getAccounts().subscribe(function (accounts) {
                _this.accounts = accounts;
                resolve(accounts);
            }, function (error) {
                alert("there was an error getting accounts.");
            });
        });
    };
    TransactionAddComponent.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getCategories().subscribe(function (categories) {
                _this.categories = categories;
                resolve(categories);
            }, function (error) {
                alert("there was an error getting categories.");
            });
        });
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
            templateUrl: './transaction-add.component.html',
            styleUrls: ['./transaction-add.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], TransactionAddComponent);
    return TransactionAddComponent;
}());
exports.TransactionAddComponent = TransactionAddComponent;
//# sourceMappingURL=transaction-add.component.js.map
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
var common_1 = require("@angular/common");
var data_service_1 = require("../../../shared/data.service");
var startWith_1 = require("rxjs/operators/startWith");
var map_1 = require("rxjs/operators/map");
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
        Promise.all([this.getAccounts(), this.getCategories(), this.getPayees()])
            .then(function () { return _this.acctAsset = _this.accounts.filter(function (c) { return c.acctType === "Asset"; }); })
            .then(function () { return _this.acctLiability = _this.accounts.filter(function (c) { return c.acctType === "Liability"; }); })
            .then(function () { return _this.instantiateForm(_this.acctFrom, _this.acctTo, _this.amount, _this.category, _this.date, _this.payeeFrom, _this.payeeTo, _this.tax); })
            .then(function () { return _this.filteredCategoryNames = _this.category.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.categoryFilter(val); })); });
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
    TransactionAddComponent.prototype.categoryId = function (categoryName) {
        return this.categories.find(function (element) { return element.name === categoryName; }).id;
    };
    TransactionAddComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionAddComponent.prototype.instantiateForm = function (acctFrom, acctTo, amount, category, date, payeeFrom, payeeTo, tax) {
        this.form = new forms_1.FormGroup({
            acctFrom: acctFrom,
            acctTo: acctTo,
            amount: amount,
            category: category,
            date: date,
            payeeFrom: payeeFrom,
            payeeTo: payeeTo,
            tax: tax,
        });
    };
    TransactionAddComponent.prototype.categoryFilter = function (val) {
        return this.categories.filter(function (category) {
            return category.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
        }).map(function (category) { return category.name; });
    };
    TransactionAddComponent.prototype.freshNewTransaction = function () {
        return { id: null, amount: 0, category: 0, acctFrom: 0, acctTo: 0, date: new Date().toLocaleDateString(), payeeFrom: 0, payeeTo: 0, tax: false };
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
    TransactionAddComponent.prototype.getPayees = function () {
        var _this = this;
        this.dataService.getPayees().subscribe(function (payees) { return _this.payees = payees; }, function (error) { return alert("there was an error getting payees."); });
    };
    TransactionAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionAddComponent.prototype.onSubmit = function () {
        //set data from the form
        this.newTransaction.acctFrom = this.form.get('acctFrom').value;
        this.newTransaction.acctTo = this.form.get('acctTo').value;
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.categoryId(this.form.get('category').value);
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.payeeFrom = this.form.get('payeeFrom').value;
        this.newTransaction.payeeTo = this.form.get('payeeTo').value;
        this.newTransaction.tax = this.form.get('tax').value;
        //add the transaction
        this.dataService.addTransaction(this.newTransaction);
        //reset and close
        this.ngOnInit();
        this.goBack();
    };
    TransactionAddComponent.prototype.payeeName = function (payeeId) {
        return this.payees.find(function (element) { return element.id === payeeId; }).name;
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
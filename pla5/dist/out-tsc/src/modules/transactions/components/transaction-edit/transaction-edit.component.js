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
var startWith_1 = require("rxjs/operators/startWith");
var map_1 = require("rxjs/operators/map");
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
        Promise.all([this.getAccounts(), this.getCategories(), this.getTransaction(id)])
            .then(function () { return _this.acctAsset = _this.accounts.filter(function (c) { return c.owned && c.acctType === "Asset"; }); })
            .then(function () { return _this.acctLiability = _this.accounts.filter(function (c) { return c.owned && c.acctType === "Liability"; }); })
            .then(function () { return _this.acctPayee = _this.accounts.filter(function (c) { return !c.owned; }); })
            .then(function () { return _this.instantiateControls(); })
            .then(function () { return _this.instantiateForm(_this.acctFrom, _this.acctTo, _this.amount, _this.category, _this.date, _this.tax); })
            .then(function () { return _this.filteredCategoryNames = _this.category.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.categoryFilter(val); })); });
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
    TransactionEditComponent.prototype.categoryId = function (categoryName) {
        return this.categories.find(function (element) { return element.name === categoryName; }).id;
    };
    TransactionEditComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionEditComponent.prototype.categoryFilter = function (val) {
        return this.categories.filter(function (category) {
            return category.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
        }).map(function (category) { return category.name; });
    };
    TransactionEditComponent.prototype.instantiateControls = function () {
        this.acctFrom = new forms_1.FormControl(this.editTransaction.acctFrom);
        this.acctTo = new forms_1.FormControl(this.editTransaction.acctTo);
        this.amount = new forms_1.FormControl(this.editTransaction.amount);
        this.category = new forms_1.FormControl(this.categoryName(this.editTransaction.category));
        this.date = new forms_1.FormControl(this.editTransaction.date);
        this.tax = new forms_1.FormControl(this.editTransaction.tax);
    };
    TransactionEditComponent.prototype.instantiateForm = function (acctFrom, acctTo, amount, category, date, tax) {
        this.form = new forms_1.FormGroup({
            amount: amount,
            category: category,
            acctFrom: acctFrom,
            date: date,
            acctTo: acctTo,
            tax: tax,
        });
    };
    TransactionEditComponent.prototype.getAccounts = function () {
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
    TransactionEditComponent.prototype.getCategories = function () {
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
    TransactionEditComponent.prototype.getTransaction = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getTransaction(id).subscribe(function (transaction) {
                _this.editTransaction = transaction;
                resolve(transaction);
            }, function (error) {
                alert("there was an error getting transaction.");
            });
        });
    };
    TransactionEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionEditComponent.prototype.onSubmit = function () {
        //set data from the form
        this.editTransaction.acctFrom = this.form.get('acctFrom').value;
        this.editTransaction.acctTo = this.form.get('acctTo').value;
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.categoryId(this.form.get('category').value);
        alert(this.form.get('category').value);
        this.editTransaction.date = this.form.get('date').value;
        this.editTransaction.tax = this.form.get('tax').value;
        //update the transaction
        this.dataService.updateTransaction(this.editTransaction);
        //reset and close
        this.ngOnInit();
        this.goBack();
    };
    TransactionEditComponent = __decorate([
        core_1.Component({
            selector: 'transaction-edit',
            templateUrl: './transaction-edit.component.html',
            styleUrls: ['./transaction-edit.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], TransactionEditComponent);
    return TransactionEditComponent;
}());
exports.TransactionEditComponent = TransactionEditComponent;
//# sourceMappingURL=transaction-edit.component.js.map
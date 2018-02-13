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
var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent(dataService, route, router, location) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionEditComponent.prototype.ngOnInit = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.getAccounts();
        this.getCategories();
        var id = +this.route.snapshot.paramMap.get('id');
        this.createForm(id);
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
    TransactionEditComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionEditComponent.prototype.createForm = function (id) {
        var _this = this;
        this.dataService.getTransaction(id).subscribe(function (transaction) {
            _this.editTransaction = transaction;
            _this.defineForm();
        }, function (error) { return alert("there was an error getting transaction."); });
    };
    TransactionEditComponent.prototype.defineForm = function () {
        this.form = new forms_1.FormGroup({
            amount: new forms_1.FormControl(this.editTransaction.amount),
            category: new forms_1.FormControl(this.editTransaction.category),
            crAcct: new forms_1.FormControl(this.editTransaction.crAcct),
            date: new forms_1.FormControl(this.editTransaction.date),
            drAcct: new forms_1.FormControl(this.editTransaction.drAcct),
            tax: new forms_1.FormControl(this.editTransaction.tax),
        });
    };
    TransactionEditComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; }, function (error) { return alert("there was an error getting accounts."); });
    };
    TransactionEditComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return alert("there was an error getting categories."); });
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
            templateUrl: './transaction-edit.component.html',
            styleUrls: ['./transaction-edit.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            router_1.Router,
            common_1.Location])
    ], TransactionEditComponent);
    return TransactionEditComponent;
}());
exports.TransactionEditComponent = TransactionEditComponent;
//# sourceMappingURL=transaction-edit.component.js.map
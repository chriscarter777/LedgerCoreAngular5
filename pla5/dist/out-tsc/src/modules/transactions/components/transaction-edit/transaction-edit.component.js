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
        this.accounts = this.dataService.Accounts();
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.categories = this.dataService.Categories();
        this.payees = this.dataService.Payees();
        this.editTransaction = this.dataService.Transaction(id);
        this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.check, this.comments, this.date, this.payeeFrom, this.payeeTo, this.tax);
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
        this.check = new forms_1.FormControl(this.editTransaction.check);
        this.comments = new forms_1.FormControl(this.editTransaction.comments);
        this.date = new forms_1.FormControl(this.editTransaction.date);
        this.payeeFrom = new forms_1.FormControl(this.editTransaction.payeeFrom);
        this.payeeTo = new forms_1.FormControl(this.editTransaction.payeeTo);
        this.tax = new forms_1.FormControl(this.editTransaction.tax);
    };
    TransactionEditComponent.prototype.instantiateForm = function (acctFrom, acctTo, amount, category, check, comments, date, payeeFrom, payeeTo, tax) {
        this.form = new forms_1.FormGroup({
            acctFrom: acctFrom,
            acctTo: acctTo,
            amount: amount,
            category: category,
            check: check,
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
        this.editTransaction.check = this.form.get('check').value;
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
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
var data_service_1 = require("../../../shared/data.service");
var forms_1 = require("@angular/forms");
var ReportIncomeComponent = /** @class */ (function () {
    function ReportIncomeComponent(dataService) {
        this.dataService = dataService;
        this.acctFilter = new forms_1.FormControl();
        this.amountMax = new forms_1.FormControl();
        this.amountMin = new forms_1.FormControl();
        this.catFilter = new forms_1.FormControl();
        this.checkMax = new forms_1.FormControl();
        this.checkMin = new forms_1.FormControl();
        this.dateMax = new forms_1.FormControl();
        this.dateMin = new forms_1.FormControl();
        this.payeeFilter = new forms_1.FormControl();
        this.taxFilter = new forms_1.FormControl();
        this.showFilter = true;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    } //ctor
    ReportIncomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.accounts.subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.acctAsset = _this.dataService.AssetAccounts();
            _this.acctLiability = _this.dataService.LiabilityAccounts();
        });
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.dataService.categories.subscribe(function (categories) { return _this.categories = categories; });
        this.dataService.payees.subscribe(function (payees) { return _this.payees = payees; });
        this.dataService.transactions.subscribe(function (transactions) {
            _this.transactions = transactions;
        });
        this.instantiateForm(this.acctFilter, this.amountMax, this.amountMin, this.catFilter, this.checkMax, this.checkMin, this.dateMax, this.dateMin, this.payeeFilter, this.taxFilter);
    };
    ReportIncomeComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    ReportIncomeComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    ReportIncomeComponent.prototype.onSubmit = function () {
        var _this = this;
        alert('submit');
        this.displayLines = this.lines;
        if (this.form.get('acctFilter').value !== null) {
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.acctFrom === _this.form.get('acctFilter').value || line.transaction.acctTo === _this.form.get('acctFilter').value; });
        }
        if (this.form.get('amountMax').value !== null) {
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.amount <= _this.form.get('amountMax').value; });
        }
        if (this.form.get('amountMin').value !== null) {
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.amount >= _this.form.get('amountMin').value; });
        }
        if (this.form.get('catFilter').value !== null) {
            var catArray = this.form.get('catFilter').value;
            this.displayLines = this.displayLines.filter(function (line) { return catArray.some(function (element) { return element === line.transaction.category; }); });
        }
        if (this.form.get('checkMax').value !== null) {
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.check !== null; });
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.check <= _this.form.get('checkMax').value; });
        }
        if (this.form.get('checkMin').value !== null) {
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.check !== null; });
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.check >= _this.form.get('checkMin').value; });
        }
        if (this.form.get('dateMax').value !== null) {
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.date <= _this.form.get('dateMax').value; });
        }
        if (this.form.get('dateMin').value !== null) {
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.date >= _this.form.get('dateMin').value; });
        }
        if (this.form.get('payeeFilter').value !== null) {
            var payArray = this.form.get('payeeFilter').value;
            this.displayLines = this.displayLines.filter(function (line) { return payArray.some(function (element) { return element === line.transaction.payeeFrom || element === line.transaction.payeeTo; }); });
        }
        if (this.form.get('taxFilter').value === null) {
            this.displayLines = this.displayLines.filter(function (line) { return line.transaction.tax === true; });
        }
    };
    ReportIncomeComponent.prototype.onResetFilter = function () {
        alert('reset');
        this.acctFilter.setValue(null);
        this.amountMax.setValue(null);
        this.amountMin.setValue(null);
        this.catFilter.setValue(null);
        this.checkMax.setValue(null);
        this.checkMin.setValue(null);
        this.dateMax.setValue(null);
        this.dateMin.setValue(null);
        this.payeeFilter.setValue(null);
        this.taxFilter.setValue(null);
        this.onSubmit();
    };
    ReportIncomeComponent.prototype.onHideFilter = function () {
        this.showFilter = false;
    };
    ReportIncomeComponent.prototype.onShowFilter = function () {
        this.showFilter = true;
    };
    ReportIncomeComponent.prototype.instantiateForm = function (acctFilter, amountMax, amountMin, catFilter, checkMax, checkMin, dateMax, dateMin, payeeFilter, taxFilter) {
        this.form = new forms_1.FormGroup({
            acctFilter: acctFilter,
            amountMax: amountMax,
            amountMin: amountMin,
            catFilter: catFilter,
            checkMax: checkMax,
            checkMin: checkMin,
            dateMax: dateMax,
            dateMin: dateMin,
            payeeFilter: payeeFilter,
            taxFilter: taxFilter,
        });
    };
    ReportIncomeComponent = __decorate([
        core_1.Component({
            selector: 'report-income',
            templateUrl: './report-income.component.html',
            styleUrls: ['./report-income.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], ReportIncomeComponent);
    return ReportIncomeComponent;
}());
exports.ReportIncomeComponent = ReportIncomeComponent;
//# sourceMappingURL=report-income.component.js.map
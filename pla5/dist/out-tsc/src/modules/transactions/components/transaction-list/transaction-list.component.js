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
            _this.assets = [];
            _this.balances = [];
            _this.liabilities = [];
            _this.nets = [];
            _this.transactions.forEach(function (transaction, tidx) {
                _this.assets[tidx] = 0;
                _this.balances[tidx] = [];
                _this.liabilities[tidx] = 0;
                _this.nets[tidx] = 0;
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
                    _this.assets[tidx] = _this.assets[tidx] + _this.balances[tidx][aidx];
                    _this.nets[tidx] = _this.nets[tidx] + _this.balances[tidx][aidx];
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
    TransactionListComponent.prototype.onFlag0Toggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].flag0) {
            this.transactions[targetIdx].flag0 = false;
        }
        else {
            this.transactions[targetIdx].flag0 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.onFlag1Toggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].flag1) {
            this.transactions[targetIdx].flag1 = false;
        }
        else {
            this.transactions[targetIdx].flag1 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.onFlag2Toggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].flag2) {
            this.transactions[targetIdx].flag2 = false;
        }
        else {
            this.transactions[targetIdx].flag2 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.onFlag3Toggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].flag3) {
            this.transactions[targetIdx].flag3 = false;
        }
        else {
            this.transactions[targetIdx].flag3 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.onReconciledToggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].reconciled) {
            this.transactions[targetIdx].reconciled = false;
        }
        else {
            this.transactions[targetIdx].reconciled = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent = __decorate([
        core_1.Component({
            selector: 'transaction-list',
            templateUrl: './transaction-list.component.html',
            styleUrls: ['./transaction-list.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TransactionListComponent);
    return TransactionListComponent;
}());
exports.TransactionListComponent = TransactionListComponent;
//# sourceMappingURL=transaction-list.component.js.map
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
            templateUrl: './transactionList.component.html',
            styleUrls: ['./transactionList.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TransactionListComponent);
    return TransactionListComponent;
}());
exports.TransactionListComponent = TransactionListComponent;
//# sourceMappingURL=transactionlist.component.js.map
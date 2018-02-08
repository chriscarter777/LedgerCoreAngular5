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
var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(dataService) {
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.getTransactions();
    };
    TransactionsComponent.prototype.getTransactions = function () {
        var _this = this;
        this.dataService.getTransactions().subscribe(function (transactions) { return _this.transactions = transactions; });
    };
    TransactionsComponent.prototype.onDelete = function (id) {
        var confirmation = confirm('are you sure you want to delete transaction on date' + this.transactions.find(function (element) { return element.id == id; }).date + '?');
        if (confirmation) {
            alert("Ha! Account " + id + " is GONE!");
        }
        ;
    };
    TransactionsComponent.prototype.onAdd = function (newTransaction) {
        alert("You just added transaction for date " + newTransaction.date + " and amount " + newTransaction.amount + ".");
    };
    TransactionsComponent.prototype.onUpdate = function (transaction) {
        alert("You just updated transaction for date " + transaction.date + ".");
    };
    TransactionsComponent = __decorate([
        core_1.Component({
            selector: 'pl-transactions',
            templateUrl: './transactions.component.html',
            styleUrls: ['./transactions.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TransactionsComponent);
    return TransactionsComponent;
}());
exports.TransactionsComponent = TransactionsComponent;
//# sourceMappingURL=transactions.component.js.map
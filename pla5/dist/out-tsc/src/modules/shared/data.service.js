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
var http_1 = require("@angular/common/http");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    // --Accounts--
    DataService.prototype.getAccounts = function () {
        console.log("data.service.getAccounts...");
        return this.http.get('/api/Accounts');
    };
    DataService.prototype.addAccount = function (accountToAdd) {
        console.log("data.service.addAccount received: " + JSON.stringify(accountToAdd));
        return this.http.post('/api/Accounts', accountToAdd);
    };
    DataService.prototype.deleteAccount = function (id) {
        console.log("data.service.deleteAccount received: " + id);
        return this.http.delete('/api/Accounts/' + id);
    };
    DataService.prototype.updateAccount = function (accountToUpdate) {
        console.log("data.service.updateAccount received: " + JSON.stringify(accountToUpdate));
        return this.http.put('/api/Accounts', accountToUpdate);
    };
    // --Categories--
    DataService.prototype.getCategories = function () {
        return this.http.get('/api/Categories');
    };
    DataService.prototype.addCategory = function (categoryToAdd) {
        return this.http.post('/api/Categories', categoryToAdd);
    };
    DataService.prototype.deleteCategory = function (id) {
        return this.http.delete('/api/Categories/' + id);
    };
    DataService.prototype.updateCategory = function (categoryToUpdate) {
        return this.http.put('/api/Categories', categoryToUpdate);
    };
    // --Transactions--
    DataService.prototype.getTransactions = function () {
        return this.http.get('/api/Transactions');
    };
    DataService.prototype.addTransaction = function (transactionToAdd) {
        return this.http.post('/api/Transactions', transactionToAdd);
    };
    DataService.prototype.deleteTransaction = function (id) {
        return this.http.delete('/api/Transactions/' + id);
    };
    DataService.prototype.updateTransaction = function (transactionToUpdate) {
        return this.http.put('/api/Transactions', transactionToUpdate);
    };
    // --Users--
    DataService.prototype.getUsers = function () {
        return this.http.get('/api/Users');
    };
    DataService.prototype.makeAdmin = function (id) {
        return this.http.put('/api/Users/Admin/' + id, id);
    };
    DataService.prototype.unmakeAdmin = function (id) {
        return this.http.put('/api/Users/NoAdmin/' + id, id);
    };
    DataService.prototype.resetPassword = function (id, newPassword) {
        return this.http.put('/api/Users/Reset' + id, newPassword);
    };
    DataService.prototype.deleteUser = function (id) {
        return this.http.delete('/api/Users' + id);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
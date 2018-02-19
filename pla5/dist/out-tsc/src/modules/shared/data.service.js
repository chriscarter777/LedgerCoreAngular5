"use strict";
//This class is responsible for all interation with the data API (a .NET Core WebAPI, which in turn interacts with a repository), and emitting notifications when data changes 
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
        // --Events--
        this.accountAdded = new core_1.EventEmitter();
        this.accountDeleted = new core_1.EventEmitter();
        this.accountUpdated = new core_1.EventEmitter();
        this.categoryAdded = new core_1.EventEmitter();
        this.categoryDeleted = new core_1.EventEmitter();
        this.categoryUpdated = new core_1.EventEmitter();
        this.payeeAdded = new core_1.EventEmitter();
        this.payeeDeleted = new core_1.EventEmitter();
        this.payeeUpdated = new core_1.EventEmitter();
        this.transactionAdded = new core_1.EventEmitter();
        this.transactionDeleted = new core_1.EventEmitter();
        this.transactionUpdated = new core_1.EventEmitter();
        this.userDeleted = new core_1.EventEmitter();
        this.userDemoted = new core_1.EventEmitter();
        this.userPromoted = new core_1.EventEmitter();
        this.userReset = new core_1.EventEmitter();
    }
    // --Accounts--
    DataService.prototype.getAccounts = function () {
        console.log("data.service.getAccounts...");
        return this.http.get('/api/Accounts');
    };
    DataService.prototype.getAccount = function (id) {
        console.log("data.service.getAccount...");
        return this.http.get('/api/Accounts/' + id);
    };
    DataService.prototype.addAccount = function (accountToAdd) {
        var _this = this;
        var response = this.http.post('/api/Accounts', accountToAdd)
            .toPromise()
            .then(function (result) {
            _this.accountAdded.emit(result);
        });
    };
    DataService.prototype.deleteAccount = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Accounts/' + id)
            .toPromise()
            .then(function (result) {
            _this.accountDeleted.emit(result);
        });
    };
    DataService.prototype.updateAccount = function (accountToUpdate) {
        var _this = this;
        var response = this.http.put('/api/Accounts', accountToUpdate)
            .toPromise()
            .then(function (result) {
            _this.accountUpdated.emit(result);
        });
    };
    // --Categories--
    DataService.prototype.getCategories = function () {
        console.log("data.service.getCategories...");
        return this.http.get('/api/Categories');
    };
    DataService.prototype.getCategory = function (id) {
        console.log("data.service.getCategory...");
        return this.http.get('/api/Categories/' + id);
    };
    DataService.prototype.addCategory = function (categoryToAdd) {
        var _this = this;
        var response = this.http.post('/api/Categories', categoryToAdd)
            .toPromise()
            .then(function (result) {
            _this.categoryAdded.emit(result);
        });
    };
    DataService.prototype.deleteCategory = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Categories/' + id)
            .toPromise()
            .then(function (result) {
            _this.categoryDeleted.emit(result);
        });
    };
    DataService.prototype.updateCategory = function (categoryToUpdate) {
        var _this = this;
        var response = this.http.put('/api/Categories', categoryToUpdate)
            .toPromise()
            .then(function (result) {
            _this.categoryUpdated.emit(result);
        });
    };
    // --Payees--
    DataService.prototype.getPayees = function () {
        console.log("data.service.getPayees...");
        return this.http.get('/api/Payees');
    };
    DataService.prototype.getPayee = function (id) {
        console.log("data.service.getPayee...");
        return this.http.get('/api/Payees/' + id);
    };
    DataService.prototype.addPayee = function (payeeToAdd) {
        var _this = this;
        var response = this.http.post('/api/Payees', payeeToAdd)
            .toPromise()
            .then(function (result) {
            _this.payeeAdded.emit(result);
        });
    };
    DataService.prototype.deletePayee = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Accounts/' + id)
            .toPromise()
            .then(function (result) {
            _this.payeeDeleted.emit(result);
        });
    };
    DataService.prototype.updatePayee = function (payeeToUpdate) {
        var _this = this;
        var response = this.http.put('/apiPayees', payeeToUpdate)
            .toPromise()
            .then(function (result) {
            _this.payeeUpdated.emit(result);
        });
    };
    // --Transactions--
    DataService.prototype.getTransactions = function () {
        console.log("data.service.getTransactions...");
        return this.http.get('/api/Transactions');
    };
    DataService.prototype.getTransaction = function (id) {
        console.log("data.service.getTransaction...");
        return this.http.get('/api/Transactions/' + id);
    };
    DataService.prototype.addTransaction = function (transactionToAdd) {
        var _this = this;
        var response = this.http.post('/api/Transactions', transactionToAdd)
            .toPromise()
            .then(function (result) {
            _this.transactionAdded.emit(result);
        });
    };
    DataService.prototype.deleteTransaction = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Transactions/' + id)
            .toPromise()
            .then(function (result) {
            _this.transactionDeleted.emit(result);
        });
    };
    DataService.prototype.updateTransaction = function (transactionToUpdate) {
        var _this = this;
        var response = this.http.put('/api/Transactions', transactionToUpdate)
            .toPromise()
            .then(function (result) {
            _this.transactionUpdated.emit(result);
        });
    };
    // --Users--
    DataService.prototype.getUsers = function () {
        return this.http.get('/api/Users');
    };
    DataService.prototype.getUser = function (id) {
        console.log("data.service.getUser...");
        return this.http.get('/api/User/' + id);
    };
    DataService.prototype.makeAdmin = function (id) {
        var _this = this;
        var response = this.http.put('/api/Users/Admin/' + id, id)
            .toPromise()
            .then(function (result) {
            _this.userPromoted.emit(result);
        });
    };
    DataService.prototype.unmakeAdmin = function (id) {
        var _this = this;
        var response = this.http.put('/api/Users/NoAdmin/' + id, id)
            .toPromise()
            .then(function (result) {
            _this.userDemoted.emit(result);
        });
    };
    DataService.prototype.resetPassword = function (id, newPassword) {
        var _this = this;
        var response = this.http.put('/api/Users/Reset/' + id, newPassword)
            .toPromise()
            .then(function (result) {
            _this.userReset.emit(result);
        });
    };
    DataService.prototype.deleteUser = function (id) {
        var _this = this;
        var response = this.http.delete('/api/Users/' + id)
            .toPromise()
            .then(function (result) {
            _this.userDeleted.emit(result);
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "accountUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "categoryUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "payeeAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "payeeDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "payeeUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionAdded", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "transactionUpdated", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userDeleted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userDemoted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userPromoted", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DataService.prototype, "userReset", void 0);
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
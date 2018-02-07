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
    DataService.prototype.getAccounts = function () {
        return this.http.get(this.baseUrl + 'api/Accounts');
    };
    DataService.prototype.getCategories = function () {
        return this.http.get(this.baseUrl + 'api/Categories');
    };
    DataService.prototype.getTransactions = function () {
        return this.http.get(this.baseUrl + 'api/Transactions');
    };
    DataService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl + 'api/Users');
    };
    __decorate([
        core_1.Inject('BASE_URL'),
        __metadata("design:type", String)
    ], DataService.prototype, "baseUrl", void 0);
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=service.js.map
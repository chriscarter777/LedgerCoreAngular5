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
var AccountsComponent = /** @class */ (function () {
    function AccountsComponent(dataService) {
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountsComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountsComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; });
    };
    AccountsComponent.prototype.onDelete = function (id) {
        var confirmation = confirm('are you sure you want to delete ' + this.accounts.find(function (element) { return element.id == id; }).name + '?');
        if (confirmation) {
            alert("Ha! Account " + id + " is GONE!");
        }
        ;
    };
    AccountsComponent.prototype.onAdd = function (newAccount) {
        alert("You just added " + newAccount.name + ".");
    };
    AccountsComponent.prototype.onUpdate = function (account) {
        alert("You just updated " + account.name + ".");
    };
    AccountsComponent = __decorate([
        core_1.Component({
            selector: 'pl-accounts',
            templateUrl: './accounts.component.html',
            styleUrls: ['./accounts.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AccountsComponent);
    return AccountsComponent;
}());
exports.AccountsComponent = AccountsComponent;
//# sourceMappingURL=accounts.component.js.map
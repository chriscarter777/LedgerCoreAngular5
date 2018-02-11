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
var AccountListComponent = /** @class */ (function () {
    function AccountListComponent(dataService) {
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; }, function (error) { return alert("there was an error getting accounts."); });
    };
    AccountListComponent.prototype.onDelete = function (id) {
        var _this = this;
        var result;
        var indextToDelete = this.accounts.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.accounts[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.accounts[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteAccount(id).subscribe(function (result) {
                if (result === null) {
                    alert("There was a problem deleting.");
                }
                else {
                    _this.accounts.splice(indextToDelete, 1);
                }
            }, function (error) { return alert("There was a problem deleting."); });
        }
        ;
    };
    AccountListComponent.prototype.onAdd = function (newAccount) {
        var _this = this;
        var result;
        console.log("onAdd received from accountAdd: " + JSON.stringify(newAccount));
        this.dataService.addAccount(newAccount).subscribe(function (result) {
            console.log("onAdd received from data.service: " + result);
            if (result === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.accounts.push(result);
            }
        }, function (error) { return alert("There was a problem adding."); });
    };
    AccountListComponent.prototype.onUpdate = function (editAccount) {
        var _this = this;
        var result;
        this.dataService.updateAccount(editAccount).subscribe(function (result) {
            if (result === null) {
                alert("There was a problem updating.");
            }
            else {
                _this.accounts[0] = result;
            }
        }, function (error) { return alert("There was a problem updating."); });
    };
    AccountListComponent = __decorate([
        core_1.Component({
            selector: 'account-list',
            templateUrl: './accountList.component.html',
            styleUrls: ['./accountList.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AccountListComponent);
    return AccountListComponent;
}());
exports.AccountListComponent = AccountListComponent;
//# sourceMappingURL=accountList.component.js.map
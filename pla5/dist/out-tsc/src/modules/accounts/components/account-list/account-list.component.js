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
        var _this = this;
        this.dataService = dataService;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
        this.dataService.accountAdded.subscribe(function (data) {
            console.log("accountAdded received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem adding.");
            }
            else {
                _this.accounts.push(data);
            }
        }, function (error) { return alert("There was a problem adding."); });
        this.dataService.accountDeleted.subscribe(function (data) {
            console.log("accountDeleted received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem deleting.");
            }
            else {
                var indextToDelete = _this.accounts.findIndex(function (element) { return element.id === data.id; });
                _this.accounts.splice(indextToDelete, 1);
            }
        }, function (error) { return alert("There was a problem deleting."); });
        this.dataService.accountUpdated.subscribe(function (data) {
            console.log("accountUpdated received from data.service: " + JSON.stringify(data));
            if (data === null) {
                alert("There was a problem updating.");
            }
            else {
                var indexToUpdate = _this.accounts.findIndex(function (element) { return element.id == data.id; });
                _this.accounts[indexToUpdate] = data;
            }
        }, function (error) { return alert("There was a problem updating."); });
    } //ctor
    AccountListComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    AccountListComponent.prototype.getAccounts = function () {
        var _this = this;
        this.dataService.getAccounts().subscribe(function (accounts) { return _this.accounts = accounts; }, function (error) { return alert("there was an error getting accounts."); });
    };
    AccountListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.accounts.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.accounts[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.accounts[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deleteAccount(id);
        }
        ;
    };
    AccountListComponent = __decorate([
        core_1.Component({
            selector: 'account-list',
            templateUrl: './account-list.component.html',
            styleUrls: ['./account-list.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AccountListComponent);
    return AccountListComponent;
}()); //class
exports.AccountListComponent = AccountListComponent;
//# sourceMappingURL=account-list.component.js.map
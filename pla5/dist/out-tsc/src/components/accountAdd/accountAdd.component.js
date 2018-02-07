"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AccountAddComponent = /** @class */ (function () {
    function AccountAddComponent() {
        this.debit = true;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountAddComponent.prototype.handleDebitButton = function () {
        this.debit = !this.debit;
    };
    AccountAddComponent = __decorate([
        core_1.Component({
            selector: 'account-add',
            templateUrl: './accountAdd.component.html',
            styleUrls: ['./accountAdd.component.css']
        })
    ], AccountAddComponent);
    return AccountAddComponent;
}());
exports.AccountAddComponent = AccountAddComponent;
//# sourceMappingURL=accountAdd.component.js.map
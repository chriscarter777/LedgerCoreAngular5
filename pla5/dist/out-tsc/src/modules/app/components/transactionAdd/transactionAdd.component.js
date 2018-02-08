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
var TransactionAddComponent = /** @class */ (function () {
    function TransactionAddComponent() {
        this.add = new core_1.EventEmitter();
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    TransactionAddComponent.prototype.ngOnInit = function () {
        this.newTransaction = { id: null, amount: 0, category: 0, crAcct: 0, date: '', drAcct: 0, tax: false, };
    };
    TransactionAddComponent.prototype.onSubmit = function () {
        this.add.emit(this.newTransaction);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TransactionAddComponent.prototype, "add", void 0);
    TransactionAddComponent = __decorate([
        core_1.Component({
            selector: 'transaction-add',
            templateUrl: './transactionAdd.component.html',
            styleUrls: ['./transactionAdd.component.css']
        })
    ], TransactionAddComponent);
    return TransactionAddComponent;
}());
exports.TransactionAddComponent = TransactionAddComponent;
//# sourceMappingURL=transactionAdd.component.js.map
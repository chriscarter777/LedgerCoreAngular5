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
var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent() {
        this.update = new core_1.EventEmitter();
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionEditComponent.prototype.handleTaxButton = function () {
        this.editTransaction.tax = !this.editTransaction.tax;
    };
    TransactionEditComponent.prototype.onSubmit = function () {
        this.update.emit(this.editTransaction);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TransactionEditComponent.prototype, "editTransaction", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TransactionEditComponent.prototype, "update", void 0);
    TransactionEditComponent = __decorate([
        core_1.Component({
            selector: 'transaction-edit',
            templateUrl: './transactionEdit.component.html',
            styleUrls: ['./transactionEdit.component.css']
        })
    ], TransactionEditComponent);
    return TransactionEditComponent;
}());
exports.TransactionEditComponent = TransactionEditComponent;
//# sourceMappingURL=transactionEdit.component.js.map
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
var PayeeListComponent = /** @class */ (function () {
    function PayeeListComponent(dataService) {
        this.dataService = dataService;
    } //ctor
    PayeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.payees.subscribe(function (payees) { return _this.payees = payees; });
    };
    PayeeListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.payees.findIndex(function (element) { return element.id === id; });
        var nameToDelete = this.payees[indextToDelete].name;
        var confirmation = confirm('are you sure you want to delete ' + this.payees[indextToDelete].name + '?');
        if (confirmation) {
            this.dataService.deletePayee(id);
        }
        ;
    };
    PayeeListComponent = __decorate([
        core_1.Component({
            selector: 'payee-list',
            templateUrl: './payee-list.component.html',
            styleUrls: ['./payee-list.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], PayeeListComponent);
    return PayeeListComponent;
}());
exports.PayeeListComponent = PayeeListComponent;
//# sourceMappingURL=payee-list.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var transaction_add_component_1 = require("./components/transaction-add/transaction-add.component");
var transaction_edit_component_1 = require("./components/transaction-edit/transaction-edit.component");
var transaction_list_component_1 = require("./components/transaction-list/transaction-list.component");
var data_service_1 = require("../shared/data.service");
var transactions_routing_module_1 = require("./transactions.routing.module");
var TransactionsModule = /** @class */ (function () {
    function TransactionsModule() {
    }
    TransactionsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                transactions_routing_module_1.TransactionRoutingModule
            ],
            declarations: [
                transaction_add_component_1.TransactionAddComponent,
                transaction_edit_component_1.TransactionEditComponent,
                transaction_list_component_1.TransactionListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], TransactionsModule);
    return TransactionsModule;
}());
exports.TransactionsModule = TransactionsModule;
//# sourceMappingURL=transactions.module.js.map
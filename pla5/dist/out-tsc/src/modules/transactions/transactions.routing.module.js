"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var transaction_add_component_1 = require("./components/transaction-add/transaction-add.component");
var transaction_edit_component_1 = require("./components/transaction-edit/transaction-edit.component");
var transaction_list_component_1 = require("./components/transaction-list/transaction-list.component");
var transactionsRoutes = [
    {
        path: 'transactions',
        component: transaction_list_component_1.TransactionListComponent,
        children: [
            { path: 'transaction-add', component: transaction_add_component_1.TransactionAddComponent },
            { path: 'transaction-edit/:id', component: transaction_edit_component_1.TransactionEditComponent }
        ]
    }
];
var TransactionRoutingModule = /** @class */ (function () {
    function TransactionRoutingModule() {
    }
    TransactionRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(transactionsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], TransactionRoutingModule);
    return TransactionRoutingModule;
}());
exports.TransactionRoutingModule = TransactionRoutingModule;
//# sourceMappingURL=transactions.routing.module.js.map
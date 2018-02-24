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
var report_account_component_1 = require("./components/report-account/report-account.component");
var report_cashflow_component_1 = require("./components/report-cashflow/report-cashflow.component");
var report_category_component_1 = require("./components/report-category/report-category.component");
var report_expense_component_1 = require("./components/report-expense/report-expense.component");
var report_income_component_1 = require("./components/report-income/report-income.component");
var report_list_component_1 = require("./components/report-list/report-list.component");
var report_payee_component_1 = require("./components/report-payee/report-payee.component");
var reportsRoutes = [
    {
        path: 'reports',
        component: report_list_component_1.ReportListComponent,
        children: [
            {
                path: 'report-account',
                component: report_account_component_1.ReportAccountComponent,
            },
            {
                path: 'report-cashflow',
                component: report_cashflow_component_1.ReportCashflowComponent
            },
            {
                path: 'report-category',
                component: report_category_component_1.ReportCategoryComponent
            },
            {
                path: 'report-expense',
                component: report_expense_component_1.ReportExpenseComponent
            },
            {
                path: 'report-income',
                component: report_income_component_1.ReportIncomeComponent
            },
            {
                path: 'report-payee',
                component: report_payee_component_1.ReportPayeeComponent
            }
        ]
    }
];
var ReportRoutingModule = /** @class */ (function () {
    function ReportRoutingModule() {
    }
    ReportRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(reportsRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], ReportRoutingModule);
    return ReportRoutingModule;
}());
exports.ReportRoutingModule = ReportRoutingModule;
//# sourceMappingURL=reports.routing.module.js.map
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
var report_account_component_1 = require("./components/report-account/report-account.component");
var report_cashflow_component_1 = require("./components/report-cashflow/report-cashflow.component");
var report_category_component_1 = require("./components/report-category/report-category.component");
var report_expense_component_1 = require("./components/report-expense/report-expense.component");
var report_income_component_1 = require("./components/report-income/report-income.component");
var report_list_component_1 = require("./components/report-list/report-list.component");
var report_payee_component_1 = require("./components/report-payee/report-payee.component");
var data_service_1 = require("../shared/data.service");
var reports_routing_module_1 = require("./reports.routing.module");
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                reports_routing_module_1.ReportRoutingModule
            ],
            declarations: [
                report_account_component_1.ReportAccountComponent,
                report_cashflow_component_1.ReportCashflowComponent,
                report_category_component_1.ReportCategoryComponent,
                report_expense_component_1.ReportExpenseComponent,
                report_income_component_1.ReportIncomeComponent,
                report_list_component_1.ReportListComponent,
                report_payee_component_1.ReportPayeeComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], ReportsModule);
    return ReportsModule;
}());
exports.ReportsModule = ReportsModule;
//# sourceMappingURL=reports.module.js.map
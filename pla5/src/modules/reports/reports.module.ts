import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ReportAccountComponent } from './components/report-account/report-account.component';
import { ReportCashflowComponent } from './components/report-cashflow/report-cashflow.component';
import { ReportCategoryComponent } from './components/report-category/report-category.component';
import { ReportExpenseComponent } from './components/report-expense/report-expense.component';
import { ReportIncomeComponent } from './components/report-income/report-income.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportPayeeComponent } from './components/report-payee/report-payee.component';

import { DataService } from '../shared/data.service'

import { ReportRoutingModule } from './reports.routing.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReportRoutingModule
    ],
    declarations: [
        ReportAccountComponent,
        ReportCashflowComponent,
        ReportCategoryComponent,
        ReportExpenseComponent,
        ReportIncomeComponent,
        ReportListComponent,
        ReportPayeeComponent
    ],
    providers: [DataService]
})
export class ReportsModule { }

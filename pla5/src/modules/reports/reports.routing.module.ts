import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportAccountComponent } from './components/report-account/report-account.component';
import { ReportCashflowComponent } from './components/report-cashflow/report-cashflow.component';
import { ReportCategoryComponent } from './components/report-category/report-category.component';
import { ReportExpenseComponent } from './components/report-expense/report-expense.component';
import { ReportIncomeComponent } from './components/report-income/report-income.component';
import { ReportListComponent } from './components/report-list/report-list.component';
import { ReportPayeeComponent } from './components/report-payee/report-payee.component';

const reportsRoutes: Routes = [
    {
        path: 'reports',
        component: ReportListComponent,
        children: [
            {
                path: 'report-account',
                component: ReportAccountComponent,
            },
            {
                path: 'report-cashflow',
                component: ReportCashflowComponent
            },
            {
                path: 'report-category',
                component: ReportCategoryComponent
            },
            {
                path: 'report-expense',
                component: ReportExpenseComponent
            },
            {
                path: 'report-income',
                component: ReportIncomeComponent
            },
            {
                path: 'report-payee',
                component: ReportPayeeComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(reportsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ReportRoutingModule { }

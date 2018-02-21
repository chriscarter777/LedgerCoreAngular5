import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PayeeListComponent } from './components/payee-list/payee-list.component';

const payeesRoutes: Routes = [
    {
        path: 'payees',
        component: PayeeListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(payeesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PayeeRoutingModule { }

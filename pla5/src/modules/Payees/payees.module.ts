import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PayeeListComponent } from './components/payee-list/payee-list.component';

import { DataService } from '../shared/data.service'

import { PayeeRoutingModule } from './payees.routing.module'

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PayeeRoutingModule
    ],
    declarations: [
        PayeeListComponent
    ],
    providers: [DataService]
})
export class PayeesModule { }

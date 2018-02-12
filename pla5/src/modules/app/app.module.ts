import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DataService } from '../shared/data.service'

import { AccountAddComponent } from './components/accountAdd/accountAdd.component';
import { AccountEditComponent } from './components/accountEdit/accountEdit.component';
import { AccountListComponent } from './components/accountList/accountList.component';
import { AppComponent } from './components/app/app.component';
import { CategoryListComponent } from './components/categoryList/categoryList.component';
import { CategoryAddComponent } from './components/categoryAdd/categoryAdd.component';
import { CategoryEditComponent } from './components/categoryEdit/categoryEdit.component';
import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { PageNotFoundComponent } from './components/notFound/not-found.component';
import { TransactionAddComponent } from './components/transactionAdd/transactionAdd.component';
import { TransactionEditComponent } from './components/transactionEdit/transactionEdit.component';
import { TransactionListComponent } from './components/transactionList/transactionlist.component';
import { UserListComponent } from './components/userList/userList.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    PageNotFoundComponent,

    AccountAddComponent,
    AccountEditComponent,
    AccountListComponent,

    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,

    TransactionAddComponent,
    TransactionEditComponent,
    TransactionListComponent,

    UserListComponent
  ],

  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    DataService
  ],
  //set entry point
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}


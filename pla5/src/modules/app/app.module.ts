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
import { TransactionAddComponent } from './components/transactionAdd/transactionAdd.component';
import { TransactionEditComponent } from './components/transactionEdit/transactionEdit.component';
import { TransactionListComponent } from './components/transactionList/transactionlist.component';
import { UserListComponent } from './components/userList/userList.component';

@NgModule({
//make non-module items available
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,

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
    //import other modules
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },

      {
        path: 'accounts',
        component: AccountListComponent,
        children: [
          {
            path: 'account-add', component: AccountAddComponent },
          { path: 'account-edit/:id', component: AccountEditComponent }
        ]
      },

      {
        path: 'categories',
        component: CategoryListComponent,
        children: [
          { path: 'category-add', component: CategoryAddComponent },
          { path: 'category-edit/:id', component: CategoryEditComponent }
        ]
     },

      {
        path: 'transactions',
        component: TransactionListComponent,
        children: [
          { path: 'transaction-add', component: TransactionAddComponent },
          { path: 'transaction-edit/:id', component: TransactionEditComponent }
        ]
     },

      { path: 'users', component: UserListComponent },
      { path: '**', redirectTo: 'home' }
    ])
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


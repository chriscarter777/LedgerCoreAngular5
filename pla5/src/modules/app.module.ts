import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DataService } from '../data/service'

import { AppComponent } from '../components/app/app.component';
import { NavMenuComponent } from '../components/navmenu/navmenu.component';
import { HomeComponent } from '../components/home/home.component';
import { AccountAddComponent } from '../components/accountAdd/accountAdd.component';
import { AccountEditComponent } from '../components/accountEdit/accountEdit.component';
import { AccountItemComponent } from '../components/accountItem/accountItem.component';
import { AccountsComponent } from '../components/accounts/accounts.component';
import { CategoriesComponent } from '../components/categories/categories.component';
import { CategoryAddComponent } from '../components/categoryAdd/categoryAdd.component';
import { CategoryEditComponent } from '../components/categoryEdit/categoryEdit.component';
import { CategoryItemComponent } from '../components/categoryItem/categoryItem.component';
import { TransactionAddComponent } from '../components/transactionAdd/transactionAdd.component';
import { TransactionEditComponent } from '../components/transactionEdit/transactionEdit.component';
import { TransactionItemComponent } from '../components/transactionItem/transactionItem.component';
import { TransactionsComponent } from '../components/transactions/transactions.component';
import { UserItemComponent } from '../components/userItem/userItem.component';
import { UsersComponent } from '../components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,

    AccountAddComponent,
    AccountEditComponent,
    AccountItemComponent,
    AccountsComponent,

    CategoriesComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryItemComponent,

    TransactionAddComponent,
    TransactionEditComponent,
    TransactionItemComponent,
    TransactionsComponent,

    UserItemComponent,
    UsersComponent  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },

      { path: 'account-add', component: AccountAddComponent },
      { path: 'account-edit', component: AccountEditComponent },
      { path: 'account-item', component: AccountItemComponent },
      { path: 'accounts', component: AccountsComponent },

      { path: 'category-add', component: CategoryAddComponent },
      { path: 'category-edit', component: CategoryEditComponent },
      { path: 'category-item', component: CategoryEditComponent },
      { path: 'categories', component: CategoriesComponent },

      { path: 'transaction-add', component: TransactionAddComponent },
      { path: 'transaction-edit', component: TransactionEditComponent },
      { path: 'transaction-item', component: TransactionItemComponent },
      { path: 'transactions', component: TransactionsComponent },

      { path: 'user-item', component: UserItemComponent },
      { path: 'users', component: UsersComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}


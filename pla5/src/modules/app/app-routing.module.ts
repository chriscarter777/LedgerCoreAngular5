import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { PageNotFoundComponent } from './components/notFound/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {
    path: 'accounts',
    component: AccountListComponent,
    children: [
      {
        path: 'account-add', component: AccountAddComponent
      },
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
  { path: 'Home/Main', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // for debugging
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

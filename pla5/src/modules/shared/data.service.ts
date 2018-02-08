import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account, Category, Transaction, User } from './interfaces'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{
    @Inject('BASE_URL') baseUrl: string;

    constructor(private http: HttpClient) { }

    getAccounts(): Observable<Account[]> {
      return this.http.get<Account[]>('/Accounts/AccountsAsync');
      //return this.http.get<Account[]>(this.baseUrl + 'Accounts//AccountsAsync');
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>('/Categories/CategoriesAsync');
    }

    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>('/Transactions/TransactionsAsync');
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>('/Users/GetUsersAsync');
    }
}

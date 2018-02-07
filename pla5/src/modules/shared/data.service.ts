import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account, Category, Transaction, User } from './interfaces'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{
    @Inject('BASE_URL') baseUrl: string;

    constructor(private http: HttpClient) { }

    getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.baseUrl + 'api/Accounts');
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.baseUrl + 'api/Categories');
    }

    getTransactions(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.baseUrl + 'api/Transactions');
    }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.baseUrl + 'api/Users');
    }
}
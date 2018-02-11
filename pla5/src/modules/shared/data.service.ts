import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Account, Category, Transaction, User } from './interfaces'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService{

    constructor(private http: HttpClient) { }

    // --Accounts--
    getAccounts(): Observable<Account[]> {
      console.log("data.service.getAccounts...");
      return this.http.get<Account[]>('/api/Accounts');
    }

    addAccount(accountToAdd: Account): Observable<Account> {
      console.log("data.service.addAccount received: " + JSON.stringify(accountToAdd));
      return this.http.post<Account>('/api/Accounts', accountToAdd);
    }

    deleteAccount(id: number): Observable<Account> {
      console.log("data.service.deleteAccount received: " + id);
      return this.http.delete<Account>('/api/Accounts/' + id);
    }
  
    updateAccount(accountToUpdate: Account): Observable<Account> {
      console.log("data.service.updateAccount received: " + JSON.stringify(accountToUpdate));
      return this.http.put<Account>('/api/Accounts', accountToUpdate);
    }


    // --Categories--
    getCategories(): Observable<Category[]> {
      return this.http.get<Category[]>('/api/Categories');
    }

    addCategory(categoryToAdd: Category): Observable<Category> {
      return this.http.post<Category>('/api/Categories', categoryToAdd);
    }

    deleteCategory(id: number): Observable<Category> {
      return this.http.delete<Category>('/api/Categories/' + id);
    }

    updateCategory(categoryToUpdate: Category): Observable<Category> {
      return this.http.put<Category>('/api/Categories', categoryToUpdate);
    }


    // --Transactions--
    getTransactions(): Observable<Transaction[]> {
      return this.http.get<Transaction[]>('/api/Transactions');
    }

    addTransaction(transactionToAdd: Transaction): Observable<Transaction> {
      return this.http.post<Transaction>('/api/Transactions', transactionToAdd);
    }

    deleteTransaction(id: number): Observable<Transaction> {
      return this.http.delete<Transaction>('/api/Transactions/' + id);
    }

    updateTransaction(transactionToUpdate: Transaction): Observable<Transaction> {
      return this.http.put<Transaction>('/api/Transactions', transactionToUpdate);
    }


    // --Users--
    getUsers(): Observable<User[]> {
      return this.http.get<User[]>('/api/Users');
    }

    makeAdmin(id: string): Observable<HttpResponse<any>> {
      return this.http.put<HttpResponse<any>>('/api/Users/Admin/' + id, id)
    }

    unmakeAdmin(id: string): Observable<HttpResponse<any>> {
      return this.http.put<HttpResponse<any>>('/api/Users/NoAdmin/' + id, id);
    }

    resetPassword(id: string, newPassword: string): Observable<HttpResponse<any>> {
      return this.http.put<HttpResponse<any>>('/api/Users/Reset' + id, newPassword);
    }

    deleteUser(id: string): Observable<User> {
      return this.http.delete<User>('/api/Users' + id);
    }
}

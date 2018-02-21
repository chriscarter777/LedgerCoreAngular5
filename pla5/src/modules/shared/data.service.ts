//This class is responsible for all interaction with the data API (a .NET Core WebAPI, which in turn interacts with a repository)
//Data collections are exposed as observable BehaviorSubjects
//It also serves as the central client-side data store ("single source of truth")

import { Inject, Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Account, Category, Payee, Transaction, User } from './interfaces';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    //Collections
    private _accounts: Account[];
    private accountsSource = new BehaviorSubject<Account[]>(this._accounts);
    accounts = this.accountsSource.asObservable();

    private _acctAsset: Account[];
    private acctAssetSource = new BehaviorSubject<Account[]>(this._acctAsset);
    acctAsset = this.acctAssetSource.asObservable();

    private _acctLiability: Account[];
    private acctLiabilitySource = new BehaviorSubject<Account[]>(this._acctLiability);
    acctLiability = this.acctLiabilitySource.asObservable();

    private _categories: Category[];
    private categoriesSource = new BehaviorSubject<Category[]>(this._categories);
    categories = this.categoriesSource.asObservable();

    private _catExpense: Category[];
    private catExpenseSource = new BehaviorSubject<Category[]>(this._catExpense);
    catExpense = this.catExpenseSource.asObservable();

    private _catIncome: Category[];
    private catIncomeSource = new BehaviorSubject<Category[]>(this._catIncome);
    catIncome = this.catIncomeSource.asObservable();

    private _catOther: Category[];
    private catOtherSource = new BehaviorSubject<Category[]>(this._catOther);
    catOther = this.catOtherSource.asObservable();

    private _payees: Payee[];
    private payeesSource = new BehaviorSubject<Payee[]>(this._payees);
    payees = this.payeesSource.asObservable();

    private _transactions: Transaction[];
    private transactionsSource = new BehaviorSubject<Transaction[]>(this._transactions);
    transactions = this.transactionsSource.asObservable();

    private _users: User[];
    private usersSource = new BehaviorSubject<User[]>(this._users);
    users = this.usersSource.asObservable();

    constructor(private http: HttpClient) {
        console.log('----dataservice initializing')
        this.getAccounts()
        this.getCategories();
        this.getPayees();
        this.getTransactions();
        this.getUsers();
    }  //ctor


    // ---PUBLIC METHODS ---
    // --Accounts--
    public addAccount(accountToAdd: Account) {
        const promise = new Promise<Account>((resolve, reject) => {
            this.http.post<Account>('/api/Accounts', accountToAdd).subscribe(
                account => {
                    resolve(account);
                },
                error => {
                    reject(alert("there was an error adding account."));
                }
            )
        });
        promise.then((result) => {
            this._accounts.push(result);
            this._accounts.sort(this.accountComparator);
            this.accountsSource.next(this._accounts);

            this._acctAsset.push(result);
            this._acctAsset.sort(this.accountComparator);
            this.acctAssetSource.next(this._acctAsset);

            this._acctLiability.push(result);
            this._acctLiability.sort(this.accountComparator);
            this.acctLiabilitySource.next(this._acctLiability);
        })
    }  //addAccount

    public deleteAccount(id: number) {
        const promise = new Promise<Account>((resolve, reject) => {
            this.http.delete<Account>('/api/Accounts/' + id).subscribe(
                account => {
                    resolve(account);
                },
                error => {
                    reject(alert("there was an error deleting account."));
                }
            )
        });
        promise.then((result) => {
            //remove from accounts
            var indexToDelete = this._accounts.findIndex((element) => element.id === result.id);
            this._accounts.splice(indexToDelete, 1);
            this.accountsSource.next(this._accounts);

            //remove from acctAsset
            var aaIdx = this._acctAsset.indexOf(result);
            if (aaIdx !== -1) {
                this._acctAsset.splice(aaIdx, 1);
            }
            this.acctAssetSource.next(this._acctAsset);

            //remove from acctLiability
            var alIdx = this._acctLiability.indexOf(result);
            if (alIdx !== -1) {
                this._acctLiability.splice(alIdx, 1);
            }
            this.acctLiabilitySource.next(this._acctLiability);
        })
    }  //deleteAccount

    public Account(id) {
        return this._accounts.find(x => x.id === id);
    }  //Account

    public Accounts() {
        return this._accounts;
    }  //Accounts

    public AssetAccounts() {
        return this._acctAsset;
    }  //AssetAccounts

    public LiabilityAccounts() {
        return this._acctLiability;
    }  //LiabilityAccounts

    public updateAccount(accountToUpdate: Account) {
        const promise = new Promise<Account>((resolve, reject) => {
            this.http.put<Account>('/api/Accounts', accountToUpdate).subscribe(
                account => {
                    resolve(account);
                },
                error => {
                    reject(alert("there was an error updating account."));
                }
            )
        });
        promise.then((result) => {
            //update accounts
            var indexToUpdate = this._accounts.findIndex((element) => element.id == result.id);
            this._accounts[indexToUpdate] = result;
            this._accounts.sort(this.accountComparator);
            this.accountsSource.next(this._accounts);

            //update acctAsset
            var aaMatch = this._acctAsset.find(x => x.id === result.id);
            if (aaMatch) {
                var aaIdx = this._acctAsset.indexOf(aaMatch);
                this._acctAsset[aaIdx] = result;
                this._acctAsset.sort(this.accountComparator);
                this.acctAssetSource.next(this._acctAsset);
            }
            //update acctLiability
            var alMatch = this._acctLiability.find(x => x.id === result.id);
            if (alMatch) {
                var alIdx = this._acctLiability.indexOf(aaMatch);
                this._acctLiability[alIdx] = result;
                this._acctLiability.sort(this.accountComparator);
                this.acctLiabilitySource.next(this._acctLiability);
            }
        })
    }  //updateAccount


    // --Categories--
    public addCategory(categoryToAdd: Category) {
        const promise = new Promise<Category>((resolve, reject) => {
            this.http.post<Category>('/api/Categories', categoryToAdd).subscribe(
                category => {
                    resolve(category);
                },
                error => {
                    reject(alert("there was an error adding category."));
                }
            )
        });
        promise.then((result) => {
            this._categories.push(result);
            this._categories.sort(this.categoryComparator);
            this.categoriesSource.next(this._categories);

            this._catExpense.push(result);
            this._catExpense.sort(this.categoryComparator);
            this.catExpenseSource.next(this._catExpense);

            this._catIncome.push(result);
            this._catIncome.sort(this.categoryComparator);
            this.catIncomeSource.next(this._catIncome);

            this._catOther.push(result);
            this._catOther.sort(this.categoryComparator);
            this.catOtherSource.next(this._catOther);
        })
    }  //addCategory

    public deleteCategory(id: number) {
        const promise = new Promise<Category>((resolve, reject) => {
            this.http.delete<Category>('/api/Categories/' + id).subscribe(
                category => {
                    resolve(category);
                },
                error => {
                    reject(alert("there was an error deleting category."));
                }
            )
        });
        promise.then((result) => {
            //remove from categories
            var indexToDelete = this._categories.findIndex((element) => element.id === result.id);
            this._categories.splice(indexToDelete, 1);
            this.categoriesSource.next(this._categories);

            //remove from catExpense
            var ceIdx = this._catExpense.indexOf(result);
            if (ceIdx !== -1) {
                this._catExpense.splice(ceIdx, 1);
                this.catExpenseSource.next(this._catExpense);
            }
            //remove from catIncome
            var ciIdx = this._catIncome.indexOf(result);
            if (ciIdx !== -1) {
                this._catIncome.splice(ciIdx, 1);
                this.catIncomeSource.next(this._catIncome);
            }
            //remove from catOther
            var coIdx = this._catOther.indexOf(result);
            if (coIdx !== -1) {
                this._catOther.splice(coIdx, 1);
                this.catOtherSource.next(this._catOther);
            }
        })
    }  //deleteCategory

    public Category(id) {
        return this._categories.find(x => x.id === id);
    }  //Category

    public Categories() {
        return this._categories;
    }  //Categories

    public ExpenseCategories() {
        return this._catExpense;
    }  //ExpenseCategories

    public IncomeCategories() {
        return this._catIncome;
    }  //IncomeCategories

    public OtherCategories() {
        return this._catOther;
    }  //OtherCategories

    public updateCategory(categoryToUpdate: Category) {
        const promise = new Promise<Category>((resolve, reject) => {
            this.http.put<Category>('/api/Categories', categoryToUpdate).subscribe(
                category => {
                    resolve(category);
                },
                error => {
                    reject(alert("there was an error updating category."));
                }
            )
        });
        promise.then((result) => {
            //update categories
            var indexToUpdate = this._categories.findIndex((element) => element.id == result.id);
            this._categories[indexToUpdate] = result;
            this._categories.sort(this.categoryComparator);
            this.categoriesSource.next(this._categories);

            //update catExpense
            var aaMatch = this._catExpense.find(x => x.id === result.id);
            if (aaMatch) {
                var aaIdx = this._catExpense.indexOf(aaMatch);
                this._catExpense[aaIdx] = result;
                this._catExpense.sort(this.categoryComparator);
                this.catExpenseSource.next(this._catExpense);
            }
            //update catIncome
            var aaMatch = this._catIncome.find(x => x.id === result.id);
            if (aaMatch) {
                var aaIdx = this._catIncome.indexOf(aaMatch);
                this._catIncome[aaIdx] = result;
                this._catIncome.sort(this.categoryComparator);
                this.catIncomeSource.next(this._catIncome);
            }
            //update catOther
            var aaMatch = this._catOther.find(x => x.id === result.id);
            if (aaMatch) {
                var aaIdx = this._catOther.indexOf(aaMatch);
                this._catOther[aaIdx] = result;
                this._catOther.sort(this.categoryComparator);
                this.catOtherSource.next(this._catOther);
            }
        })
    }  //updateCategory


    // --Payees--
    public addPayee(payeeToAdd: Payee) {
        const promise = new Promise<Payee>((resolve, reject) => {
            this.http.post<Payee>('/api/Payees', payeeToAdd).subscribe(
                payee => {
                    resolve(payee);
                },
                error => {
                    reject(alert("there was an error adding payee."));
                }
            )
        });
        promise.then((result) => {
            this._payees.push(result);
            this._payees.sort(this.payeeComparator);
            this.payeesSource.next(this._payees);
        })
    }  //addPayee

    public deletePayee(id: number) {
        const promise = new Promise<Payee>((resolve, reject) => {
            this.http.delete<Payee>('/api/Accounts/' + id).subscribe(
                payee => {
                    resolve(payee);
                },
                error => {
                    reject(alert("there was an error deleting payee."));
                }
            )
        });
        promise.then((result) => {
            var indexToDelete = this._payees.findIndex((element) => element.id === result.id);
            this._payees.splice(indexToDelete, 1);
            this.payeesSource.next(this._payees);
        })
    }  //deletePayee

    public Payee(id) {
        return this._payees.find(x => x.id === id);
    }  //Payee

    public Payees() {
        return this._payees;
    }  //Payees

    public updatePayee(payeeToUpdate: Payee) {
        const promise = new Promise<Payee>((resolve, reject) => {
            this.http.put<Payee>('/apiPayees', payeeToUpdate).subscribe(
                payee => {
                    resolve(payee);
                },
                error => {
                    reject(alert("there was an error updating payee."));
                }
            )
        });
        promise.then((result) => {
            var indexToUpdate = this._payees.findIndex((element) => element.id == result.id);
            this._payees[indexToUpdate] = result;
            this._payees.sort(this.payeeComparator);
            this.payeesSource.next(this._payees);
        })
    }  //updatePayee


    // --Transactions--
    public addTransaction(transactionToAdd: Transaction) {
        const promise = new Promise<Transaction>((resolve, reject) => {
            this.http.post<Transaction>('/api/Payees', transactionToAdd).subscribe(
                transaction => {
                    resolve(transaction);
                },
                error => {
                    reject(alert("there was an error adding transaction."));
                }
            )
        });
        promise.then((result) => {
            this._transactions.push(result);
            this._transactions.sort(this.transactionComparator);
            this.transactionsSource.next(this._transactions);
        })
    }  //addTransaction

    public deleteTransaction(id: number) {
        const promise = new Promise<Transaction>((resolve, reject) => {
            this.http.delete<Transaction>('/api/Transactions/' + id).subscribe(
                transaction => {
                    resolve(transaction);
                },
                error => {
                    reject(alert("there was an error deleting transaction."));
                }
            )
        });
        promise.then((result) => {
            var indextToDelete = this._transactions.findIndex((element) => element.id === result.id);
            this._transactions.splice(indextToDelete, 1);
            this.transactionsSource.next(this._transactions);
        })
    }  //deleteTransaction

    public Transaction(id) {
        return this._transactions.find(x => x.id === id);
    }  //Transaction

    public Transactions() {
        return this._transactions;
    }  //Transactions

    public updateTransaction(transactionToUpdate: Transaction) {
        const promise = new Promise<Transaction>((resolve, reject) => {
            this.http.put<Transaction>('/api/Transactions', transactionToUpdate).subscribe(
                transaction => {
                    resolve(transaction);
                },
                error => {
                    reject(alert("there was an error updating transaction."));
                }
            )
        });
        promise.then((result) => {
            var indexToUpdate = this._transactions.findIndex((element) => element.id == result.id);
            this._transactions[indexToUpdate] = result;
            this._transactions.sort(this.transactionComparator);
            this.transactionsSource.next(this._transactions);
        })
    }  //updateTransaction


    // --Users--
    public deleteUser(userName: string) {
        const promise = new Promise<User>((resolve, reject) => {
            this.http.delete<User>('/api/Users/' + userName).subscribe(
                user => {
                    resolve(user);
                },
                error => {
                    reject(alert("there was an error deleting user."));
                }
            )
        });
        promise.then((result) => {
            //remove from users
            var indexToDelete = this._users.findIndex((element) => element.id === result.id);
            this._users.splice(indexToDelete, 1);
            this.usersSource.next(this._users);
        })
    }  //deleteUser

    public User(id) {
        return this._users.find(x => x.id === id);
    }  //User

    public Users() {
        return this._users;
    }  //Users

    public makeAdmin(id: string) {
        const promise = new Promise((resolve, reject) => {
            this.http.put<HttpResponse<any>>('/api/Users/Admin/' + id, id).subscribe(
                user => {
                    resolve();
                },
                error => {
                    reject(alert("there was an error promoting user."));
                }
            )
        });
        promise.then((result) => {
            //update users
            var indexToUpdate = this._users.findIndex((element) => element.id === id);
            this._users[indexToUpdate].admin = true;
            this.usersSource.next(this._users);
        })
    }  //makeAdmin

    public resetPassword(id: string, newPassword: string) {
        const promise = new Promise((resolve, reject) => {
            this.http.put<HttpResponse<any>>('/api/Users/Reset/' + id, newPassword).subscribe(
                user => {
                    resolve();
                },
                error => {
                    reject(alert("there was an error resetting user password."));
                }
            )
        });
        promise.then((result) => {
            //nothing to do here--passwords not stored in the client
        })
    }  //resetPassword

    public unmakeAdmin(id: string) {
        const promise = new Promise((resolve, reject) => {
            this.http.put<HttpResponse<any>>('/api/Users/NoAdmin/' + id, id).subscribe(
                user => {
                    resolve();
                },
                error => {
                    reject(alert("there was an error demoting user."));
                }
            )
        });
        promise.then((result) => {
            //update users
            var indexToUpdate = this._users.findIndex((element) => element.id === id);
            this._users[indexToUpdate].admin = false;
            this.usersSource.next(this._users);
        })
    }  //unmakeAdmin



    // ---PRIVATE METHODS ---
    private getAccounts() {
        const promise = new Promise<Account[]>((resolve, reject) => {
            this.http.get<Account[]>('/api/Accounts').subscribe(
                accounts => {
                    resolve(accounts);
                },
                error => {
                    reject(alert("there was an error getting accounts."));
                }
            )
        });
        promise.then((result) => {

            this._accounts = result;
            this._accounts.sort(this.accountComparator);
            this.accountsSource.next(this._accounts);


            this._acctAsset = result.filter((element) => element.acctType === "Asset");
            this._acctAsset.sort(this.accountComparator);
            this.acctAssetSource.next(this._acctAsset);

            this._acctLiability = result.filter((element) => element.acctType === "Liability");
            this._acctLiability.sort(this.accountComparator);
            this.acctLiabilitySource.next(this._acctLiability);
        })
    }  //getAccounts

    private getCategories() {
        const promise = new Promise<Category[]>((resolve, reject) => {
            this.http.get<Category[]>('/api/Categories').subscribe(
                categories => {
                    resolve(categories);
                },
                error => {
                    reject(alert("there was an error getting categories."));
                }
            )
        });
        promise.then((result) => {
            this._categories = result;
            this._categories.sort(this.categoryComparator);
            this.categoriesSource.next(this._categories);

            this._catExpense = result.filter((element) => element.type === "Expense");
            this._catExpense.sort(this.categoryComparator);
            this.catExpenseSource.next(this._catExpense);

            this._catIncome = result.filter((element) => element.type === "Income");
            this._catIncome.sort(this.categoryComparator);
            this.catIncomeSource.next(this._catIncome);

            this._catOther = result.filter((element) => element.type === "Other");
            this._catOther.sort(this.categoryComparator);
            this.catOtherSource.next(this._catOther);
        })
    }  //getCategories

    private getPayees() {
        const promise = new Promise<Payee[]>((resolve, reject) => {
            this.http.get<Payee[]>('/api/Payees').subscribe(
                payees => {
                    resolve(payees);
                },
                error => {
                    reject(alert("there was an error getting payees."));
                }
            )
        });
        promise.then((result) => {
            this._payees = result;
            this._payees.sort(this.payeeComparator);
            this.payeesSource.next(this._payees);
        })
    }  //getPayees

    private getTransactions() {
        const promise = new Promise<Transaction[]>((resolve, reject) => {
            this.http.get<Transaction[]>('/api/Transactions').subscribe(
                transactions => {
                    resolve(transactions);
                },
                error => {
                    reject(alert("there was an error getting transactions."));
                }
            )
        });
        promise.then((result) => {
            this._transactions = result;
            this._transactions.sort(this.transactionComparator);
            this.transactionsSource.next(this._transactions);
        })
    }  //getTransactions

    private getUsers() {
        const promise = new Promise<User[]>((resolve, reject) => {
            this.http.get<User[]>('/api/Users').subscribe(
                users => {
                    resolve(users);
                },
                error => {
                    reject(alert("there was an error getting users."));
                }
            )
        });
        promise.then((result) => {
            this._users = result;
            this._users.sort(this.userComparator);
            this.usersSource.next(this._users);
        })
    }  //getUsers

    private accountComparator(elementA: Account, elementB: Account) {
        if (elementA.name < elementB.name) return -1;
        if (elementA.name > elementB.name) return 1;
        return 0;
    }

    private categoryComparator(elementA: Category, elementB: Category) {
        if (elementA.name < elementB.name) return -1;
        if (elementA.name > elementB.name) return 1;
        return 0;
    }

    private payeeComparator(elementA: Payee, elementB: Payee) {
    if (elementA.name < elementB.name) return -1;
    if (elementA.name > elementB.name) return 1;
    return 0;
    }

    private transactionComparator(elementA: Transaction, elementB: Transaction) {
    if (elementA.date < elementB.date) return -1;
    if (elementA.date > elementB.date) return 1;
    return 0;
    }

    private userComparator(elementA: User, elementB: User){
    if (elementA.userName < elementB.userName) return -1;
    if (elementA.userName > elementB.userName) return 1;
    return 0;
}

}  //service

"use strict";
//This class is responsible for all interaction with the data API (a .NET Core WebAPI, which in turn interacts with a repository)
//Data collections are exposed as observable BehaviorSubjects
//It also serves as the central client-side data store ("single source of truth")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.accountsSource = new BehaviorSubject_1.BehaviorSubject(this._accounts);
        this.accounts = this.accountsSource.asObservable();
        this.acctAssetSource = new BehaviorSubject_1.BehaviorSubject(this._acctAsset);
        this.acctAsset = this.acctAssetSource.asObservable();
        this.acctLiabilitySource = new BehaviorSubject_1.BehaviorSubject(this._acctLiability);
        this.acctLiability = this.acctLiabilitySource.asObservable();
        this.categoriesSource = new BehaviorSubject_1.BehaviorSubject(this._categories);
        this.categories = this.categoriesSource.asObservable();
        this.catExpenseSource = new BehaviorSubject_1.BehaviorSubject(this._catExpense);
        this.catExpense = this.catExpenseSource.asObservable();
        this.catIncomeSource = new BehaviorSubject_1.BehaviorSubject(this._catIncome);
        this.catIncome = this.catIncomeSource.asObservable();
        this.catOtherSource = new BehaviorSubject_1.BehaviorSubject(this._catOther);
        this.catOther = this.catOtherSource.asObservable();
        this.payeesSource = new BehaviorSubject_1.BehaviorSubject(this._payees);
        this.payees = this.payeesSource.asObservable();
        this.transactionsSource = new BehaviorSubject_1.BehaviorSubject(this._transactions);
        this.transactions = this.transactionsSource.asObservable();
        this.usersSource = new BehaviorSubject_1.BehaviorSubject(this._users);
        this.users = this.usersSource.asObservable();
        console.log('----dataservice initializing');
        this.getAccounts();
        this.getCategories();
        this.getPayees();
        this.getTransactions();
        this.getUsers();
    } //ctor
    // ---PUBLIC METHODS ---
    // --Accounts--
    DataService.prototype.addAccount = function (accountToAdd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('/api/Accounts', accountToAdd).subscribe(function (account) {
                resolve(account);
            }, function (error) {
                reject(alert("there was an error adding account."));
            });
        });
        promise.then(function (result) {
            _this._accounts.push(result);
            _this._accounts.sort(_this.accountComparator);
            _this.accountsSource.next(_this._accounts);
            _this._acctAsset.push(result);
            _this._acctAsset.sort(_this.accountComparator);
            _this.acctAssetSource.next(_this._acctAsset);
            _this._acctLiability.push(result);
            _this._acctLiability.sort(_this.accountComparator);
            _this.acctLiabilitySource.next(_this._acctLiability);
        });
    }; //addAccount
    DataService.prototype.deleteAccount = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Accounts/' + id).subscribe(function (account) {
                resolve(account);
            }, function (error) {
                reject(alert("there was an error deleting account."));
            });
        });
        promise.then(function (result) {
            //remove from accounts
            var indexToDelete = _this._accounts.findIndex(function (element) { return element.id === result.id; });
            _this._accounts.splice(indexToDelete, 1);
            _this.accountsSource.next(_this._accounts);
            //remove from acctAsset
            var aaIdx = _this._acctAsset.indexOf(result);
            if (aaIdx !== -1) {
                _this._acctAsset.splice(aaIdx, 1);
            }
            _this.acctAssetSource.next(_this._acctAsset);
            //remove from acctLiability
            var alIdx = _this._acctLiability.indexOf(result);
            if (alIdx !== -1) {
                _this._acctLiability.splice(alIdx, 1);
            }
            _this.acctLiabilitySource.next(_this._acctLiability);
        });
    }; //deleteAccount
    DataService.prototype.Account = function (id) {
        return this._accounts.find(function (x) { return x.id === id; });
    }; //Account
    DataService.prototype.Accounts = function () {
        return this._accounts;
    }; //Accounts
    DataService.prototype.AssetAccounts = function () {
        return this._acctAsset;
    }; //AssetAccounts
    DataService.prototype.LiabilityAccounts = function () {
        return this._acctLiability;
    }; //LiabilityAccounts
    DataService.prototype.updateAccount = function (accountToUpdate) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Accounts', accountToUpdate).subscribe(function (account) {
                resolve(account);
            }, function (error) {
                reject(alert("there was an error updating account."));
            });
        });
        promise.then(function (result) {
            //update accounts
            var indexToUpdate = _this._accounts.findIndex(function (element) { return element.id == result.id; });
            _this._accounts[indexToUpdate] = result;
            _this._accounts.sort(_this.accountComparator);
            _this.accountsSource.next(_this._accounts);
            //update acctAsset
            var aaMatch = _this._acctAsset.find(function (x) { return x.id === result.id; });
            if (aaMatch) {
                var aaIdx = _this._acctAsset.indexOf(aaMatch);
                _this._acctAsset[aaIdx] = result;
                _this._acctAsset.sort(_this.accountComparator);
                _this.acctAssetSource.next(_this._acctAsset);
            }
            //update acctLiability
            var alMatch = _this._acctLiability.find(function (x) { return x.id === result.id; });
            if (alMatch) {
                var alIdx = _this._acctLiability.indexOf(aaMatch);
                _this._acctLiability[alIdx] = result;
                _this._acctLiability.sort(_this.accountComparator);
                _this.acctLiabilitySource.next(_this._acctLiability);
            }
        });
    }; //updateAccount
    // --Categories--
    DataService.prototype.addCategory = function (categoryToAdd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('/api/Categories', categoryToAdd).subscribe(function (category) {
                resolve(category);
            }, function (error) {
                reject(alert("there was an error adding category."));
            });
        });
        promise.then(function (result) {
            _this._categories.push(result);
            _this._categories.sort(_this.categoryComparator);
            _this.categoriesSource.next(_this._categories);
            _this._catExpense.push(result);
            _this._catExpense.sort(_this.categoryComparator);
            _this.catExpenseSource.next(_this._catExpense);
            _this._catIncome.push(result);
            _this._catIncome.sort(_this.categoryComparator);
            _this.catIncomeSource.next(_this._catIncome);
            _this._catOther.push(result);
            _this._catOther.sort(_this.categoryComparator);
            _this.catOtherSource.next(_this._catOther);
        });
    }; //addCategory
    DataService.prototype.deleteCategory = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Categories/' + id).subscribe(function (category) {
                resolve(category);
            }, function (error) {
                reject(alert("there was an error deleting category."));
            });
        });
        promise.then(function (result) {
            //remove from categories
            var indexToDelete = _this._categories.findIndex(function (element) { return element.id === result.id; });
            _this._categories.splice(indexToDelete, 1);
            _this.categoriesSource.next(_this._categories);
            //remove from catExpense
            var ceIdx = _this._catExpense.indexOf(result);
            if (ceIdx !== -1) {
                _this._catExpense.splice(ceIdx, 1);
                _this.catExpenseSource.next(_this._catExpense);
            }
            //remove from catIncome
            var ciIdx = _this._catIncome.indexOf(result);
            if (ciIdx !== -1) {
                _this._catIncome.splice(ciIdx, 1);
                _this.catIncomeSource.next(_this._catIncome);
            }
            //remove from catOther
            var coIdx = _this._catOther.indexOf(result);
            if (coIdx !== -1) {
                _this._catOther.splice(coIdx, 1);
                _this.catOtherSource.next(_this._catOther);
            }
        });
    }; //deleteCategory
    DataService.prototype.Category = function (id) {
        return this._categories.find(function (x) { return x.id === id; });
    }; //Category
    DataService.prototype.Categories = function () {
        return this._categories;
    }; //Categories
    DataService.prototype.ExpenseCategories = function () {
        return this._catExpense;
    }; //ExpenseCategories
    DataService.prototype.IncomeCategories = function () {
        return this._catIncome;
    }; //IncomeCategories
    DataService.prototype.OtherCategories = function () {
        return this._catOther;
    }; //OtherCategories
    DataService.prototype.updateCategory = function (categoryToUpdate) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Categories', categoryToUpdate).subscribe(function (category) {
                resolve(category);
            }, function (error) {
                reject(alert("there was an error updating category."));
            });
        });
        promise.then(function (result) {
            //update categories
            var indexToUpdate = _this._categories.findIndex(function (element) { return element.id == result.id; });
            _this._categories[indexToUpdate] = result;
            _this._categories.sort(_this.categoryComparator);
            _this.categoriesSource.next(_this._categories);
            //update catExpense
            var aaMatch = _this._catExpense.find(function (x) { return x.id === result.id; });
            if (aaMatch) {
                var aaIdx = _this._catExpense.indexOf(aaMatch);
                _this._catExpense[aaIdx] = result;
                _this._catExpense.sort(_this.categoryComparator);
                _this.catExpenseSource.next(_this._catExpense);
            }
            //update catIncome
            var aaMatch = _this._catIncome.find(function (x) { return x.id === result.id; });
            if (aaMatch) {
                var aaIdx = _this._catIncome.indexOf(aaMatch);
                _this._catIncome[aaIdx] = result;
                _this._catIncome.sort(_this.categoryComparator);
                _this.catIncomeSource.next(_this._catIncome);
            }
            //update catOther
            var aaMatch = _this._catOther.find(function (x) { return x.id === result.id; });
            if (aaMatch) {
                var aaIdx = _this._catOther.indexOf(aaMatch);
                _this._catOther[aaIdx] = result;
                _this._catOther.sort(_this.categoryComparator);
                _this.catOtherSource.next(_this._catOther);
            }
        });
    }; //updateCategory
    // --Payees--
    DataService.prototype.addPayee = function (payeeToAdd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('/api/Payees', payeeToAdd).subscribe(function (payee) {
                resolve(payee);
            }, function (error) {
                reject(alert("there was an error adding payee."));
            });
        });
        promise.then(function (result) {
            _this._payees.push(result);
            _this._payees.sort(_this.payeeComparator);
            _this.payeesSource.next(_this._payees);
        });
    }; //addPayee
    DataService.prototype.deletePayee = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Accounts/' + id).subscribe(function (payee) {
                resolve(payee);
            }, function (error) {
                reject(alert("there was an error deleting payee."));
            });
        });
        promise.then(function (result) {
            var indexToDelete = _this._payees.findIndex(function (element) { return element.id === result.id; });
            _this._payees.splice(indexToDelete, 1);
            _this.payeesSource.next(_this._payees);
        });
    }; //deletePayee
    DataService.prototype.Payee = function (id) {
        return this._payees.find(function (x) { return x.id === id; });
    }; //Payee
    DataService.prototype.Payees = function () {
        return this._payees;
    }; //Payees
    DataService.prototype.updatePayee = function (payeeToUpdate) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/apiPayees', payeeToUpdate).subscribe(function (payee) {
                resolve(payee);
            }, function (error) {
                reject(alert("there was an error updating payee."));
            });
        });
        promise.then(function (result) {
            var indexToUpdate = _this._payees.findIndex(function (element) { return element.id == result.id; });
            _this._payees[indexToUpdate] = result;
            _this._payees.sort(_this.payeeComparator);
            _this.payeesSource.next(_this._payees);
        });
    }; //updatePayee
    // --Transactions--
    DataService.prototype.addTransaction = function (transactionToAdd) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.post('/api/Transactions', transactionToAdd).subscribe(function (transaction) {
                resolve(transaction);
            }, function (error) {
                reject(alert("there was an error adding transaction."));
            });
        });
        promise.then(function (result) {
            _this._transactions.push(result);
            _this._transactions.sort(_this.transactionComparator);
            _this.transactionsSource.next(_this._transactions);
        });
    }; //addTransaction
    DataService.prototype.deleteTransaction = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Transactions/' + id).subscribe(function (transaction) {
                resolve(transaction);
            }, function (error) {
                reject(alert("there was an error deleting transaction."));
            });
        });
        promise.then(function (result) {
            var indextToDelete = _this._transactions.findIndex(function (element) { return element.id === result.id; });
            _this._transactions.splice(indextToDelete, 1);
            _this.transactionsSource.next(_this._transactions);
        });
    }; //deleteTransaction
    DataService.prototype.Transaction = function (id) {
        return this._transactions.find(function (x) { return x.id === id; });
    }; //Transaction
    DataService.prototype.Transactions = function () {
        return this._transactions;
    }; //Transactions
    DataService.prototype.updateTransaction = function (transactionToUpdate) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Transactions', transactionToUpdate).subscribe(function (transaction) {
                resolve(transaction);
            }, function (error) {
                reject(alert("there was an error updating transaction."));
            });
        });
        promise.then(function (result) {
            var indexToUpdate = _this._transactions.findIndex(function (element) { return element.id == result.id; });
            _this._transactions[indexToUpdate] = result;
            _this._transactions.sort(_this.transactionComparator);
            _this.transactionsSource.next(_this._transactions);
        });
    }; //updateTransaction
    // --Users--
    DataService.prototype.deleteUser = function (userName) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.delete('/api/Users/' + userName).subscribe(function (user) {
                resolve(user);
            }, function (error) {
                reject(alert("there was an error deleting user."));
            });
        });
        promise.then(function (result) {
            //remove from users
            var indexToDelete = _this._users.findIndex(function (element) { return element.id === result.id; });
            _this._users.splice(indexToDelete, 1);
            _this.usersSource.next(_this._users);
        });
    }; //deleteUser
    DataService.prototype.User = function (id) {
        return this._users.find(function (x) { return x.id === id; });
    }; //User
    DataService.prototype.Users = function () {
        return this._users;
    }; //Users
    DataService.prototype.makeAdmin = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Users/Admin/' + id, id).subscribe(function (user) {
                resolve();
            }, function (error) {
                reject(alert("there was an error promoting user."));
            });
        });
        promise.then(function (result) {
            //update users
            var indexToUpdate = _this._users.findIndex(function (element) { return element.id === id; });
            _this._users[indexToUpdate].admin = true;
            _this.usersSource.next(_this._users);
        });
    }; //makeAdmin
    DataService.prototype.resetPassword = function (id, newPassword) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Users/Reset/' + id, newPassword).subscribe(function (user) {
                resolve();
            }, function (error) {
                reject(alert("there was an error resetting user password."));
            });
        });
        promise.then(function (result) {
            //nothing to do here--passwords not stored in the client
        });
    }; //resetPassword
    DataService.prototype.unmakeAdmin = function (id) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.put('/api/Users/NoAdmin/' + id, id).subscribe(function (user) {
                resolve();
            }, function (error) {
                reject(alert("there was an error demoting user."));
            });
        });
        promise.then(function (result) {
            //update users
            var indexToUpdate = _this._users.findIndex(function (element) { return element.id === id; });
            _this._users[indexToUpdate].admin = false;
            _this.usersSource.next(_this._users);
        });
    }; //unmakeAdmin
    // ---PRIVATE METHODS ---
    DataService.prototype.getAccounts = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Accounts').subscribe(function (accounts) {
                resolve(accounts);
            }, function (error) {
                reject(alert("there was an error getting accounts."));
            });
        });
        promise.then(function (result) {
            _this._accounts = result;
            _this._accounts.sort(_this.accountComparator);
            _this.accountsSource.next(_this._accounts);
            _this._acctAsset = result.filter(function (element) { return element.acctType === "Asset"; });
            _this._acctAsset.sort(_this.accountComparator);
            _this.acctAssetSource.next(_this._acctAsset);
            _this._acctLiability = result.filter(function (element) { return element.acctType === "Liability"; });
            _this._acctLiability.sort(_this.accountComparator);
            _this.acctLiabilitySource.next(_this._acctLiability);
        });
    }; //getAccounts
    DataService.prototype.getCategories = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Categories').subscribe(function (categories) {
                resolve(categories);
            }, function (error) {
                reject(alert("there was an error getting categories."));
            });
        });
        promise.then(function (result) {
            _this._categories = result;
            _this._categories.sort(_this.categoryComparator);
            _this.categoriesSource.next(_this._categories);
            _this._catExpense = result.filter(function (element) { return element.type === "Expense"; });
            _this._catExpense.sort(_this.categoryComparator);
            _this.catExpenseSource.next(_this._catExpense);
            _this._catIncome = result.filter(function (element) { return element.type === "Income"; });
            _this._catIncome.sort(_this.categoryComparator);
            _this.catIncomeSource.next(_this._catIncome);
            _this._catOther = result.filter(function (element) { return element.type === "Other"; });
            _this._catOther.sort(_this.categoryComparator);
            _this.catOtherSource.next(_this._catOther);
        });
    }; //getCategories
    DataService.prototype.getPayees = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Payees').subscribe(function (payees) {
                resolve(payees);
            }, function (error) {
                reject(alert("there was an error getting payees."));
            });
        });
        promise.then(function (result) {
            _this._payees = result;
            _this._payees.sort(_this.payeeComparator);
            _this.payeesSource.next(_this._payees);
        });
    }; //getPayees
    DataService.prototype.getTransactions = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Transactions').subscribe(function (transactions) {
                resolve(transactions);
            }, function (error) {
                reject(alert("there was an error getting transactions."));
            });
        });
        promise.then(function (result) {
            _this._transactions = result;
            _this._transactions.sort(_this.transactionComparator);
            _this.transactionsSource.next(_this._transactions);
        });
    }; //getTransactions
    DataService.prototype.getUsers = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.http.get('/api/Users').subscribe(function (users) {
                resolve(users);
            }, function (error) {
                reject(alert("there was an error getting users."));
            });
        });
        promise.then(function (result) {
            _this._users = result;
            _this._users.sort(_this.userComparator);
            _this.usersSource.next(_this._users);
        });
    }; //getUsers
    DataService.prototype.accountComparator = function (elementA, elementB) {
        if (elementA.name < elementB.name)
            return -1;
        if (elementA.name > elementB.name)
            return 1;
        return 0;
    };
    DataService.prototype.categoryComparator = function (elementA, elementB) {
        if (elementA.name < elementB.name)
            return -1;
        if (elementA.name > elementB.name)
            return 1;
        return 0;
    };
    DataService.prototype.payeeComparator = function (elementA, elementB) {
        if (elementA.name < elementB.name)
            return -1;
        if (elementA.name > elementB.name)
            return 1;
        return 0;
    };
    DataService.prototype.transactionComparator = function (elementA, elementB) {
        if (elementA.date < elementB.date)
            return -1;
        if (elementA.date > elementB.date)
            return 1;
        return 0;
    };
    DataService.prototype.userComparator = function (elementA, elementB) {
        if (elementA.userName < elementB.userName)
            return -1;
        if (elementA.userName > elementB.userName)
            return 1;
        return 0;
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], DataService);
    return DataService;
}()); //service
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
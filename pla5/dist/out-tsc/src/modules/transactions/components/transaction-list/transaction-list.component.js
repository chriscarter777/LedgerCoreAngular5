"use strict";
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
var data_service_1 = require("../../../shared/data.service");
var forms_1 = require("@angular/forms");
var TransactionListComponent = /** @class */ (function () {
    function TransactionListComponent(dataService) {
        this.dataService = dataService;
        this.acctFilter = new forms_1.FormControl();
        this.amountMax = new forms_1.FormControl();
        this.amountMin = new forms_1.FormControl();
        this.catFilter = new forms_1.FormControl();
        this.checkMax = new forms_1.FormControl();
        this.checkMin = new forms_1.FormControl();
        this.dateMax = new forms_1.FormControl();
        this.dateMin = new forms_1.FormControl();
        this.f0Filter = new forms_1.FormControl();
        this.f1Filter = new forms_1.FormControl();
        this.f2Filter = new forms_1.FormControl();
        this.f3Filter = new forms_1.FormControl();
        this.payeeFilter = new forms_1.FormControl();
        this.taxFilter = new forms_1.FormControl();
        this.showFilter = false;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    } //ctor
    TransactionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.accounts.subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.acctAsset = _this.dataService.AssetAccounts();
            _this.acctLiability = _this.dataService.LiabilityAccounts();
        });
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.dataService.categories.subscribe(function (categories) { return _this.categories = categories; });
        this.dataService.payees.subscribe(function (payees) { return _this.payees = payees; });
        this.dataService.transactions.subscribe(function (transactions) {
            _this.transactions = transactions;
            _this.constructLines();
        });
        //on initialization, every index in the reference arrays is displayed
        this.displayAcctIndices = Array.from(new Array(this.accounts.length), function (x, i) { return i; });
        this.displayLineIndices = Array.from(new Array(this.lines.length), function (x, i) { return i; });
        this.instantiateForm(this.acctFilter, this.amountMax, this.amountMin, this.catFilter, this.checkMax, this.checkMin, this.dateMax, this.dateMin, this.f0Filter, this.f1Filter, this.f2Filter, this.f3Filter, this.payeeFilter, this.taxFilter);
    };
    TransactionListComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    TransactionListComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionListComponent.prototype.constructLines = function () {
        var _this = this;
        this.lines = [];
        this.transactions.forEach(function (transaction, tidx) {
            _this.lines.push({ assets: 0, balances: [], liabilities: 0, net: 0, transaction: transaction });
            _this.accounts.forEach(function (account, aidx) {
                if (tidx === 0) {
                    if (transaction.acctFrom === account.id) {
                        _this.lines[tidx].balances[aidx] = (-1) * transaction.amount;
                    }
                    else if (transaction.acctTo === account.id) {
                        _this.lines[tidx].balances[aidx] = transaction.amount;
                    }
                    else {
                        _this.lines[tidx].balances[aidx] = 0;
                    }
                }
                else {
                    if (transaction.acctFrom === account.id) {
                        _this.lines[tidx].balances[aidx] = _this.lines[tidx - 1].balances[aidx] - transaction.amount;
                    }
                    else if (transaction.acctTo === account.id) {
                        _this.lines[tidx].balances[aidx] = _this.lines[tidx - 1].balances[aidx] + transaction.amount;
                    }
                    else {
                        _this.lines[tidx].balances[aidx] = _this.lines[tidx - 1].balances[aidx];
                    }
                }
                if (account.acctType === "Asset") {
                    _this.lines[tidx].assets = _this.lines[tidx].assets + _this.lines[tidx].balances[aidx];
                }
                if (account.acctType === "Liability") {
                    _this.lines[tidx].liabilities = _this.lines[tidx].liabilities - _this.lines[tidx].balances[aidx];
                }
                _this.lines[tidx].net = _this.lines[tidx].net + _this.lines[tidx].balances[aidx];
            });
        });
    };
    TransactionListComponent.prototype.onDelete = function (id) {
        var result;
        var indextToDelete = this.transactions.findIndex(function (element) { return element.id === id; });
        var dateToDelete = this.transactions[indextToDelete].date;
        var confirmation = confirm('Are you sure you want to delete transaction on ' + dateToDelete + '?');
        if (confirmation) {
            this.dataService.deleteAccount(id);
        }
        ;
    };
    TransactionListComponent.prototype.onFlag0Toggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].flag0) {
            this.transactions[targetIdx].flag0 = false;
        }
        else {
            this.transactions[targetIdx].flag0 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.onFlag1Toggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].flag1) {
            this.transactions[targetIdx].flag1 = false;
        }
        else {
            this.transactions[targetIdx].flag1 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.onFlag2Toggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].flag2) {
            this.transactions[targetIdx].flag2 = false;
        }
        else {
            this.transactions[targetIdx].flag2 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.onFlag3Toggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].flag3) {
            this.transactions[targetIdx].flag3 = false;
        }
        else {
            this.transactions[targetIdx].flag3 = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.onReconciledToggle = function (id) {
        var targetIdx = this.transactions.findIndex(function (t) { return t.id === id; });
        if (this.transactions[targetIdx].reconciled) {
            this.transactions[targetIdx].reconciled = false;
        }
        else {
            this.transactions[targetIdx].reconciled = true;
        }
        this.dataService.updateTransaction(this.transactions[targetIdx]);
    };
    TransactionListComponent.prototype.instantiateForm = function (acctFilter, amountMax, amountMin, catFilter, checkMax, checkMin, dateMax, dateMin, f0Filter, f1Filter, f2Filter, f3Filter, payeeFilter, taxFilter) {
        this.filterForm = new forms_1.FormGroup({
            acctFilter: acctFilter,
            amountMax: amountMax,
            amountMin: amountMin,
            catFilter: catFilter,
            checkMax: checkMax,
            checkMin: checkMin,
            dateMax: dateMax,
            dateMin: dateMin,
            f0Filter: f0Filter,
            f1Filter: f1Filter,
            f2Filter: f2Filter,
            f3Filter: f3Filter,
            payeeFilter: payeeFilter,
            taxFilter: taxFilter,
        });
    };
    TransactionListComponent.prototype.onFilterSubmit = function () {
        var _this = this;
        //start with display arrays which point to every index in their reference arrays
        this.displayAcctIndices = Array.from(new Array(this.accounts.length), function (x, i) { return i; });
        this.displayLineIndices = Array.from(new Array(this.lines.length), function (x, i) { return i; });
        //and repetitively filter from there
        if (this.filterForm.get('acctFilter').value !== null) {
            var selectedAccountId = this.filterForm.get('acctFilter').value;
            var selectedAccountIndex = this.accounts.findIndex(function (account) { return account.id == selectedAccountId; });
            this.displayAcctIndices = [selectedAccountIndex];
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.acctFrom == selectedAccountId || _this.lines[idx].transaction.acctTo == selectedAccountId; });
        }
        if (this.filterForm.get('amountMax').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.amount <= _this.filterForm.get('amountMax').value; });
        }
        if (this.filterForm.get('amountMin').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.amount >= _this.filterForm.get('amountMin').value; });
        }
        if (this.filterForm.get('catFilter').value !== null) {
            var catArray = [this.filterForm.get('catFilter').value];
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return catArray.some(function (element) { return element == _this.lines[idx].transaction.category; }); });
        }
        if (this.filterForm.get('checkMax').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.check !== null; });
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.check <= _this.filterForm.get('checkMax').value; });
        }
        if (this.filterForm.get('checkMin').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.check !== null; });
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.check >= _this.filterForm.get('checkMin').value; });
        }
        if (this.filterForm.get('dateMax').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.date <= _this.filterForm.get('dateMax').value; });
        }
        if (this.filterForm.get('dateMin').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.date >= _this.filterForm.get('dateMin').value; });
        }
        if (this.filterForm.get('f0Filter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.flag0 === true; });
        }
        if (this.filterForm.get('f1Filter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.flag1 === true; });
        }
        if (this.filterForm.get('f2Filter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.flag2 === true; });
        }
        if (this.filterForm.get('f3Filter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.flag3 === true; });
        }
        if (this.filterForm.get('payeeFilter').value !== null) {
            var payArray = [this.filterForm.get('payeeFilter').value];
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return payArray.some(function (element) { return element == _this.lines[idx].transaction.payeeFrom || element == _this.lines[idx].transaction.payeeTo; }); });
        }
        if (this.filterForm.get('taxFilter').value !== null) {
            this.displayLineIndices = this.displayLineIndices.filter(function (idx) { return _this.lines[idx].transaction.tax === true; });
        }
    };
    TransactionListComponent.prototype.onResetFilter = function () {
        this.acctFilter.setValue(null);
        this.amountMax.setValue(null);
        this.amountMin.setValue(null);
        this.catFilter.setValue(null);
        this.checkMax.setValue(null);
        this.checkMin.setValue(null);
        this.dateMax.setValue(null);
        this.dateMin.setValue(null);
        this.f0Filter.setValue(null);
        this.f1Filter.setValue(null);
        this.f2Filter.setValue(null);
        this.f3Filter.setValue(null);
        this.payeeFilter.setValue(null);
        this.taxFilter.setValue(null);
    };
    TransactionListComponent.prototype.onHideFilter = function () {
        this.showFilter = false;
    };
    TransactionListComponent.prototype.onShowFilter = function () {
        this.showFilter = true;
    };
    TransactionListComponent = __decorate([
        core_1.Component({
            selector: 'transaction-list',
            templateUrl: './transaction-list.component.html',
            styleUrls: ['./transaction-list.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], TransactionListComponent);
    return TransactionListComponent;
}());
exports.TransactionListComponent = TransactionListComponent;
//# sourceMappingURL=transaction-list.component.js.map
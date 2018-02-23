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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var data_service_1 = require("../../../shared/data.service");
var startWith_1 = require("rxjs/operators/startWith");
var map_1 = require("rxjs/operators/map");
var TransactionAddComponent = /** @class */ (function () {
    function TransactionAddComponent(route, dataService, location) {
        this.route = route;
        this.dataService = dataService;
        this.location = location;
        this.newTransaction = this.freshNewTransaction();
        this.acctFrom = new forms_1.FormControl();
        this.acctTo = new forms_1.FormControl();
        this.amount = new forms_1.FormControl();
        this.category = new forms_1.FormControl();
        this.check = new forms_1.FormControl();
        this.comments = new forms_1.FormControl();
        this.date = new forms_1.FormControl(this.newTransaction.date);
        this.payeeFrom = new forms_1.FormControl();
        this.payeeTo = new forms_1.FormControl();
        this.tax = new forms_1.FormControl();
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].setAttribute("disabled", "true");
        }
        ;
        document.getElementById("addlink").setAttribute("disabled", "true");
        this.accounts = this.dataService.Accounts();
        this.acctAsset = this.dataService.AssetAccounts();
        this.acctLiability = this.dataService.LiabilityAccounts();
        this.categories = this.dataService.Categories();
        this.payees = this.dataService.Payees();
        this.instantiateForm(this.acctFrom, this.acctTo, this.amount, this.category, this.check, this.comments, this.date, this.payeeFrom, this.payeeTo, this.tax);
        this.filteredCategoryNames = this.category.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.categoryFilter(val); }));
        this.filteredPayeeFromNames = this.payeeFrom.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.payeeFilter(val); }));
        this.filteredPayeeToNames = this.payeeTo.valueChanges.pipe(startWith_1.startWith(''), map_1.map(function (val) { return _this.payeeFilter(val); }));
    };
    ;
    TransactionAddComponent.prototype.ngOnDestroy = function () {
        var editlinks = document.getElementsByClassName("editlink");
        for (var i = 0; i < editlinks.length; i++) {
            editlinks[i].removeAttribute("disabled");
        }
        ;
        document.getElementById("addlink").removeAttribute("disabled");
    };
    TransactionAddComponent.prototype.accountName = function (accountId) {
        return this.accounts.find(function (element) { return element.id === accountId; }).name;
    };
    TransactionAddComponent.prototype.categoryFilter = function (val) {
        if (this.categories) {
            return this.categories.filter(function (category) {
                return category.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            }).map(function (category) { return category.name; });
        }
        else {
            return [];
        }
    };
    TransactionAddComponent.prototype.categoryId = function (categoryName) {
        return this.categories.find(function (element) { return element.name === categoryName; }).id;
    };
    TransactionAddComponent.prototype.categoryName = function (categoryId) {
        return this.categories.find(function (element) { return element.id === categoryId; }).name;
    };
    TransactionAddComponent.prototype.freshNewTransaction = function () {
        return { id: null, acctFrom: 0, acctTo: 0, amount: 0, category: 0, check: null, comments: '', date: new Date().toLocaleDateString(), flag0: false, flag1: false, flag2: false, flag3: false, payeeFrom: '', payeeTo: '', reconciled: false, tax: false };
    };
    TransactionAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionAddComponent.prototype.instantiateForm = function (acctFrom, acctTo, amount, category, check, comments, date, payeeFrom, payeeTo, tax) {
        this.form = new forms_1.FormGroup({
            acctFrom: acctFrom,
            acctTo: acctTo,
            amount: amount,
            category: category,
            check: check,
            comments: comments,
            date: date,
            payeeFrom: payeeFrom,
            payeeTo: payeeTo,
            tax: tax,
        });
    };
    TransactionAddComponent.prototype.onSubmit = function () {
        var _this = this;
        //add the payee or update its defaults from payeeFrom, if populated
        if (this.form.get('payeeFrom').value !== null) {
            console.log('adding payeeFrom ' + this.form.get('payeeFrom').value);
            var pfMatch = this.payees.find(function (element) { return element.name === _this.form.get('payeeFrom').value; });
            if (pfMatch) {
                var matchIndex = this.payees.indexOf(pfMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctTo').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.categoryId(this.form.get('category').value);
                console.log('calling update payeeFrom with ' + JSON.stringify(this.payees[matchIndex]));
                this.dataService.updatePayee(this.payees[matchIndex]);
            }
            else {
                var pf = { id: 0, balance: 0, defaultAcct: this.form.get('acctTo').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeFrom').value };
                console.log('calling add payeeFrom with ' + JSON.stringify(pf));
                this.dataService.addPayee(pf);
            }
        }
        //add the payee or update its defaults from payeeTo, if populated
        if (this.form.get('payeeTo').value !== null) {
            console.log('adding payeeTo ' + this.form.get('payeeTo').value);
            var ptMatch = this.payees.find(function (element) { return element.name === _this.form.get('payeeTo').value; });
            if (ptMatch) {
                var matchIndex = this.payees.indexOf(ptMatch);
                this.payees[matchIndex].defaultAcct = this.form.get('acctFrom').value;
                this.payees[matchIndex].defaultAmt = this.form.get('amount').value;
                this.payees[matchIndex].defaultCat = this.categoryId(this.form.get('category').value);
                console.log('calling update payeeFrom with ' + JSON.stringify(this.payees[matchIndex]));
                this.dataService.updatePayee(this.payees[matchIndex]);
            }
            else {
                var pt = { id: 0, balance: 0, defaultAcct: this.form.get('acctFrom').value, defaultAmt: this.form.get('amount').value, defaultCat: this.form.get('category').value, name: this.form.get('payeeTo').value };
                console.log('calling add payeeTo with ' + JSON.stringify(pt));
                this.dataService.addPayee(pt);
            }
        }
        //add the transaction
        this.newTransaction.acctFrom = this.form.get('acctFrom').value;
        this.newTransaction.acctTo = this.form.get('acctTo').value;
        this.newTransaction.amount = this.form.get('amount').value;
        this.newTransaction.category = this.categoryId(this.form.get('category').value);
        this.newTransaction.check = this.form.get('check').value;
        this.newTransaction.comments = this.form.get('comments').value;
        this.newTransaction.date = this.form.get('date').value;
        this.newTransaction.payeeFrom = this.form.get('payeeFrom').value;
        this.newTransaction.payeeTo = this.form.get('payeeTo').value;
        this.newTransaction.tax = this.form.get('tax').value;
        console.log('calling addTransaction with ' + JSON.stringify(this.newTransaction));
        this.dataService.addTransaction(this.newTransaction);
        //reset and close
        this.ngOnInit();
        this.goBack();
    };
    TransactionAddComponent.prototype.onFPInput = function (val) {
        if (val === '') {
            document.getElementById('payeeToControl').style.display = "inline";
            document.getElementById('accountFromControl').style.display = "inline";
            document.getElementById('accountToControl').style.display = "inline";
        }
        else {
            document.getElementById('payeeToControl').style.display = "none";
            document.getElementById('accountFromControl').style.display = "none";
        }
    }; //onFPInput
    TransactionAddComponent.prototype.onTPInput = function (val) {
        if (val === '') {
            document.getElementById('payeeFromControl').style.display = "inline";
            document.getElementById('accountFromControl').style.display = "inline";
            document.getElementById('accountToControl').style.display = "inline";
        }
        else {
            document.getElementById('payeeFromControl').style.display = "none";
            document.getElementById('accountToControl').style.display = "none";
        }
    }; //onTPInput
    TransactionAddComponent.prototype.onCChange = function (val) {
        if (val !== null) {
            if (this.categories) {
                var cat = this.categories.find(function (c) { return c.name.trim().toLowerCase() === val.trim().toLowerCase(); });
                if (cat) {
                    var taxcheck = cat.tax;
                    this.tax.setValue(taxcheck);
                }
                else {
                    this.tax.setValue(false);
                }
            }
        }
        else {
            this.tax.setValue(false);
        }
    }; //onCChange
    TransactionAddComponent.prototype.onFPChange = function (val) {
        if (val !== null) {
            if (this.payees) {
                var fp = this.payees.find(function (p) { return p.name.trim().toLowerCase() === val.trim().toLowerCase(); });
                if (fp) {
                    var acctid = fp.defaultAcct;
                    var amt = fp.defaultAmt.toString();
                    var catname = this.categoryName(fp.defaultCat);
                    var taxcheck = this.categories.find(function (c) { return c.id === fp.defaultCat; }).tax;
                    this.acctTo.setValue(acctid);
                    this.amount.setValue(amt);
                    this.category.setValue(catname);
                    this.tax.setValue(taxcheck);
                }
                else {
                    this.acctTo.setValue('');
                    this.amount.setValue('');
                    this.category.setValue('');
                    this.tax.setValue(false);
                }
            }
        }
        else {
            this.acctTo.setValue('');
            this.amount.setValue('');
            this.category.setValue('');
            this.tax.setValue(false);
        }
    }; //onFPChange
    TransactionAddComponent.prototype.onTPChange = function (val) {
        if (val !== null) {
            if (this.payees) {
                var tp = this.payees.find(function (p) { return p.name.trim().toLowerCase() === val.trim().toLowerCase(); });
                if (tp) {
                    var acctid = tp.defaultAcct;
                    var amt = tp.defaultAmt.toString();
                    var catname = this.categoryName(tp.defaultCat);
                    var taxcheck = this.categories.find(function (c) { return c.id === tp.defaultCat; }).tax;
                    this.acctFrom.setValue(acctid);
                    this.amount.setValue(amt);
                    this.category.setValue(catname);
                    this.tax.setValue(taxcheck);
                }
                else {
                    this.acctFrom.setValue('');
                    this.amount.setValue('');
                    this.category.setValue('');
                    this.tax.setValue(false);
                }
            }
        }
        else {
            this.acctFrom.setValue('');
            this.amount.setValue('');
            this.category.setValue('');
            this.tax.setValue(false);
        }
    }; //onTPChange
    TransactionAddComponent.prototype.onFPSelection = function (val) {
        this.onFPInput(val);
        this.onFPChange(val);
    };
    TransactionAddComponent.prototype.onTPSelection = function (val) {
        this.onTPInput(val);
        this.onTPChange(val);
    };
    TransactionAddComponent.prototype.payeeFilter = function (val) {
        if (this.payees) {
            return this.payees.filter(function (payee) {
                return payee.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            }).map(function (payee) { return payee.name; });
        }
        else {
            return [];
        }
    };
    TransactionAddComponent = __decorate([
        core_1.Component({
            selector: 'transaction-add',
            templateUrl: './transaction-add.component.html',
            styleUrls: ['./transaction-add.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            data_service_1.DataService,
            common_1.Location])
    ], TransactionAddComponent);
    return TransactionAddComponent;
}()); //component
exports.TransactionAddComponent = TransactionAddComponent;
//# sourceMappingURL=transaction-add.component.js.map
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
var TransactionEditComponent = /** @class */ (function () {
    function TransactionEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
    }
    TransactionEditComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    TransactionEditComponent.prototype.createForm = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.dataService.getTransaction(id).subscribe(function (transaction) {
            _this.editTransaction = transaction;
            _this.instantiateForm();
        }, function (error) { return alert("there was an error getting transaction."); });
    };
    TransactionEditComponent.prototype.instantiateForm = function () {
        this.form = new forms_1.FormGroup({
            amount: new forms_1.FormControl(this.editTransaction.amount),
            category: new forms_1.FormControl(this.editTransaction.category),
            crAcct: new forms_1.FormControl(this.editTransaction.crAcct),
            date: new forms_1.FormControl(this.editTransaction.date),
            drAcct: new forms_1.FormControl(this.editTransaction.drAcct),
            tax: new forms_1.FormControl(this.editTransaction.tax),
        });
    };
    TransactionEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    TransactionEditComponent.prototype.onSubmit = function () {
        this.editTransaction.amount = this.form.get('amount').value;
        this.editTransaction.category = this.form.get('category').value;
        this.editTransaction.crAcct = this.form.get('crAcct').value;
        this.editTransaction.date = this.form.get('date').value;
        this.editTransaction.drAcct = this.form.get('drAcct').value;
        this.editTransaction.tax = this.form.get('tax').value;
        this.dataService.updateTransaction(this.editTransaction);
        //reset
        this.goBack();
    };
    TransactionEditComponent = __decorate([
        core_1.Component({
            selector: 'transaction-edit',
            templateUrl: './transactionEdit.component.html',
            styleUrls: ['./transactionEdit.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], TransactionEditComponent);
    return TransactionEditComponent;
}());
exports.TransactionEditComponent = TransactionEditComponent;
//# sourceMappingURL=transactionEdit.component.js.map
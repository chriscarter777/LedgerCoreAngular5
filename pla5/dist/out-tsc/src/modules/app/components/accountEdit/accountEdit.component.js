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
var AccountEditComponent = /** @class */ (function () {
    function AccountEditComponent(dataService, route, location) {
        this.dataService = dataService;
        this.route = route;
        this.location = location;
        this.displayAsDollar = function (amt) { return '$ ' + amt.toFixed(2); };
        this.displayAsPercent = function (value) { return value.toFixed(2) + "%"; };
    }
    AccountEditComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    AccountEditComponent.prototype.createForm = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.dataService.getAccount(id).subscribe(function (account) {
            _this.editAccount = account;
            _this.instantiateForm();
        }, function (error) { return alert("there was an error getting account."); });
    };
    AccountEditComponent.prototype.instantiateForm = function () {
        this.form = new forms_1.FormGroup({
            acctType: new forms_1.FormControl(this.editAccount.acctType),
            institution: new forms_1.FormControl(this.editAccount.institution),
            interest: new forms_1.FormControl(this.editAccount.interest),
            limit: new forms_1.FormControl(this.editAccount.limit),
            name: new forms_1.FormControl(this.editAccount.name),
            number: new forms_1.FormControl(this.editAccount.number),
        });
    };
    AccountEditComponent.prototype.goBack = function () {
        this.location.back();
    };
    AccountEditComponent.prototype.onSubmit = function () {
        this.editAccount.acctType = this.form.get('acctType').value;
        this.editAccount.institution = this.form.get('institution').value;
        this.editAccount.interest = this.form.get('interest').value;
        this.editAccount.limit = this.form.get('limit').value;
        this.editAccount.name = this.form.get('name').value;
        this.editAccount.number = this.form.get('number').value;
        this.dataService.updateAccount(this.editAccount);
        //reset
        this.goBack();
    };
    AccountEditComponent = __decorate([
        core_1.Component({
            selector: 'account-edit',
            templateUrl: './accountEdit.component.html',
            styleUrls: ['./accountEdit.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.ActivatedRoute,
            common_1.Location])
    ], AccountEditComponent);
    return AccountEditComponent;
}()); //class
exports.AccountEditComponent = AccountEditComponent;
//# sourceMappingURL=accountEdit.component.js.map
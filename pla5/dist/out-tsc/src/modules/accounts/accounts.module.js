"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var account_add_component_1 = require("./components/account-add/account-add.component");
var account_edit_component_1 = require("./components/account-edit/account-edit.component");
var account_list_component_1 = require("./components/account-list/account-list.component");
var data_service_1 = require("../shared/data.service");
var accounts_routing_module_1 = require("./accounts.routing.module");
var AccountsModule = /** @class */ (function () {
    function AccountsModule() {
    }
    AccountsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                accounts_routing_module_1.AccountRoutingModule
            ],
            declarations: [
                account_add_component_1.AccountAddComponent,
                account_edit_component_1.AccountEditComponent,
                account_list_component_1.AccountListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], AccountsModule);
    return AccountsModule;
}());
exports.AccountsModule = AccountsModule;
//# sourceMappingURL=accounts.module.js.map
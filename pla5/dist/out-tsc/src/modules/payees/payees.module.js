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
var payee_list_component_1 = require("./components/payee-list/payee-list.component");
var data_service_1 = require("../shared/data.service");
var payees_routing_module_1 = require("./payees.routing.module");
var PayeesModule = /** @class */ (function () {
    function PayeesModule() {
    }
    PayeesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                payees_routing_module_1.PayeeRoutingModule
            ],
            declarations: [
                payee_list_component_1.PayeeListComponent
            ],
            providers: [data_service_1.DataService]
        })
    ], PayeesModule);
    return PayeesModule;
}());
exports.PayeesModule = PayeesModule;
//# sourceMappingURL=payees.module.js.map
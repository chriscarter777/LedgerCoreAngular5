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
var UserListComponent = /** @class */ (function () {
    function UserListComponent(dataService) {
        this.dataService = dataService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    UserListComponent.prototype.onDelete = function (id) {
        var confirmation = confirm('are you sure you want to delete ' + this.users.find(function (element) { return element.id == id; }).userName + '?');
        if (confirmation) {
            alert("Ha! User " + id + " is GONE!");
        }
        ;
    };
    UserListComponent.prototype.onMakeAdmin = function (id) {
        var _this = this;
        this.dataService.makeAdmin(id).subscribe(function (result) { _this.users[0].admin = true; }, function (error) { return alert("There was a problem updating."); });
    };
    UserListComponent.prototype.onUnmakeAdmin = function (id) {
        var _this = this;
        this.dataService.makeAdmin(id).subscribe(function (result) { _this.users[0].admin = false; }, function (error) { return alert("There was a problem updating."); });
    };
    UserListComponent.prototype.onPasswordReset = function (id) {
        this.dataService.makeAdmin(id).subscribe(function (result) { }, function (error) { return alert("There was a problem updating."); });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: './userList.component.html',
            styleUrls: ['./userList.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userList.component.js.map
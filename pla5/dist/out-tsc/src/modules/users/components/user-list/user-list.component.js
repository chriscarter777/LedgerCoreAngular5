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
        var _this = this;
        this.dataService = dataService;
        this.dataService.userDeleted.subscribe(function (data) {
            var indexToDelete = _this.users.findIndex(function (element) { return element.id === data.id; });
            var udeleted = _this.users.splice(indexToDelete, 1);
        }, function (error) { return alert("There was a problem deleting."); });
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.dataService.getUsers().subscribe(function (users) {
                _this.users = users;
                resolve(users);
            }, function (error) {
                alert("there was an error getting users.");
            });
        });
    };
    UserListComponent.prototype.onDelete = function (id) {
        var userToDelete = this.users.find(function (element) { return element.id == id; }).userName;
        var confirmation = confirm('are you sure you want to delete ' + userToDelete + '?');
        if (confirmation) {
            this.dataService.deleteUser(userToDelete);
        }
        ;
    };
    UserListComponent.prototype.logCheckbox = function (element) {
        alert("Checkbox " + element.value + " was " + (element.checked ? '' : 'un') + "checked\n");
    };
    UserListComponent.prototype.onToggleAdmin = function (id) {
        var indexToToggle = this.users.findIndex(function (element) { return element.id === id; });
        if (this.users[indexToToggle].admin === true) {
            this.users[indexToToggle].admin = false;
            this.dataService.unmakeAdmin(id);
        }
        else {
            this.users[indexToToggle].admin = true;
            this.dataService.makeAdmin(id);
        }
    };
    UserListComponent.prototype.onReset = function (id) {
        this.dataService.resetPassword(id, "Password?123");
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map
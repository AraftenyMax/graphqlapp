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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var UserSampleData_1 = require("../data/UserSampleData");
var UsersRepository_1 = __importDefault(require("../data/UsersRepository"));
var User_1 = __importDefault(require("../schemas/User"));
var UsersResolver = /** @class */ (function () {
    function UsersResolver() {
        this.repository = new UsersRepository_1.default(UserSampleData_1.UserSampleData);
    }
    UsersResolver.prototype.userByName = function (name) {
        return this.repository.getUserByName(name);
    };
    UsersResolver.prototype.userById = function (id) {
        return this.repository.getUserById(id);
    };
    __decorate([
        type_graphql_1.Query(function (returns) { return User_1.default; }, { nullable: true }),
        __param(0, type_graphql_1.Arg("name")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], UsersResolver.prototype, "userByName", null);
    __decorate([
        type_graphql_1.Query(function (returns) { return User_1.default; }, { nullable: true }),
        __param(0, type_graphql_1.Arg("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], UsersResolver.prototype, "userById", null);
    UsersResolver = __decorate([
        type_graphql_1.Resolver(function (of) { return User_1.default; })
    ], UsersResolver);
    return UsersResolver;
}());
exports.default = UsersResolver;
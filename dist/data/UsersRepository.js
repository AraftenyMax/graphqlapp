"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsersRepository {
    constructor(data) {
        this.data = [...data];
    }
    getUserByName(name) {
        return this.data.find((user) => user.name = name);
    }
    getUserById(id) {
        return this.data.find((user) => user.id === id);
    }
    getAllUsers() {
        return this.data;
    }
}
exports.default = UsersRepository;
//# sourceMappingURL=UsersRepository.js.map
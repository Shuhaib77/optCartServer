"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserService = exports.getUserService = exports.employeeUpdateService = exports.employeeService = void 0;
const database_1 = require("../../config/database");
const Branches_1 = require("../../entities/Branches");
const user_entity_1 = require("../../entities/user_entity");
const employeeService = (branch_id, name, email, password, role) => __awaiter(void 0, void 0, void 0, function* () {
    const branchRepo = database_1.AppDataSource.getRepository(Branches_1.Branches);
    const userRepo = database_1.AppDataSource.getRepository(user_entity_1.User);
    const branch = yield branchRepo.findOneBy({ id: branch_id });
    if (!branch) {
        throw new Error("branch not found");
    }
    const data = yield userRepo.findOneBy({ email: email });
    if (data) {
        throw new Error('user already exist');
    }
    const newUser = userRepo.create({
        branch: branch,
        name,
        email,
        password,
        role: role
    });
    yield userRepo.save(newUser);
    return newUser;
});
exports.employeeService = employeeService;
const employeeUpdateService = (user_id, name, email, password, role) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = database_1.AppDataSource.getRepository(user_entity_1.User);
    const user = yield userRepo.findOneBy({ id: user_id });
    if (!user) {
        throw new Error("user not found");
    }
    yield userRepo.update(user_id, {
        name: name || user.name,
        email: email || user.email,
        password: password || user.password,
        role: role || user.role
    });
    const updatedUser = yield userRepo.findOneBy({ id: user_id });
    return updatedUser;
});
exports.employeeUpdateService = employeeUpdateService;
const getUserService = (branchId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = database_1.AppDataSource.getRepository(user_entity_1.User);
    const users = yield userRepo.find({
        where: { branch: { id: branchId } },
        relations: ["branch"]
    });
    if (!users) {
        throw new Error("failed to fetch users");
    }
    return {
        message: 'user fetched successfully',
        users: users
    };
});
exports.getUserService = getUserService;
const deleteUserService = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = database_1.AppDataSource.getRepository(user_entity_1.User);
    const user = yield userRepo.findOneBy({ id: userId });
    if (!user) {
        throw new Error("user not found");
    }
    yield userRepo.delete(userId);
    return { message: "deleted user successfully" };
});
exports.deleteUserService = deleteUserService;

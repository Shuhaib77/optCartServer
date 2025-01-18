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
exports.updateBranch = exports.getBranch = exports.branch_service = void 0;
const database_1 = require("../../config/database");
const Branches_1 = require("../../entities/Branches");
const Tenant_1 = require("../../entities/Tenant");
const branch_service = (tenant_id, branch_name, location) => __awaiter(void 0, void 0, void 0, function* () {
    const tenantRepo = database_1.AppDataSource.getRepository(Tenant_1.Tenant);
    const branchRepo = database_1.AppDataSource.getRepository(Branches_1.Branches);
    const tenant = yield tenantRepo.findOneBy({ tenant_id: tenant_id });
    if (!tenant) {
        throw new Error('tenant not found');
    }
    const data = yield branchRepo.findOneBy({ branch_name: branch_name });
    if (data) {
        throw new Error("branch already exist");
    }
    const newBranch = branchRepo.create({
        tenant: tenant,
        branch_name: branch_name,
        location: location
    });
    yield branchRepo.save(newBranch);
    return { message: 'branch created successfully',
        branch: newBranch
    };
});
exports.branch_service = branch_service;
const getBranch = () => __awaiter(void 0, void 0, void 0, function* () {
    const branchRepo = database_1.AppDataSource.getRepository(Branches_1.Branches);
    const branches = yield branchRepo.find();
    if (!branches) {
        throw new Error("branches not found");
    }
    return branches;
});
exports.getBranch = getBranch;
const updateBranch = (branchId, branch_name, location) => __awaiter(void 0, void 0, void 0, function* () {
    const branchRepo = database_1.AppDataSource.getRepository(Branches_1.Branches);
    const branch = yield branchRepo.findOneBy({ id: branchId });
    if (!branch) {
        throw new Error('branch not found');
    }
    yield branchRepo.update(branchId, {
        branch_name: branch_name || branch.branch_name,
        location: location || branch.location
    });
    const updatedBranch = yield branchRepo.findOneBy({ id: branchId });
    return {
        message: 'branch updated success fully',
        branch: updatedBranch
    };
});
exports.updateBranch = updateBranch;

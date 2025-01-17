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
exports.createBranch = void 0;
const database_1 = require("../config/database");
const Tenant_1 = require("../entities/Tenant");
const Branches_1 = require("../entities/Branches");
const createBranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tenant_id, branch_name, location } = req.body;
    try {
        const tenantRepo = database_1.AppDataSource.getRepository(Tenant_1.Tenant);
        const branchRepo = database_1.AppDataSource.getRepository(Branches_1.Branches);
        const tenant = yield tenantRepo.findOneBy({ id: tenant_id });
        if (!tenant) {
            return res.status(400).json({ message: "tenant not found" });
        }
        const newBranch = branchRepo.create({
            branch_name,
            location,
            tenant
        });
        yield branchRepo.save(newBranch);
        return res.status(201).json({ message: "Branch created successfully", branchId: newBranch.id });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createBranch = createBranch;

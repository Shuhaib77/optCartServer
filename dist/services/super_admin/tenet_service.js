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
exports.tenent_create = void 0;
const Tenant_1 = require("../../entities/Tenant");
const database_1 = require("../../config/database");
const tenent_create = (name, password) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(name, password);
    const tenantRepo = database_1.AppDataSource.getRepository(Tenant_1.Tenant);
    const data = yield tenantRepo.findOneBy({
        name: name,
    });
    if (data) {
        throw new Error("tenent alredy exist");
    }
    const new_tenant = tenantRepo.create({
        name: name,
        password: password,
        created_by: name
    });
    yield tenantRepo.save(new_tenant);
    return new_tenant;
});
exports.tenent_create = tenent_create;

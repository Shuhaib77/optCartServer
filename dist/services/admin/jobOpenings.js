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
exports.jobOpenings_servise = void 0;
const database_1 = require("../../config/database");
const Branches_1 = require("../../entities/Branches");
const jobOpenings_1 = require("../../entities/jobOpenings");
const jobOpenings_servise = (branchId, job_title, description, requirements, location, salary_range) => __awaiter(void 0, void 0, void 0, function* () {
    const jobOpeningsRepo = database_1.AppDataSource.getRepository(jobOpenings_1.jobOpenings);
    const branchRepo = database_1.AppDataSource.getRepository(Branches_1.Branches);
    const branch = yield branchRepo.findOneBy({ id: branchId });
    if (!branch) {
        throw new Error("branchId is no valid");
    }
    const newJobOpenings = jobOpeningsRepo.create({
        job_title,
        description,
        requirements,
        location,
        salary_range
    });
    yield jobOpeningsRepo.save(newJobOpenings);
    return newJobOpenings;
});
exports.jobOpenings_servise = jobOpenings_servise;

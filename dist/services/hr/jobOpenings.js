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
exports.deleteJobOpeningsService = exports.getJobOpeningsByIdService = exports.getJobOpeningService = exports.jobOpeningUpdateService = exports.jobOpenings_service = void 0;
const database_1 = require("../../config/database");
const Branches_1 = require("../../entities/Branches");
const jobOpenings_1 = require("../../entities/jobOpenings");
const jobOpenings_service = (branchId, job_title, description, requirements, location, salary_range, closed_at) => __awaiter(void 0, void 0, void 0, function* () {
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
        salary_range,
        closed_at
    });
    yield jobOpeningsRepo.save(newJobOpenings);
    return newJobOpenings;
});
exports.jobOpenings_service = jobOpenings_service;
const jobOpeningUpdateService = (jobOpeningId, job_title, description, requirements, location, salary_range, closed_at) => __awaiter(void 0, void 0, void 0, function* () {
    const jobOpeningRepo = database_1.AppDataSource.getRepository(jobOpenings_1.jobOpenings);
    const jobOpening = yield jobOpeningRepo.findOneBy({ id: jobOpeningId });
    if (!jobOpening) {
        throw new Error('jobOpening not found');
    }
    yield jobOpeningRepo.update(jobOpeningId, {
        job_title: job_title || jobOpening.job_title,
        description: description || jobOpening.description,
        requirements: requirements || jobOpening.requirements,
        location: location || jobOpening.location,
        salary_range: salary_range || jobOpening.salary_range,
        closed_at: closed_at || jobOpening.closed_at
    });
    const updatedJobOpening = yield jobOpeningRepo.findOneBy({ id: jobOpeningId });
    if (!updatedJobOpening) {
        throw new Error('error to update jobOpenings');
    }
    return {
        message: 'JobOpening updated successfully',
        JobOpening: updatedJobOpening
    };
});
exports.jobOpeningUpdateService = jobOpeningUpdateService;
const getJobOpeningService = () => __awaiter(void 0, void 0, void 0, function* () {
    const jobOpeningsRepo = database_1.AppDataSource.getRepository(jobOpenings_1.jobOpenings);
    const jobOpening = yield jobOpeningsRepo.find();
    if (!jobOpening) {
        throw new Error("failed to fetch jobOpenings");
    }
    return jobOpening;
});
exports.getJobOpeningService = getJobOpeningService;
const getJobOpeningsByIdService = (jobOpeningsId) => __awaiter(void 0, void 0, void 0, function* () {
    const jobOpeningsRepo = database_1.AppDataSource.getRepository(jobOpenings_1.jobOpenings);
    const jobOpening = yield jobOpeningsRepo.findOneBy({ id: jobOpeningsId });
    if (!jobOpening) {
        throw new Error("failed to fetch jobOpenings");
    }
    return jobOpening;
});
exports.getJobOpeningsByIdService = getJobOpeningsByIdService;
const deleteJobOpeningsService = (JobOpeningId) => __awaiter(void 0, void 0, void 0, function* () {
    const jobOpeningRepo = database_1.AppDataSource.getRepository(jobOpenings_1.jobOpenings);
    const jobOpening = yield jobOpeningRepo.findOneBy({ id: JobOpeningId });
    if (!jobOpening) {
        throw new Error('jobOpening not found');
    }
    yield jobOpeningRepo.delete(JobOpeningId);
    return { message: 'jobOpening deleted succuss fully' };
});
exports.deleteJobOpeningsService = deleteJobOpeningsService;

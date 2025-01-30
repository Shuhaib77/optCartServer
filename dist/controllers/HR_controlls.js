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
exports.jobOpeningsDelete = exports.getJobOpeningsById = exports.getJobOpenings = exports.updateJobOpenings = exports.create_jobOpenings = void 0;
const jobOpenings_1 = require("../services/hr/jobOpenings");
const create_jobOpenings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { branchId, job_title, description, requirements, location, salary_range, closed_at } = req.body;
    if (!branchId || !job_title || !description || !requirements || !location || !salary_range) {
        return res.status(400).json({ message: 'missing required field' });
    }
    const result = yield (0, jobOpenings_1.jobOpenings_service)(branchId, job_title, description, requirements, location, salary_range, closed_at);
    if (!result) {
        return res.status(400).json({ message: 'jobOpenings creation failed' });
    }
    res.status(201).json(result);
});
exports.create_jobOpenings = create_jobOpenings;
const updateJobOpenings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { jobOpingId } = req.params;
    const { job_title, description, requirements, location, salary_range, closed_at } = req.body;
    const result = yield (0, jobOpenings_1.jobOpeningUpdateService)(jobOpingId, job_title, description, requirements, location, salary_range, closed_at);
    if (!result) {
        return res.status(400).json({ message: 'jobOpenings updating failed' });
    }
    res.status(201).json(result);
});
exports.updateJobOpenings = updateJobOpenings;
const getJobOpenings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, jobOpenings_1.getJobOpeningService)();
    if (!result) {
        return res.status(400).json({ message: 'jobOpenings fetching failed' });
    }
    res.status(201).json({ data: result, message: 'jobOpenings fetched successfully' });
});
exports.getJobOpenings = getJobOpenings;
const getJobOpeningsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { jobOpeningsId } = req.params;
    const result = yield (0, jobOpenings_1.getJobOpeningsByIdService)(jobOpeningsId);
    if (!result) {
        return res.status(400).json({ message: 'jobOpenings fetching failed' });
    }
    res.status(201).json({ data: result, message: 'jobOpenings fetched successfully' });
});
exports.getJobOpeningsById = getJobOpeningsById;
const jobOpeningsDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { jobOpeningsId } = req.params;
    const result = yield (0, jobOpenings_1.deleteJobOpeningsService)(jobOpeningsId);
    if (!result) {
        return res.status(400).json({ message: 'jobOpenings deleting failed' });
    }
    res.status(201).json(result);
});
exports.jobOpeningsDelete = jobOpeningsDelete;

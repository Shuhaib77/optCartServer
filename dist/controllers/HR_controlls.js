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
exports.getLeaveRequestById = exports.getLeaveRequest = exports.updateLeaveRequest = exports.getAttendanceByUserId = exports.getAttendance = exports.updateAttendance = exports.addAttendance = exports.jobOpeningsDelete = exports.getJobOpeningsById = exports.getJobOpenings = exports.updateJobOpenings = exports.create_jobOpenings = void 0;
const jobOpenings_1 = require("../services/hr/jobOpenings");
const attendance_service_1 = require("../services/hr/attendance_service");
const leave_service_1 = require("../services/hr/leave_service");
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
//attendance
const addAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { status } = req.body;
    if (!userId || !status) {
        return res.status(400).json({ message: 'required field is missing' });
    }
    const result = yield (0, attendance_service_1.addAttendanceService)(userId, status);
    if (!result) {
        return res.status(400).json({ message: "failed to add attendance" });
    }
    res.status(201).json({ data: result, message: 'attendance added successfully' });
});
exports.addAttendance = addAttendance;
const updateAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { status, date } = req.body;
    const result = yield (0, attendance_service_1.updateAttendanceService)(userId, status, date);
    if (!result) {
        return res.status(400).json({ message: "failed to update attendance" });
    }
    res.status(201).json({ data: result, message: 'attendance updated successfully' });
});
exports.updateAttendance = updateAttendance;
const getAttendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, attendance_service_1.getAttendanceService)();
    if (!result) {
        return res.status(400).json({ message: "failed to fetch attendance" });
    }
    res.status(201).json({ data: result, message: 'attendance fetched successfully' });
});
exports.getAttendance = getAttendance;
const getAttendanceByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const result = yield (0, attendance_service_1.getAttendanceServiceByUserId)(userId);
    if (!result) {
        return res.status(400).json({ message: "failed to fetch attendance" });
    }
    res.status(201).json({ data: result, message: 'attendance fetched successfully' });
});
exports.getAttendanceByUserId = getAttendanceByUserId;
//leave request-----
const updateLeaveRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, reason, start_Date, end_Date, status } = req.body;
    const { leaveId } = req.params;
    const result = yield (0, leave_service_1.updateLeaveRequestService)(name, reason, start_Date, end_Date, status, leaveId);
    if (!result) {
        return res.status(400).json({ message: 'error to update leave request' });
    }
    res.status(201).json({ message: 'updated success fully', data: result });
});
exports.updateLeaveRequest = updateLeaveRequest;
const getLeaveRequest = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, leave_service_1.getLeaveRequestService)();
    if (!result) {
        return res.status(400).json({ message: 'error to fetch leaveRequest' });
    }
    res.status(200).json({ data: result, message: 'leaveRequest fetched success fully' });
});
exports.getLeaveRequest = getLeaveRequest;
const getLeaveRequestById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { leaveId } = req.params;
    const result = yield (0, leave_service_1.getLeaveRequestByIdService)(leaveId);
    if (!result) {
        return res.status(400).json({ message: 'error to fetch leaveRequest' });
    }
    res.status(200).json({ data: result, message: 'leaveRequest fetched success fully' });
});
exports.getLeaveRequestById = getLeaveRequestById;

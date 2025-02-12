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
exports.getLeaveRequestByIdService = exports.getLeaveRequestService = exports.updateLeaveRequestService = void 0;
const database_1 = require("../../config/database");
const Leave_1 = require("../../entities/Leave");
const updateLeaveRequestService = (name, reason, start_Date, end_Date, status, leaveRequestId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(leaveRequestId, 'this is leaver reauaslis s');
    const leaveRepo = database_1.AppDataSource.getRepository(Leave_1.Leave);
    const leave = yield leaveRepo.findOneBy({ id: leaveRequestId });
    if (!leave) {
        throw new Error('leaveRequest not found');
    }
    yield leaveRepo.update(leaveRequestId, {
        name: name || leave.name,
        reason: reason || leave.reason,
        status: status || leave.status
    });
    const updatedLeave = yield leaveRepo.findOneBy({ id: leave.id });
    return updatedLeave;
});
exports.updateLeaveRequestService = updateLeaveRequestService;
const getLeaveRequestService = () => __awaiter(void 0, void 0, void 0, function* () {
    const leaveRepo = database_1.AppDataSource.getRepository(Leave_1.Leave);
    const leave = yield leaveRepo.find();
    if (!leave) {
        throw new Error("some error to fetch the leaveRequests");
    }
    return leave;
});
exports.getLeaveRequestService = getLeaveRequestService;
const getLeaveRequestByIdService = (leaveId) => __awaiter(void 0, void 0, void 0, function* () {
    const leaveRepo = database_1.AppDataSource.getRepository(Leave_1.Leave);
    const leave = yield leaveRepo.findOneBy({ id: leaveId });
    if (!leave) {
        throw new Error("some error to fetch the leaveRequests");
    }
    return leave;
});
exports.getLeaveRequestByIdService = getLeaveRequestByIdService;

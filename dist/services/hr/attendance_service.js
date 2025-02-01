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
exports.getAttendanceServiceByUserId = exports.getAttendanceService = exports.updateAttendanceService = exports.addAttendanceService = void 0;
const database_1 = require("../../config/database");
const user_entity_1 = require("../../entities/user_entity");
const Attendance_1 = require("../../entities/Attendance");
const addAttendanceService = (userId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepo = database_1.AppDataSource.getRepository(user_entity_1.User);
    const attendanceRepo = database_1.AppDataSource.getRepository(Attendance_1.Attendance);
    const user = yield userRepo.findOneBy({ id: userId });
    if (!user) {
        throw new Error('user not found');
    }
    const newAttendance = attendanceRepo.create({
        status,
    });
    yield attendanceRepo.save(newAttendance);
    return newAttendance;
});
exports.addAttendanceService = addAttendanceService;
const updateAttendanceService = (attendanceId, status, date) => __awaiter(void 0, void 0, void 0, function* () {
    const attendanceRepo = database_1.AppDataSource.getRepository(Attendance_1.Attendance);
    const attendance = yield attendanceRepo.findOneBy({ id: attendanceId });
    if (!attendance) {
        throw new Error('attendance not found');
    }
    yield attendanceRepo.update(attendanceId, {
        status: status || attendance.status,
        date: date || attendance.date,
    });
    const updateAttendance = yield attendanceRepo.findOneBy({ id: attendanceId });
    if (!updateAttendance) {
        throw new Error('error to update attendance');
    }
    return updateAttendance;
});
exports.updateAttendanceService = updateAttendanceService;
const getAttendanceService = () => __awaiter(void 0, void 0, void 0, function* () {
    const attendanceRepo = database_1.AppDataSource.getRepository(Attendance_1.Attendance);
    const attendance = yield attendanceRepo.find();
    if (!attendance) {
        throw new Error('error to fetch attendance ');
    }
    return attendance;
});
exports.getAttendanceService = getAttendanceService;
const getAttendanceServiceByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const attendanceRepo = database_1.AppDataSource.getRepository(Attendance_1.Attendance);
    const attendance = yield attendanceRepo.find({
        where: { user: { id: userId } },
        relations: ["user"]
    });
    if (!attendance) {
        throw new Error('error to fetch attendance ');
    }
    return attendance;
});
exports.getAttendanceServiceByUserId = getAttendanceServiceByUserId;

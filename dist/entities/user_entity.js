"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const Leave_1 = require("./Leave");
const Branches_1 = require("./Branches");
const Sales_1 = require("./Sales");
const Attendance_1 = require("./Attendance");
const payroll_1 = require("./payroll");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Object)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Branches_1.Branches, (branch) => branch.users, { onDelete: "CASCADE" }) // Define the relationship with Tenant.
    ,
    (0, typeorm_1.JoinColumn)({ name: "branch_id" }) // Specifies the foreign key column.
    ,
    __metadata("design:type", Branches_1.Branches)
], User.prototype, "branch", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ["admin", "hr_manager", "staff_head", "staff"],
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ["sales", "inventory", "Finance", "customer_service"],
        nullable: true
    }),
    __metadata("design:type", String)
], User.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Leave_1.Leave, (leave) => leave.user),
    __metadata("design:type", Array)
], User.prototype, "leaves", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Sales_1.Sales, (sales) => sales.staff) // Link Sales to User
    ,
    __metadata("design:type", Array)
], User.prototype, "sales", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Attendance_1.Attendance, (attendance) => attendance.user) // Link Sales to User
    ,
    __metadata("design:type", Array)
], User.prototype, "attendance", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => payroll_1.payroll, (payroll) => payroll.employee_id),
    __metadata("design:type", Array)
], User.prototype, "payroll", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);

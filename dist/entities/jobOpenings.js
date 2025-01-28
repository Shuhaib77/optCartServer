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
exports.jobOpenings = void 0;
const typeorm_1 = require("typeorm");
const Branches_1 = require("./Branches");
let jobOpenings = class jobOpenings {
};
exports.jobOpenings = jobOpenings;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], jobOpenings.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], jobOpenings.prototype, "job_title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], jobOpenings.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], jobOpenings.prototype, "requirements", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], jobOpenings.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], jobOpenings.prototype, "salary_range", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", String)
], jobOpenings.prototype, "posted_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], jobOpenings.prototype, "closed_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Branches_1.Branches, (branches) => branches.job_Openings, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: 'branchId' }),
    __metadata("design:type", Branches_1.Branches)
], jobOpenings.prototype, "branch", void 0);
exports.jobOpenings = jobOpenings = __decorate([
    (0, typeorm_1.Entity)()
], jobOpenings);

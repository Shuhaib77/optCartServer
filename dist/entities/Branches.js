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
exports.Branches = void 0;
const typeorm_1 = require("typeorm");
const Tenant_1 = require("./Tenant");
const Product_1 = require("./Product");
const Leave_1 = require("./Leave");
const user_entity_1 = require("./user_entity");
const jobOpenings_1 = require("./jobOpenings");
const Sales_1 = require("./Sales");

let Branches = class Branches {
};
exports.Branches = Branches;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Branches.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Branches.prototype, "branch_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Branches.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Branches.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Branches.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tenant_1.Tenant, (tenent) => tenent.branches, { onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)({ name: "tenant_id" }),
    __metadata("design:type", Tenant_1.Tenant)
], Branches.prototype, "tenant", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.User, (user) => user.branch) // Establish the relationship with the User table.
    ,
    __metadata("design:type", Array)
], Branches.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Product_1.Product, (product) => product.branches),
    __metadata("design:type", Array)
], Branches.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Leave_1.Leave, (leave) => leave.branches),
    __metadata("design:type", Array)
], Branches.prototype, "leaves", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Sales_1.Sales, (sales) => sales.branches),
    __metadata("design:type", Array)
], Branches.prototype, "Sales", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => jobOpenings_1.jobOpenings, (jobOpenings) => jobOpenings.branch),
    __metadata("design:type", Array)
], Branches.prototype, "job_Openings", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Inventory_1.inventory, (inventory) => inventory.branches),
    __metadata("design:type", Inventory_1.inventory)
], Branches.prototype, "inventory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => InventoryAudits_1.inventoryAudit, (inventoryAudit) => inventoryAudit.branch),
    __metadata("design:type", Array)
], Branches.prototype, "inventory_audits", void 0);
exports.Branches = Branches = __decorate([
    (0, typeorm_1.Entity)()
], Branches);

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
exports.Sales = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user_entity");
//  import { Customer } from "./Customer";
const Product_1 = require("./Product");
const Branches_1 = require("./Branches");
let Sales = class Sales {
};
exports.Sales = Sales;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Sales.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.sales),
    (0, typeorm_1.JoinColumn)({ name: "staffId" }),
    __metadata("design:type", user_entity_1.User)
], Sales.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.Sales),
    (0, typeorm_1.JoinColumn)({ name: "productId" }),
    __metadata("design:type", Product_1.Product)
], Sales.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Branches_1.Branches, (branch) => branch.Sales),
    (0, typeorm_1.JoinColumn)({ name: "branchId" }),
    __metadata("design:type", Branches_1.Branches)
], Sales.prototype, "branches", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", nullable: false }),
    __metadata("design:type", Number)
], Sales.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", nullable: false }),
    __metadata("design:type", Number)
], Sales.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 20, default: "Pending" }),
    __metadata("design:type", String)
], Sales.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Sales.prototype, "sale_date", void 0);
exports.Sales = Sales = __decorate([
    (0, typeorm_1.Entity)()
], Sales);

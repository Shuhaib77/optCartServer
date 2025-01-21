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
exports.SalesReports = void 0;
const typeorm_1 = require("typeorm");
const Branches_1 = require("./Branches");
const Product_1 = require("./Product");
let SalesReports = class SalesReports {
};
exports.SalesReports = SalesReports;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], SalesReports.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Branches_1.Branches, (branches) => branches.SalesReports),
    (0, typeorm_1.JoinColumn)({ name: "branchId" }),
    __metadata("design:type", Branches_1.Branches)
], SalesReports.prototype, "branches", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.SalesReports),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", Product_1.Product)
], SalesReports.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], SalesReports.prototype, "quantity_sold", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', nullable: false }),
    __metadata("design:type", Number)
], SalesReports.prototype, "total_price", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], SalesReports.prototype, "date_of_sale", void 0);
exports.SalesReports = SalesReports = __decorate([
    (0, typeorm_1.Entity)()
], SalesReports);

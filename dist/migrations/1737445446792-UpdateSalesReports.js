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
exports.UpdateSalesReports1737445446792 = void 0;
class UpdateSalesReports1737445446792 {
    constructor() {
        this.name = 'UpdateSalesReports1737445446792';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_1e120df4ea9c802108f0190e54d"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "salesReportsId"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD "branchId" uuid`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD "productId" uuid`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD CONSTRAINT "FK_2d321ea45c2eb139e0d501d05bd" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD CONSTRAINT "FK_11efd9306a130701bc1f848108c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP CONSTRAINT "FK_11efd9306a130701bc1f848108c"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP CONSTRAINT "FK_2d321ea45c2eb139e0d501d05bd"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "productId"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "branchId"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "salesReportsId" uuid`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_1e120df4ea9c802108f0190e54d" FOREIGN KEY ("salesReportsId") REFERENCES "sales_reports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
}
exports.UpdateSalesReports1737445446792 = UpdateSalesReports1737445446792;

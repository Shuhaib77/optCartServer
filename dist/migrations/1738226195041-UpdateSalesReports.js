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
exports.UpdateSalesReports1738226195041 = void 0;
class UpdateSalesReports1738226195041 {
    constructor() {
        this.name = 'UpdateSalesReports1738226195041';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "quantity_sold"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "date_of_sale"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD "quantity" numeric NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD "status" character varying(20) NOT NULL DEFAULT 'Pending'`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD "sale_date" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD "staffId" uuid`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD CONSTRAINT "FK_891e7ec4ba328281a47a13a0b1c" FOREIGN KEY ("staffId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP CONSTRAINT "FK_891e7ec4ba328281a47a13a0b1c"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "staffId"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "sale_date"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "status"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "quantity"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD "date_of_sale" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD "quantity_sold" numeric NOT NULL`);
        });
    }
}
exports.UpdateSalesReports1738226195041 = UpdateSalesReports1738226195041;

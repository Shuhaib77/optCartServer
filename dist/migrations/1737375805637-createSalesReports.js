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
exports.CreateSalesReports1737375805637 = void 0;
class CreateSalesReports1737375805637 {
    constructor() {
        this.name = 'CreateSalesReports1737375805637';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "sales_reports" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity_sold" numeric NOT NULL, "total_price" numeric NOT NULL, "date_of_sale" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_dfa39719bf5ca1dea7011f8e613" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "salesReportsId" uuid`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_1e120df4ea9c802108f0190e54d" FOREIGN KEY ("salesReportsId") REFERENCES "sales_reports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_1e120df4ea9c802108f0190e54d"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "salesReportsId"`);
            yield queryRunner.query(`DROP TABLE "sales_reports"`);
        });
    }
}
exports.CreateSalesReports1737375805637 = CreateSalesReports1737375805637;

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
exports.CreateSales1738229396593 = void 0;
class CreateSales1738229396593 {
    constructor() {
        this.name = 'CreateSales1738229396593';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "sales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" numeric NOT NULL, "total_price" numeric NOT NULL, "status" character varying(20) NOT NULL DEFAULT 'Pending', "sale_date" TIMESTAMP NOT NULL DEFAULT now(), "staffId" uuid, "productId" uuid, "branchId" uuid, CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_b0cb520fe3596fb04e8dc7d6415" FOREIGN KEY ("staffId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_58de77cc0543589490a33558b8e" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_3025cd80c0a8de190072940e10f" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_3025cd80c0a8de190072940e10f"`);
            yield queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_58de77cc0543589490a33558b8e"`);
            yield queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_b0cb520fe3596fb04e8dc7d6415"`);
            yield queryRunner.query(`DROP TABLE "sales"`);
        });
    }
}
exports.CreateSales1738229396593 = CreateSales1738229396593;

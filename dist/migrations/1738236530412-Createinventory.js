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
exports.Createinventory1738236530412 = void 0;
class Createinventory1738236530412 {
    constructor() {
        this.name = 'Createinventory1738236530412';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_name" character varying NOT NULL, "about_product" character varying NOT NULL, "stock_leval" integer NOT NULL, "price" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "inventory_audit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "audit_date" TIMESTAMP NOT NULL, "Discrepancies" jsonb NOT NULL, "productId" uuid, "branchId" uuid, CONSTRAINT "PK_1eafabe866b4aec407d0fb634be" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "branches" ADD "inventoryId" uuid`);
            yield queryRunner.query(`ALTER TABLE "inventory_audit" ADD CONSTRAINT "FK_3af423dac0c69bc570ed3c408a0" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "inventory_audit" ADD CONSTRAINT "FK_8495354d26dd7b15bc4036bd5c7" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "branches" ADD CONSTRAINT "FK_3b3d82e260eb587dd8416eb6d2e" FOREIGN KEY ("inventoryId") REFERENCES "inventory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "branches" DROP CONSTRAINT "FK_3b3d82e260eb587dd8416eb6d2e"`);
            yield queryRunner.query(`ALTER TABLE "inventory_audit" DROP CONSTRAINT "FK_8495354d26dd7b15bc4036bd5c7"`);
            yield queryRunner.query(`ALTER TABLE "inventory_audit" DROP CONSTRAINT "FK_3af423dac0c69bc570ed3c408a0"`);
            yield queryRunner.query(`ALTER TABLE "branches" DROP COLUMN "inventoryId"`);
            yield queryRunner.query(`DROP TABLE "inventory_audit"`);
            yield queryRunner.query(`DROP TABLE "inventory"`);
        });
    }
}
exports.Createinventory1738236530412 = Createinventory1738236530412;

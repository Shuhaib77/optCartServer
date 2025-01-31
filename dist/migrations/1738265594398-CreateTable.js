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
exports.CreateTable1738265594398 = void 0;
class CreateTable1738265594398 {
    constructor() {
        this.name = 'CreateTable1738265594398';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_name" character varying NOT NULL, "about_product" character varying NOT NULL, "stock_leval" integer NOT NULL, "price" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "inventory_audit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "audit_date" TIMESTAMP NOT NULL, "Discrepancies" jsonb NOT NULL, CONSTRAINT "PK_1eafabe866b4aec407d0fb634be" PRIMARY KEY ("id"))`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`DROP TABLE "inventory_audit"`);
            yield queryRunner.query(`DROP TABLE "inventory"`);
        });
    }
}
exports.CreateTable1738265594398 = CreateTable1738265594398;

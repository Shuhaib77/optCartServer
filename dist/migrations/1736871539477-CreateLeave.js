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
exports.CreateLeave1736871539477 = void 0;
class CreateLeave1736871539477 {
    constructor() {
        this.name = 'CreateLeave1736871539477';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "tenant_id" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "leave" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL DEFAULT '0', "description" character varying, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_501f6ea368365d2a40b1660e16b" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "tenant" DROP CONSTRAINT "UQ_97b9c4dae58b30f5bd875f241ab"`);
            yield queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "domain"`);
            yield queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "is_delete"`);
            yield queryRunner.query(`ALTER TABLE "tenant" ADD "is_deleted" boolean NOT NULL DEFAULT false`);
            yield queryRunner.query(`ALTER TABLE "tenant" ADD CONSTRAINT "UQ_5ac9e1f45683c63b0587d1b43a9" UNIQUE ("created_at")`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ae07d48a61ca20ab3586d397a71" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ae07d48a61ca20ab3586d397a71"`);
            yield queryRunner.query(`ALTER TABLE "tenant" DROP CONSTRAINT "UQ_5ac9e1f45683c63b0587d1b43a9"`);
            yield queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "is_deleted"`);
            yield queryRunner.query(`ALTER TABLE "tenant" ADD "is_delete" character varying(200) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "tenant" ADD "domain" character varying(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "tenant" ADD CONSTRAINT "UQ_97b9c4dae58b30f5bd875f241ab" UNIQUE ("domain")`);
            yield queryRunner.query(`DROP TABLE "leave"`);
            yield queryRunner.query(`DROP TABLE "user"`);
        });
    }
}
exports.CreateLeave1736871539477 = CreateLeave1736871539477;

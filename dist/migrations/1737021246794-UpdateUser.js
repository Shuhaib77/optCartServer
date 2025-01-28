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
exports.UpdateUser1737021246794 = void 0;
class UpdateUser1737021246794 {
    constructor() {
        this.name = 'UpdateUser1737021246794';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_4e8d6d8cfc839503d9994b9c509"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_87e9580b7fe615304e1567a1534"`);
            yield queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "tenant_id" TO "branch_id"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "price"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "description"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "tenant_id"`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD "reason" character varying`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD "status" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD "branch_id" uuid`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD "user_id" uuid`);
            yield queryRunner.query(`ALTER TABLE "tenant" ADD "password" character varying(255) NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "tenant" ADD CONSTRAINT "UQ_7a87aaaf2a608eb2fba2ea6a42d" UNIQUE ("password")`);
            yield queryRunner.query(`ALTER TABLE "tenant" DROP CONSTRAINT "UQ_5ac9e1f45683c63b0587d1b43a9"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "branch_id"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "branch_id" uuid`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_df7717a2f500d8e0bcc7a372225" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_bd5bb1ea0d8b3498b0e52e51e65" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_47ec9f981fac28851de1d6bd8db" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_47ec9f981fac28851de1d6bd8db"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_bd5bb1ea0d8b3498b0e52e51e65"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_df7717a2f500d8e0bcc7a372225"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "branch_id"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "branch_id" integer`);
            yield queryRunner.query(`ALTER TABLE "tenant" ADD CONSTRAINT "UQ_5ac9e1f45683c63b0587d1b43a9" UNIQUE ("created_at")`);
            yield queryRunner.query(`ALTER TABLE "tenant" DROP CONSTRAINT "UQ_7a87aaaf2a608eb2fba2ea6a42d"`);
            yield queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "password"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "user_id"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "branch_id"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "status"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "reason"`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD "tenant_id" integer`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD "description" character varying`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD "price" numeric(10,2) NOT NULL DEFAULT '0'`);
            yield queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "branch_id" TO "tenant_id"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_87e9580b7fe615304e1567a1534" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_4e8d6d8cfc839503d9994b9c509" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
}
exports.UpdateUser1737021246794 = UpdateUser1737021246794;

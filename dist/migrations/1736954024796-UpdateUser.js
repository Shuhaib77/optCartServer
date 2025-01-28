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
exports.UpdateUser1736954024796 = void 0;
class UpdateUser1736954024796 {
    constructor() {
        this.name = 'UpdateUser1736954024796';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'hr_manager', 'staff_head', 'staff')`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD "tenant_id" integer`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "quantity" numeric NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "tenant_id" integer`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_4e8d6d8cfc839503d9994b9c509" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_87e9580b7fe615304e1567a1534" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_87e9580b7fe615304e1567a1534"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_4e8d6d8cfc839503d9994b9c509"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "tenant_id"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "quantity"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "tenant_id"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
            yield queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        });
    }
}
exports.UpdateUser1736954024796 = UpdateUser1736954024796;

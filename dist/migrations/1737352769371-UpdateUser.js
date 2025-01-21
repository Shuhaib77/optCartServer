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
exports.UpdateUser1737352769371 = void 0;
class UpdateUser1737352769371 {
    constructor() {
        this.name = 'UpdateUser1737352769371';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ae07d48a61ca20ab3586d397a71"`);
            yield queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "tenant_id" TO "branch_id"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "branch_id"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "branch_id" uuid`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_09210cab0384d041d5f3b337e8e" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_09210cab0384d041d5f3b337e8e"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "branch_id"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "branch_id" integer`);
            yield queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "branch_id" TO "tenant_id"`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ae07d48a61ca20ab3586d397a71" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
}
exports.UpdateUser1737352769371 = UpdateUser1737352769371;

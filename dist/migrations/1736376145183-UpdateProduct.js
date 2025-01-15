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
exports.UpdateProduct1736376145183 = void 0;
class UpdateProduct1736376145183 {
    constructor() {
        this.name = 'UpdateProduct1736376145183';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "isActive"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "createdAt"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updatedAt"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "is_active" boolean NOT NULL DEFAULT true`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "updated_at"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "created_at"`);
            yield queryRunner.query(`ALTER TABLE "product" DROP COLUMN "is_active"`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
            yield queryRunner.query(`ALTER TABLE "product" ADD "isActive" boolean NOT NULL DEFAULT true`);
        });
    }
}
exports.UpdateProduct1736376145183 = UpdateProduct1736376145183;

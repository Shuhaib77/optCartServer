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
exports.UpdateUser1738220652014 = void 0;
class UpdateUser1738220652014 {
    constructor() {
        this.name = 'UpdateUser1738220652014';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TYPE "public"."user_category_enum" AS ENUM('sales', 'inventory', 'Finance', 'customer_service')`);
            yield queryRunner.query(`ALTER TABLE "user" ADD "category" "public"."user_category_enum"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "user" DROP COLUMN "category"`);
            yield queryRunner.query(`DROP TYPE "public"."user_category_enum"`);
        });
    }
}
exports.UpdateUser1738220652014 = UpdateUser1738220652014;

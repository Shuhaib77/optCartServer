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
exports.UpdatejobOpenings1737453909293 = void 0;
class UpdatejobOpenings1737453909293 {
    constructor() {
        this.name = 'UpdatejobOpenings1737453909293';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "job_openings" ADD "location" character varying NOT NULL`);
            yield queryRunner.query(`ALTER TABLE "job_openings" ADD "salary_range" character varying NOT NULL`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "job_openings" DROP COLUMN "salary_range"`);
            yield queryRunner.query(`ALTER TABLE "job_openings" DROP COLUMN "location"`);
        });
    }
}
exports.UpdatejobOpenings1737453909293 = UpdatejobOpenings1737453909293;

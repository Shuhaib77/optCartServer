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
exports.CreatejobOpenings1737446213768 = void 0;
class CreatejobOpenings1737446213768 {
    constructor() {
        this.name = 'CreatejobOpenings1737446213768';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "job_openings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "job_title" character varying NOT NULL, "description" character varying NOT NULL, "requirements" character varying NOT NULL, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), "closed_at" date NOT NULL, "branchId" uuid, CONSTRAINT "PK_6888a7e6783262ac38387fc3e8d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "job_openings" ADD CONSTRAINT "FK_aa204054feb1d1267241d753c02" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "job_openings" DROP CONSTRAINT "FK_aa204054feb1d1267241d753c02"`);
            yield queryRunner.query(`DROP TABLE "job_openings"`);
        });
    }
}
exports.CreatejobOpenings1737446213768 = CreatejobOpenings1737446213768;

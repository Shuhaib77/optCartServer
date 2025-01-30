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
exports.CreateTenant1737979045829 = void 0;
class CreateTenant1737979045829 {
    constructor() {
        this.name = 'CreateTenant1737979045829';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "policies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tenant_id" integer, CONSTRAINT "PK_603e09f183df0108d8695c57e28" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "tenant" ("tenant_id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, "created_by" character varying(200) NOT NULL, CONSTRAINT "UQ_7a87aaaf2a608eb2fba2ea6a42d" UNIQUE ("password"), CONSTRAINT "PK_4e7cb4e84f82aa7842a0bafc673" PRIMARY KEY ("tenant_id"))`);
            yield queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'hr_manager', 'staff_head', 'staff')`);
            yield queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "leave" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "reason" character varying, "status" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, "user_id" uuid, CONSTRAINT "PK_501f6ea368365d2a40b1660e16b" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "sales_reports" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity_sold" numeric NOT NULL, "total_price" numeric NOT NULL, "date_of_sale" TIMESTAMP NOT NULL DEFAULT now(), "branchId" uuid, "productId" uuid, CONSTRAINT "PK_dfa39719bf5ca1dea7011f8e613" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "job_openings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "job_title" character varying NOT NULL, "description" character varying NOT NULL, "requirements" character varying NOT NULL, "location" character varying NOT NULL, "salary_range" character varying NOT NULL, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), "closed_at" date NOT NULL, "branchId" uuid, CONSTRAINT "PK_6888a7e6783262ac38387fc3e8d" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "branches" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "branch_name" character varying NOT NULL, "location" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tenant_id" integer, CONSTRAINT "PK_7f37d3b42defea97f1df0d19535" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL DEFAULT '0', "description" character varying, "quantity" numeric NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "policies" ADD CONSTRAINT "FK_7c1e91061ee12ae5918c9cae320" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_09210cab0384d041d5f3b337e8e" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_df7717a2f500d8e0bcc7a372225" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_bd5bb1ea0d8b3498b0e52e51e65" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD CONSTRAINT "FK_2d321ea45c2eb139e0d501d05bd" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" ADD CONSTRAINT "FK_11efd9306a130701bc1f848108c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "job_openings" ADD CONSTRAINT "FK_aa204054feb1d1267241d753c02" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "branches" ADD CONSTRAINT "FK_fda619979f40a6a44fc9baf02c3" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_47ec9f981fac28851de1d6bd8db" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_47ec9f981fac28851de1d6bd8db"`);
            yield queryRunner.query(`ALTER TABLE "branches" DROP CONSTRAINT "FK_fda619979f40a6a44fc9baf02c3"`);
            yield queryRunner.query(`ALTER TABLE "job_openings" DROP CONSTRAINT "FK_aa204054feb1d1267241d753c02"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP CONSTRAINT "FK_11efd9306a130701bc1f848108c"`);
            yield queryRunner.query(`ALTER TABLE "sales_reports" DROP CONSTRAINT "FK_2d321ea45c2eb139e0d501d05bd"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_bd5bb1ea0d8b3498b0e52e51e65"`);
            yield queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_df7717a2f500d8e0bcc7a372225"`);
            yield queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_09210cab0384d041d5f3b337e8e"`);
            yield queryRunner.query(`ALTER TABLE "policies" DROP CONSTRAINT "FK_7c1e91061ee12ae5918c9cae320"`);
            yield queryRunner.query(`DROP TABLE "product"`);
            yield queryRunner.query(`DROP TABLE "branches"`);
            yield queryRunner.query(`DROP TABLE "job_openings"`);
            yield queryRunner.query(`DROP TABLE "sales_reports"`);
            yield queryRunner.query(`DROP TABLE "leave"`);
            yield queryRunner.query(`DROP TABLE "user"`);
            yield queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
            yield queryRunner.query(`DROP TABLE "tenant"`);
            yield queryRunner.query(`DROP TABLE "policies"`);
        });
    }
}
exports.CreateTenant1737979045829 = CreateTenant1737979045829;

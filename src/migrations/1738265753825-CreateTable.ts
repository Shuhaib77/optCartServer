import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1738265753825 implements MigrationInterface {
    name = 'CreateTable1738265753825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "policies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tenant_id" integer, CONSTRAINT "PK_603e09f183df0108d8695c57e28" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tenant" ("tenant_id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_deleted" boolean NOT NULL DEFAULT false, "created_by" character varying(200) NOT NULL, CONSTRAINT "UQ_7a87aaaf2a608eb2fba2ea6a42d" UNIQUE ("password"), CONSTRAINT "PK_4e7cb4e84f82aa7842a0bafc673" PRIMARY KEY ("tenant_id"))`);
        await queryRunner.query(`CREATE TABLE "sales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" numeric NOT NULL, "total_price" numeric NOT NULL, "status" character varying(20) NOT NULL DEFAULT 'Pending', "sale_date" TIMESTAMP NOT NULL DEFAULT now(), "staffId" uuid, "productId" uuid, "branchId" uuid, CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'hr_manager', 'staff_head', 'staff')`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" "public"."user_role_enum" NOT NULL, "category" "public"."user_category_enum", "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "leave" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "reason" character varying, "status" character varying NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, "user_id" uuid, CONSTRAINT "PK_501f6ea368365d2a40b1660e16b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "job_openings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "job_title" character varying NOT NULL, "description" character varying NOT NULL, "requirements" character varying NOT NULL, "location" character varying NOT NULL, "salary_range" character varying NOT NULL, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), "closed_at" date NOT NULL, "branchId" uuid, CONSTRAINT "PK_6888a7e6783262ac38387fc3e8d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "branches" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "branch_name" character varying NOT NULL, "location" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "tenant_id" integer, CONSTRAINT "PK_7f37d3b42defea97f1df0d19535" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL DEFAULT '0', "description" character varying, "quantity" numeric NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "branch_id" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_name" character varying NOT NULL, "about_product" character varying NOT NULL, "stock_leval" integer NOT NULL, "price" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inventory_audit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "audit_date" TIMESTAMP NOT NULL, "Discrepancies" jsonb NOT NULL, CONSTRAINT "PK_1eafabe866b4aec407d0fb634be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "policies" ADD CONSTRAINT "FK_7c1e91061ee12ae5918c9cae320" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_b0cb520fe3596fb04e8dc7d6415" FOREIGN KEY ("staffId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_58de77cc0543589490a33558b8e" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_3025cd80c0a8de190072940e10f" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_09210cab0384d041d5f3b337e8e" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_df7717a2f500d8e0bcc7a372225" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_bd5bb1ea0d8b3498b0e52e51e65" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "job_openings" ADD CONSTRAINT "FK_aa204054feb1d1267241d753c02" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branches" ADD CONSTRAINT "FK_fda619979f40a6a44fc9baf02c3" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_47ec9f981fac28851de1d6bd8db" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_47ec9f981fac28851de1d6bd8db"`);
        await queryRunner.query(`ALTER TABLE "branches" DROP CONSTRAINT "FK_fda619979f40a6a44fc9baf02c3"`);
        await queryRunner.query(`ALTER TABLE "job_openings" DROP CONSTRAINT "FK_aa204054feb1d1267241d753c02"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_bd5bb1ea0d8b3498b0e52e51e65"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_df7717a2f500d8e0bcc7a372225"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_09210cab0384d041d5f3b337e8e"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_3025cd80c0a8de190072940e10f"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_58de77cc0543589490a33558b8e"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_b0cb520fe3596fb04e8dc7d6415"`);
        await queryRunner.query(`ALTER TABLE "policies" DROP CONSTRAINT "FK_7c1e91061ee12ae5918c9cae320"`);
        await queryRunner.query(`DROP TABLE "inventory_audit"`);
        await queryRunner.query(`DROP TABLE "inventory"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "branches"`);
        await queryRunner.query(`DROP TABLE "job_openings"`);
        await queryRunner.query(`DROP TABLE "leave"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
        await queryRunner.query(`DROP TABLE "sales"`);
        await queryRunner.query(`DROP TABLE "tenant"`);
        await queryRunner.query(`DROP TABLE "policies"`);
    }

}

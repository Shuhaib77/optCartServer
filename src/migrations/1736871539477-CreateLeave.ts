import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateLeave1736871539477 implements MigrationInterface {
    name = 'CreateLeave1736871539477'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "tenant_id" integer, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "leave" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL DEFAULT '0', "description" character varying, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_501f6ea368365d2a40b1660e16b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "tenant" DROP CONSTRAINT "UQ_97b9c4dae58b30f5bd875f241ab"`);
        await queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "domain"`);
        await queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "is_delete"`);
        await queryRunner.query(`ALTER TABLE "tenant" ADD "is_deleted" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "tenant" ADD CONSTRAINT "UQ_5ac9e1f45683c63b0587d1b43a9" UNIQUE ("created_at")`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ae07d48a61ca20ab3586d397a71" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ae07d48a61ca20ab3586d397a71"`);
        await queryRunner.query(`ALTER TABLE "tenant" DROP CONSTRAINT "UQ_5ac9e1f45683c63b0587d1b43a9"`);
        await queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "is_deleted"`);
        await queryRunner.query(`ALTER TABLE "tenant" ADD "is_delete" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tenant" ADD "domain" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tenant" ADD CONSTRAINT "UQ_97b9c4dae58b30f5bd875f241ab" UNIQUE ("domain")`);
        await queryRunner.query(`DROP TABLE "leave"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}

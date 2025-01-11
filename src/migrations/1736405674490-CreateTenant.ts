import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTenant1736405674490 implements MigrationInterface {
    name = 'CreateTenant1736405674490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tenant" ("tenant_id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "domain" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "is_delete" character varying(200) NOT NULL, "created_by" character varying(200) NOT NULL, CONSTRAINT "UQ_97b9c4dae58b30f5bd875f241ab" UNIQUE ("domain"), CONSTRAINT "PK_4e7cb4e84f82aa7842a0bafc673" PRIMARY KEY ("tenant_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tenant"`);
    }

}

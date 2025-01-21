import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1737352769371 implements MigrationInterface {
    name = 'UpdateUser1737352769371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_ae07d48a61ca20ab3586d397a71"`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "tenant_id" TO "branch_id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "branch_id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "branch_id" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_09210cab0384d041d5f3b337e8e" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_09210cab0384d041d5f3b337e8e"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "branch_id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "branch_id" integer`);
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "branch_id" TO "tenant_id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_ae07d48a61ca20ab3586d397a71" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}

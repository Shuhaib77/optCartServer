import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdatejobOpenings1737453909293 implements MigrationInterface {
    name = 'UpdatejobOpenings1737453909293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job_openings" ADD "location" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "job_openings" ADD "salary_range" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job_openings" DROP COLUMN "salary_range"`);
        await queryRunner.query(`ALTER TABLE "job_openings" DROP COLUMN "location"`);
    }

}

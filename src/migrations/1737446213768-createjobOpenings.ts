import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatejobOpenings1737446213768 implements MigrationInterface {
    name = 'CreatejobOpenings1737446213768'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "job_openings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "job_title" character varying NOT NULL, "description" character varying NOT NULL, "requirements" character varying NOT NULL, "posted_at" TIMESTAMP NOT NULL DEFAULT now(), "closed_at" date NOT NULL, "branchId" uuid, CONSTRAINT "PK_6888a7e6783262ac38387fc3e8d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "job_openings" ADD CONSTRAINT "FK_aa204054feb1d1267241d753c02" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "job_openings" DROP CONSTRAINT "FK_aa204054feb1d1267241d753c02"`);
        await queryRunner.query(`DROP TABLE "job_openings"`);
    }

}

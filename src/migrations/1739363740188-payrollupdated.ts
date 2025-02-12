import { MigrationInterface, QueryRunner } from "typeorm";

export class Payrollupdated1739363740188 implements MigrationInterface {
    name = 'Payrollupdated1739363740188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payroll" ADD "employeeIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "payroll" ADD CONSTRAINT "FK_00d7247da75436e046c0ae8cbba" FOREIGN KEY ("employeeIdId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "payroll" DROP CONSTRAINT "FK_00d7247da75436e046c0ae8cbba"`);
        await queryRunner.query(`ALTER TABLE "payroll" DROP COLUMN "employeeIdId"`);
    }
}
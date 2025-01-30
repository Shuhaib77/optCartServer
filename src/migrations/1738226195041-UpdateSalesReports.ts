import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateSalesReports1738226195041 implements MigrationInterface {
    name = 'UpdateSalesReports1738226195041'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "quantity_sold"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "date_of_sale"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD "quantity" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD "status" character varying(20) NOT NULL DEFAULT 'Pending'`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD "sale_date" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD "staffId" uuid`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD CONSTRAINT "FK_891e7ec4ba328281a47a13a0b1c" FOREIGN KEY ("staffId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP CONSTRAINT "FK_891e7ec4ba328281a47a13a0b1c"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "staffId"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "sale_date"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD "date_of_sale" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD "quantity_sold" numeric NOT NULL`);
    }

}

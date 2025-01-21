import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSalesReports1737375805637 implements MigrationInterface {
    name = 'CreateSalesReports1737375805637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales_reports" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity_sold" numeric NOT NULL, "total_price" numeric NOT NULL, "date_of_sale" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_dfa39719bf5ca1dea7011f8e613" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD "salesReportsId" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_1e120df4ea9c802108f0190e54d" FOREIGN KEY ("salesReportsId") REFERENCES "sales_reports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_1e120df4ea9c802108f0190e54d"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "salesReportsId"`);
        await queryRunner.query(`DROP TABLE "sales_reports"`);
    }

}

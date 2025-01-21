import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateSalesReports1737445446792 implements MigrationInterface {
    name = 'UpdateSalesReports1737445446792'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_1e120df4ea9c802108f0190e54d"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "salesReportsId"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD "branchId" uuid`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD "productId" uuid`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD CONSTRAINT "FK_2d321ea45c2eb139e0d501d05bd" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales_reports" ADD CONSTRAINT "FK_11efd9306a130701bc1f848108c" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP CONSTRAINT "FK_11efd9306a130701bc1f848108c"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP CONSTRAINT "FK_2d321ea45c2eb139e0d501d05bd"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "productId"`);
        await queryRunner.query(`ALTER TABLE "sales_reports" DROP COLUMN "branchId"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "salesReportsId" uuid`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_1e120df4ea9c802108f0190e54d" FOREIGN KEY ("salesReportsId") REFERENCES "sales_reports"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

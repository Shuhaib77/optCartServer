import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1738220652014 implements MigrationInterface {
    name = 'UpdateUser1738220652014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_category_enum" AS ENUM('sales', 'inventory', 'Finance', 'customer_service')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "category" "public"."user_category_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "category"`);
        await queryRunner.query(`DROP TYPE "public"."user_category_enum"`);
    }

}

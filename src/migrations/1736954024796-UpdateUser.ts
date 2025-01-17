import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1736954024796 implements MigrationInterface {
    name = 'UpdateUser1736954024796'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'hr_manager', 'staff_head', 'staff')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "role" "public"."user_role_enum" NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "leave" ADD "tenant_id" integer`);
        await queryRunner.query(`ALTER TABLE "product" ADD "quantity" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "tenant_id" integer`);
        await queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_4e8d6d8cfc839503d9994b9c509" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_87e9580b7fe615304e1567a1534" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_87e9580b7fe615304e1567a1534"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_4e8d6d8cfc839503d9994b9c509"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "tenant_id"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "tenant_id"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
        await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
    }

}

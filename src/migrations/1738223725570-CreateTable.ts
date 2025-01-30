import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1738223725570 implements MigrationInterface {
    name = 'CreateTable1738223725570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_name" character varying NOT NULL, "about_product" character varying NOT NULL, "stock_leval" integer NOT NULL, "price" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inventory_audit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "audit_date" TIMESTAMP NOT NULL, "Discrepancies" jsonb NOT NULL, "productId" uuid, "branchId" uuid, CONSTRAINT "PK_1eafabe866b4aec407d0fb634be" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "category"`);
        await queryRunner.query(`DROP TYPE "public"."user_category_enum"`);
        await queryRunner.query(`ALTER TABLE "branches" ADD "inventoryId" uuid`);
        await queryRunner.query(`ALTER TABLE "inventory_audit" ADD CONSTRAINT "FK_3af423dac0c69bc570ed3c408a0" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "inventory_audit" ADD CONSTRAINT "FK_8495354d26dd7b15bc4036bd5c7" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "branches" ADD CONSTRAINT "FK_3b3d82e260eb587dd8416eb6d2e" FOREIGN KEY ("inventoryId") REFERENCES "inventory"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "branches" DROP CONSTRAINT "FK_3b3d82e260eb587dd8416eb6d2e"`);
        await queryRunner.query(`ALTER TABLE "inventory_audit" DROP CONSTRAINT "FK_8495354d26dd7b15bc4036bd5c7"`);
        await queryRunner.query(`ALTER TABLE "inventory_audit" DROP CONSTRAINT "FK_3af423dac0c69bc570ed3c408a0"`);
        await queryRunner.query(`ALTER TABLE "branches" DROP COLUMN "inventoryId"`);
        await queryRunner.query(`CREATE TYPE "public"."user_category_enum" AS ENUM('Finance', 'customer_service', 'inventory', 'sales')`);
        await queryRunner.query(`ALTER TABLE "user" ADD "category" "public"."user_category_enum"`);
        await queryRunner.query(`DROP TABLE "inventory_audit"`);
        await queryRunner.query(`DROP TABLE "inventory"`);
    }

}

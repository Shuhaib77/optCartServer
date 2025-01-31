import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTable1738265594398 implements MigrationInterface {
    name = 'CreateTable1738265594398'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "inventory" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product_name" character varying NOT NULL, "about_product" character varying NOT NULL, "stock_leval" integer NOT NULL, "price" integer NOT NULL, "is_active" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_82aa5da437c5bbfb80703b08309" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "inventory_audit" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "audit_date" TIMESTAMP NOT NULL, "Discrepancies" jsonb NOT NULL, CONSTRAINT "PK_1eafabe866b4aec407d0fb634be" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "inventory_audit"`);
        await queryRunner.query(`DROP TABLE "inventory"`);
    }

}

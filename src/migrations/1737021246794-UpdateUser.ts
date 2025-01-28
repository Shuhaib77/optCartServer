import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUser1737021246794 implements MigrationInterface {
    name = 'UpdateUser1737021246794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_4e8d6d8cfc839503d9994b9c509"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_87e9580b7fe615304e1567a1534"`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "tenant_id" TO "branch_id"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "tenant_id"`);
        await queryRunner.query(`ALTER TABLE "leave" ADD "reason" character varying`);
        await queryRunner.query(`ALTER TABLE "leave" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "leave" ADD "branch_id" uuid`);
        await queryRunner.query(`ALTER TABLE "leave" ADD "user_id" uuid`);
        await queryRunner.query(`ALTER TABLE "tenant" ADD "password" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tenant" ADD CONSTRAINT "UQ_7a87aaaf2a608eb2fba2ea6a42d" UNIQUE ("password")`);
        await queryRunner.query(`ALTER TABLE "tenant" DROP CONSTRAINT "UQ_5ac9e1f45683c63b0587d1b43a9"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "branch_id"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "branch_id" uuid`);
        await queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_df7717a2f500d8e0bcc7a372225" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_bd5bb1ea0d8b3498b0e52e51e65" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_47ec9f981fac28851de1d6bd8db" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_47ec9f981fac28851de1d6bd8db"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_bd5bb1ea0d8b3498b0e52e51e65"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP CONSTRAINT "FK_df7717a2f500d8e0bcc7a372225"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "branch_id"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "branch_id" integer`);
        await queryRunner.query(`ALTER TABLE "tenant" ADD CONSTRAINT "UQ_5ac9e1f45683c63b0587d1b43a9" UNIQUE ("created_at")`);
        await queryRunner.query(`ALTER TABLE "tenant" DROP CONSTRAINT "UQ_7a87aaaf2a608eb2fba2ea6a42d"`);
        await queryRunner.query(`ALTER TABLE "tenant" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "branch_id"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "leave" DROP COLUMN "reason"`);
        await queryRunner.query(`ALTER TABLE "leave" ADD "tenant_id" integer`);
        await queryRunner.query(`ALTER TABLE "leave" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "leave" ADD "price" numeric(10,2) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "product" RENAME COLUMN "branch_id" TO "tenant_id"`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_87e9580b7fe615304e1567a1534" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "leave" ADD CONSTRAINT "FK_4e8d6d8cfc839503d9994b9c509" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("tenant_id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}

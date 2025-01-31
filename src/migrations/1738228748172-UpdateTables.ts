import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTables1738228748172 implements MigrationInterface {
    name = 'UpdateTables1738228748172'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sales" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" numeric NOT NULL, "total_price" numeric NOT NULL, "status" character varying(20) NOT NULL DEFAULT 'Pending', "sale_date" TIMESTAMP NOT NULL DEFAULT now(), "staffId" uuid, "productId" uuid, "branchId" uuid, CONSTRAINT "PK_4f0bc990ae81dba46da680895ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_b0cb520fe3596fb04e8dc7d6415" FOREIGN KEY ("staffId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_58de77cc0543589490a33558b8e" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sales" ADD CONSTRAINT "FK_3025cd80c0a8de190072940e10f" FOREIGN KEY ("branchId") REFERENCES "branches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_3025cd80c0a8de190072940e10f"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_58de77cc0543589490a33558b8e"`);
        await queryRunner.query(`ALTER TABLE "sales" DROP CONSTRAINT "FK_b0cb520fe3596fb04e8dc7d6415"`);
        await queryRunner.query(`DROP TABLE "sales"`);
    }

}

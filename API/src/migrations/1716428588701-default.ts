import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1716428588701 implements MigrationInterface {
    name = 'Default1716428588701'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
    }

}

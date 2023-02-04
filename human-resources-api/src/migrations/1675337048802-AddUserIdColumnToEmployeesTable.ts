import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserIdColumnToEmployeesTable1675337048802
  implements MigrationInterface
{
  name = 'AddUserIdColumnToEmployeesTable1675337048802';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`employees\` ADD COLUMN \`user_id\` varchar(36) NOT NULL AFTER \`id\``,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`employees\` DROP COLUMN \`user_id\``,
    );
  }
}

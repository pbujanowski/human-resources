import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEmployeesTable1666432516172 implements MigrationInterface {
  name = 'CreateEmployeesTable1666432516172';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`employees\` (\`id\` varchar(36) NOT NULL, \`first_name\` varchar(50) NOT NULL, \`last_name\` varchar(50) NOT NULL, \`personal_id_number\` varchar(50) NOT NULL, \`birthdate\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`employees\``);
  }
}

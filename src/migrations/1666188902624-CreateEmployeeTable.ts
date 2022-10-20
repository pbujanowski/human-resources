import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEmployeeTable1666188902624 implements MigrationInterface {
  name = 'CreateEmployeeTable1666188902624';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`employee\` (\`id\` varchar(36) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`personalIdNumber\` varchar(255) NOT NULL, \`birthdate\` date NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`employee\``);
  }
}

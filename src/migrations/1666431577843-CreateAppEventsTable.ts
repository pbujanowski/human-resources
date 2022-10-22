import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAppEventsTable1666431577843 implements MigrationInterface {
  name = 'CreateAppEventsTable1666431577843';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`app_events\` (\`id\` varchar(36) NOT NULL, \`name\` varchar(50) NOT NULL, \`content\` text NOT NULL, \`occurence_date\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`app_events\``);
  }
}

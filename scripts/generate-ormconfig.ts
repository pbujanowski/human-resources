/* eslint-disable @typescript-eslint/no-var-requires */
const { writeFile } = require('fs');

require('dotenv').config();

const fileContent = `/* eslint-disable @typescript-eslint/no-var-requires */
const { DataSource } = require('typeorm');
module.exports.default = new DataSource({
  type: 'mysql',
  host: '${process.env.DATABASE_HOST}',
  port: ${process.env.DATABASE_PORT},
  username: '${process.env.DATABASE_USER_NAME}',
  password: '${process.env.DATABASE_USER_PASSWORD}',
  database: '${process.env.DATABASE_NAME}',
  entities: ['dist/**/entities/**/*{.ts,.js}'],
  migrations: ['dist/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'migrations',
});
`;
const targetPath = './ormconfig.js';

writeFile(targetPath, fileContent, function (err: Error) {
  if (err) {
    console.log(err);
  }
  console.log(`"ormconfig" wrote to ${targetPath}`);
});

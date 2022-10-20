import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Employee } from 'src/employees';
import { CreateEmployeeTable1666188902624 } from 'src/migrations';
import { DataSource, DataSourceOptions } from 'typeorm';

const options: DataSourceOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: Number.parseInt(process.env.DATABASE_PORT || '3306'),
  username: process.env.DATABASE_USER_NAME,
  password: process.env.DATABASE_USER_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [Employee],
  migrations: [CreateEmployeeTable1666188902624],
  migrationsTableName: 'migrations',
  migrationsRun: true,
  synchronize: false,
};

const dataSource = new DataSource(options);
const typeOrmModuleOptions: TypeOrmModuleOptions = options;

export { typeOrmModuleOptions };
export default dataSource;

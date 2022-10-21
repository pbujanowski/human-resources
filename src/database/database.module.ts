import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from 'src/employees';
import { CreateEmployeeTable1666188902624 } from 'src/migrations';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER_NAME'),
        password: configService.get('DATABASE_USER_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [Employee],
        migrations: [CreateEmployeeTable1666188902624],
        migrationsTableName: 'migrations',
        migrationsRun: true,
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}

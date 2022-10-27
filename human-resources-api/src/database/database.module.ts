import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('API_DATABASE_HOST'),
        port: configService.get('API_DATABASE_PORT'),
        username: configService.get('API_DATABASE_USER_NAME'),
        password: configService.get('API_DATABASE_USER_PASSWORD'),
        database: configService.get('API_DATABASE_NAME'),
        entities: ['dist/**/entities/**/*{.ts,.js}'],
        migrations: ['dist/migrations/**/*{.ts,.js}'],
        migrationsTableName: 'migrations',
        migrationsRun: true,
        synchronize: false,
      }),
    }),
  ],
})
export class DatabaseModule {}

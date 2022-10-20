import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmModuleOptions } from './configs';
import { EmployeesModule } from './employees';
import { LoggerModule } from './logger';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EmployeesModule,
    TypeOrmModule.forRoot(typeOrmModuleOptions),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

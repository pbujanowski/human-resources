import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { EmployeesModule } from './employees';
import { LoggerModule } from './logger';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    EmployeesModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

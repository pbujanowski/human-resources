import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { EmployeeModule } from './employee';
import { LoggerModule } from './logger';
import { AppEventModule } from './app-event';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    EmployeeModule,
    LoggerModule,
    AppEventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

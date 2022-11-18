import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database';
import { EmployeeModule } from './employee';
import { LoggerModule } from './logger';
import { AppEventModule } from './app-event';
import { AuthenticationModule } from './authentication';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    AppEventModule,
    EmployeeModule,
    LoggerModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

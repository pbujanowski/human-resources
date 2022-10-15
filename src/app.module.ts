import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee, EmployeesModule } from './employees';
import { LoggerModule } from './logger';
@Module({
  imports: [
    EmployeesModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'human-resources.api.sqlite',
      entities: [Employee],
      // TODO
      synchronize: true,
    }),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

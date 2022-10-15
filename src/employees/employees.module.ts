import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '../logger';
import { CreateEmployeeHandler } from './commands';
import { Employee } from './employee.entity';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { EmployeeCreatedHandler } from './events';
import { GetAllEmployeesHandler } from './queries';

const CommandHandlers = [CreateEmployeeHandler];
const EventHandlers = [EmployeeCreatedHandler];
const QueryHandlers = [GetAllEmployeesHandler];

@Module({
  imports: [CqrsModule, LoggerModule, TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeesController],
  providers: [
    EmployeesService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
  exports: [TypeOrmModule],
})
export class EmployeesModule {}

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from '../logger';
import {
  CreateEmployeeHandler,
  DeleteEmployeeHandler,
  UpdateEmployeeHandler,
} from './commands';
import { Employee } from './employee.entity';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import {
  EmployeeCreatedHandler,
  EmployeeDeletedHandler,
  EmployeeUpdatedHandler,
} from './events';
import { GetAllEmployeesHandler, GetEmployeeByIdHandler } from './queries';

const CommandHandlers = [
  CreateEmployeeHandler,
  DeleteEmployeeHandler,
  UpdateEmployeeHandler,
];
const EventHandlers = [
  EmployeeCreatedHandler,
  EmployeeDeletedHandler,
  EmployeeUpdatedHandler,
];
const QueryHandlers = [GetAllEmployeesHandler, GetEmployeeByIdHandler];

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

import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppEventModule } from 'src/app-event';
import { AuthenticationModule } from 'src/authentication';
import { LoggerModule } from 'src/logger';
import { Employee } from './entities';
import {
  CreateEmployeeHandler,
  DeleteEmployeeHandler,
  UpdateEmployeeHandler,
} from './commands';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
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
  imports: [
    AppEventModule,
    AuthenticationModule,
    CqrsModule,
    LoggerModule,
    TypeOrmModule.forFeature([Employee]),
  ],
  controllers: [EmployeeController],
  providers: [
    EmployeeService,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
  exports: [TypeOrmModule],
})
export class EmployeeModule {}

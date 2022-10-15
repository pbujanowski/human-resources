import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { GetAllEmployeesHandler } from './queries';

const QueryHandlers = [GetAllEmployeesHandler];

@Module({
  imports: [CqrsModule],
  controllers: [EmployeesController],
  providers: [EmployeesService, ...QueryHandlers],
})
export class EmployeesModule {}

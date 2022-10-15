import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateEmployeeCommand, CreateEmployeeResponse } from './commands';
import { CreateEmployeeDto } from './dtos';
import { GetAllEmployeesQuery, GetAllEmployeesResponse } from './queries';

@Injectable()
export class EmployeesService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createEmployee(
    employee: CreateEmployeeDto,
  ): Promise<CreateEmployeeResponse> {
    return this.commandBus.execute(new CreateEmployeeCommand(employee));
  }

  async getAllEmployees(): Promise<GetAllEmployeesResponse> {
    return this.queryBus.execute(new GetAllEmployeesQuery());
  }
}

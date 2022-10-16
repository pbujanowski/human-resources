import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  CreateEmployeeCommand,
  CreateEmployeeResponse,
  DeleteEmployeeCommand,
  DeleteEmployeeResponse,
  UpdateEmployeeCommand,
  UpdateEmployeeResponse,
} from './commands';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dtos';
import {
  GetAllEmployeesQuery,
  GetAllEmployeesResponse,
  GetEmployeeByIdQuery,
  GetEmployeeByIdResponse,
} from './queries';

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

  async getEmployeeById(employeeId: string): Promise<GetEmployeeByIdResponse> {
    return this.queryBus.execute(new GetEmployeeByIdQuery(employeeId));
  }

  async updateEmployee(
    employee: UpdateEmployeeDto,
  ): Promise<UpdateEmployeeResponse> {
    return this.commandBus.execute(new UpdateEmployeeCommand(employee));
  }

  async deleteEmployee(employeeId: string): Promise<DeleteEmployeeResponse> {
    return this.commandBus.execute(new DeleteEmployeeCommand(employeeId));
  }
}

import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllEmployeesQuery, GetAllEmployeesResponse } from './queries';

@Injectable()
export class EmployeesService {
  constructor(private readonly queryBus: QueryBus) {}

  async getAllEmployees(): Promise<GetAllEmployeesResponse> {
    return this.queryBus.execute(new GetAllEmployeesQuery());
  }
}

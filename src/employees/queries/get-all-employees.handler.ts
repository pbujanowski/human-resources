import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employee.entity';
import { GetAllEmployeesQuery } from './get-all-employees.query';
import { GetAllEmployeesResponse } from './get-all-employees.response';

@QueryHandler(GetAllEmployeesQuery)
export class GetAllEmployeesHandler
  implements IQueryHandler<GetAllEmployeesQuery, GetAllEmployeesResponse>
{
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  async execute(): Promise<GetAllEmployeesResponse> {
    const employees = await this.employeesRepository.find();
    return { employees };
  }
}

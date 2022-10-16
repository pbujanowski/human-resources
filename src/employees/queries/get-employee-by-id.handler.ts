import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employee.entity';
import { GetEmployeeByIdQuery } from './get-employee-by-id.query';
import { GetEmployeeByIdResponse } from './get-employee-by-id.response';

@QueryHandler(GetEmployeeByIdQuery)
export class GetEmployeeByIdHandler
  implements IQueryHandler<GetEmployeeByIdQuery, GetEmployeeByIdResponse>
{
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  async execute(query: GetEmployeeByIdQuery): Promise<GetEmployeeByIdResponse> {
    const employee = await this.employeesRepository.findOne({
      where: { id: query.employeeId },
    });
    return { employee };
  }
}

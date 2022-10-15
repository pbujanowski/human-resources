import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetAllEmployeesQuery } from './get-all-employees.query';
import { GetAllEmployeesResponse } from './get-all-employees.response';

@QueryHandler(GetAllEmployeesQuery)
export class GetAllEmployeesHandler
  implements IQueryHandler<GetAllEmployeesQuery, GetAllEmployeesResponse>
{
  async execute() {
    return new GetAllEmployeesResponse([
      {
        id: '1',
        firstName: 'Alice',
        lastName: 'Smith',
        birthdate: '1990-01-01',
        personalIdNumber: '12345678910',
      },
      {
        id: '2',
        firstName: 'Bob',
        lastName: 'Smith',
        birthdate: '1992-01-01',
        personalIdNumber: '10987654321',
      },
    ]);
  }
}

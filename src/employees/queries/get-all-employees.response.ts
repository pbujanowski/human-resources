import { EmployeeDto } from '../dtos';

export class GetAllEmployeesResponse {
  constructor(public employees: EmployeeDto[]) {}
}

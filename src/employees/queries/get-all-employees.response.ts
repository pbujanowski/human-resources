import { EmployeeDto } from '../dtos';

export class GetAllEmployeesResponse {
  constructor(public readonly employees: EmployeeDto[]) {}
}

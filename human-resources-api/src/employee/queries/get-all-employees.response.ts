import { EmployeeDto } from '../dto';

export class GetAllEmployeesResponse {
  constructor(public readonly employees: EmployeeDto[]) {}
}

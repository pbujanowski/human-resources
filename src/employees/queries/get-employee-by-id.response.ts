import { EmployeeDto } from '../dtos';

export class GetEmployeeByIdResponse {
  constructor(public readonly employee: EmployeeDto | null) {}
}

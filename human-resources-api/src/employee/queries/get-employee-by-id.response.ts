import { EmployeeDto } from '../dto';

export class GetEmployeeByIdResponse {
  constructor(public readonly employee: EmployeeDto | null) {}
}

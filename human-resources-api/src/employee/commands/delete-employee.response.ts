import { EmployeeDto } from '../dto';

export class DeleteEmployeeResponse {
  constructor(public readonly employee: EmployeeDto | null) {}
}

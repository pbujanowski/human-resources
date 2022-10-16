import { EmployeeDto } from '../dtos';

export class DeleteEmployeeResponse {
  constructor(public readonly employee: EmployeeDto | null) {}
}

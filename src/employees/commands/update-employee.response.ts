import { EmployeeDto } from '../dtos';

export class UpdateEmployeeResponse {
  constructor(public readonly employee: EmployeeDto | null) {}
}

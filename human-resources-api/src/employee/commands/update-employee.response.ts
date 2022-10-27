import { EmployeeDto } from '../dto';

export class UpdateEmployeeResponse {
  constructor(public readonly employee: EmployeeDto | null) {}
}

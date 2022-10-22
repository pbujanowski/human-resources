import { EmployeeDto } from '../dto';

export class CreateEmployeeResponse {
  constructor(public readonly employee: EmployeeDto) {}
}

import { EmployeeDto } from '../dtos';

export class CreateEmployeeResponse {
  constructor(public readonly employee: EmployeeDto) {}
}

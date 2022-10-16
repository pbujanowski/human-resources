import { EmployeeDto } from '../dtos';

export interface DeleteEmployeeResponse {
  readonly employee: EmployeeDto | null;
}

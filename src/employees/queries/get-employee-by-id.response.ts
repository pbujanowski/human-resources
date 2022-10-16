import { EmployeeDto } from '../dtos';

export interface GetEmployeeByIdResponse {
  employee: EmployeeDto | null;
}

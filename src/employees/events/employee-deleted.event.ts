import { EmployeeDto } from '../dtos';

export class EmployeeDeletedEvent {
  constructor(public readonly employee: EmployeeDto) {}
}

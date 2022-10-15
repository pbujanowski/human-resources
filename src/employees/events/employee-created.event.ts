import { EmployeeDto } from '../dtos';

export class EmployeeCreatedEvent {
  constructor(public readonly employee: EmployeeDto) {}
}

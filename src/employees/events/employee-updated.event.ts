import { EmployeeDto } from '../dtos';

export class EmployeeUpdatedEvent {
  constructor(public readonly employee: EmployeeDto) {}
}

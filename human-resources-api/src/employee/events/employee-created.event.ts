import { EmployeeDto } from '../dto';

export class EmployeeCreatedEvent {
  constructor(public readonly employee: EmployeeDto) {}
}

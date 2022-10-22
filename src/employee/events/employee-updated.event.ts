import { EmployeeDto } from '../dto';

export class EmployeeUpdatedEvent {
  constructor(public readonly employee: EmployeeDto) {}
}

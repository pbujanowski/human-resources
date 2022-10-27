import { EmployeeDto } from '../dto';

export class EmployeeDeletedEvent {
  constructor(public readonly employee: EmployeeDto) {}
}

import { UpdateEmployeeDto } from '../dtos';

export class UpdateEmployeeCommand {
  constructor(public readonly employee: UpdateEmployeeDto) {}
}

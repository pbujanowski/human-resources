import { UpdateEmployeeDto } from '../dto';

export class UpdateEmployeeCommand {
  constructor(public readonly employee: UpdateEmployeeDto) {}
}

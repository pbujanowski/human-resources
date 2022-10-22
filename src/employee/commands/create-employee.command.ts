import { CreateEmployeeDto } from '../dto';

export class CreateEmployeeCommand {
  constructor(public readonly employee: CreateEmployeeDto) {}
}

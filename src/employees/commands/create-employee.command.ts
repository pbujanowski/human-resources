import { CreateEmployeeDto } from '../dtos';

export class CreateEmployeeCommand {
  constructor(public readonly createEmployeeDto: CreateEmployeeDto) {}
}

import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../entities';
import { Repository } from 'typeorm';
import { EmployeeCreatedEvent } from '../events';
import { CreateEmployeeCommand } from './create-employee.command';
import { CreateEmployeeResponse } from './create-employee.response';

@CommandHandler(CreateEmployeeCommand)
export class CreateEmployeeHandler
  implements ICommandHandler<CreateEmployeeCommand, CreateEmployeeResponse>
{
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
    private readonly eventBus: EventBus,
  ) {}

  async execute(
    command: CreateEmployeeCommand,
  ): Promise<CreateEmployeeResponse> {
    const employee = await this.employeesRepository.save(command.employee);

    this.eventBus.publish(new EmployeeCreatedEvent(employee));

    return { employee };
  }
}

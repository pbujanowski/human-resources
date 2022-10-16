import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employee.entity';
import { EmployeeUpdatedEvent } from '../events';
import { UpdateEmployeeCommand } from './update-employee.command';
import { UpdateEmployeeResponse } from './update-employee.response';

@CommandHandler(UpdateEmployeeCommand)
export class UpdateEmployeeHandler
  implements ICommandHandler<UpdateEmployeeCommand, UpdateEmployeeResponse>
{
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
    private readonly eventBus: EventBus,
  ) {}

  async execute(
    command: UpdateEmployeeCommand,
  ): Promise<UpdateEmployeeResponse> {
    const found = await this.employeesRepository.findOneBy({
      id: command.employee.id,
    });

    if (found) {
      const employee = await this.employeesRepository.save(command.employee);
      this.eventBus.publish(new EmployeeUpdatedEvent(employee));
      return { employee };
    } else {
      return { employee: null };
    }
  }
}

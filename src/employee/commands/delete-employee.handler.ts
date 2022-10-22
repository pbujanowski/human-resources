import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from '../entities';
import { Repository } from 'typeorm';
import { EmployeeDeletedEvent } from '../events';
import { DeleteEmployeeCommand } from './delete-employee.command';
import { DeleteEmployeeResponse } from './delete-employee.response';

@CommandHandler(DeleteEmployeeCommand)
export class DeleteEmployeeHandler
  implements ICommandHandler<DeleteEmployeeCommand, DeleteEmployeeResponse>
{
  constructor(
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
    private readonly eventBus: EventBus,
  ) {}

  async execute(
    command: DeleteEmployeeCommand,
  ): Promise<DeleteEmployeeResponse> {
    const found = await this.employeesRepository.findOneBy({
      id: command.employeeId,
    });
    if (found) {
      await this.employeesRepository.delete(found);
      this.eventBus.publish(new EmployeeDeletedEvent(found));
      return { employee: found };
    } else {
      return { employee: null };
    }
  }
}

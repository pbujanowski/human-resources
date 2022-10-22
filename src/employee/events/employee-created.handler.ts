import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LoggerService } from '../../logger';
import { EmployeeCreatedEvent } from './employee-created.event';

@EventsHandler(EmployeeCreatedEvent)
export class EmployeeCreatedHandler
  implements IEventHandler<EmployeeCreatedEvent>
{
  constructor(private readonly loggerService: LoggerService) {
    this.loggerService.setContext(EmployeeCreatedHandler.name);
  }

  handle(event: EmployeeCreatedEvent) {
    this.loggerService.log(
      `Employee created: ${JSON.stringify(event.employee)}`,
    );
  }
}

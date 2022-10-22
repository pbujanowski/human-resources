import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LoggerService } from '../../logger';
import { EmployeeUpdatedEvent } from './employee-updated.event';

@EventsHandler(EmployeeUpdatedEvent)
export class EmployeeUpdatedHandler
  implements IEventHandler<EmployeeUpdatedEvent>
{
  constructor(private readonly loggerService: LoggerService) {
    this.loggerService.setContext(EmployeeUpdatedHandler.name);
  }

  handle(event: EmployeeUpdatedEvent) {
    this.loggerService.log(
      `Employee updated: ${JSON.stringify(event.employee)}`,
    );
  }
}

import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { LoggerService } from '../../logger';
import { EmployeeDeletedEvent } from './employee-deleted.event';

@EventsHandler(EmployeeDeletedEvent)
export class EmployeeDeletedHandler
  implements IEventHandler<EmployeeDeletedEvent>
{
  constructor(private readonly loggerService: LoggerService) {
    this.loggerService.setContext(EmployeeDeletedHandler.name);
  }

  handle(event: EmployeeDeletedEvent) {
    this.loggerService.log(
      `Employee deleted: ${JSON.stringify(event.employee)}`,
    );
  }
}

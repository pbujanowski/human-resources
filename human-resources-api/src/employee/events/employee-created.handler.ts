import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { AppEventService } from '../../app-event';
import { LoggerService } from '../../logger';
import { EmployeeCreatedEvent } from './employee-created.event';

@EventsHandler(EmployeeCreatedEvent)
export class EmployeeCreatedHandler
  implements IEventHandler<EmployeeCreatedEvent>
{
  constructor(
    private readonly loggerService: LoggerService,
    private readonly appEventService: AppEventService,
  ) {
    this.loggerService.setContext(EmployeeCreatedHandler.name);
  }

  handle(event: EmployeeCreatedEvent) {
    this.appEventService.createAppEvent({
      name: EmployeeCreatedEvent.name,
      content: JSON.stringify(event.employee),
    });
    this.loggerService.log(
      `Employee created: ${JSON.stringify(event.employee)}`,
    );
  }
}

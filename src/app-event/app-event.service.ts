import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateAppEventCommand, CreateAppEventResponse } from './commands';
import { CreateAppEventDto } from './dto';
import { GetAllAppEventsQuery, GetAllAppEventsResponse } from './queries';

@Injectable()
export class AppEventService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  async createAppEvent(
    createAppEventDto: CreateAppEventDto,
  ): Promise<CreateAppEventResponse> {
    return this.commandBus.execute(
      new CreateAppEventCommand(createAppEventDto),
    );
  }

  async getAllAppEvents(): Promise<GetAllAppEventsResponse> {
    return this.queryBus.execute(new GetAllAppEventsQuery());
  }
}

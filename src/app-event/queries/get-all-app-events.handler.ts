import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppEvent } from '../entities';
import { GetAllAppEventsQuery } from './get-all-app-events.query';
import { GetAllAppEventsResponse } from './get-all-app-events.response';

@QueryHandler(GetAllAppEventsQuery)
export class GetAllAppEventsHandler
  implements IQueryHandler<GetAllAppEventsQuery, GetAllAppEventsResponse>
{
  constructor(
    @InjectRepository(AppEvent)
    private readonly appEventsRepository: Repository<AppEvent>,
  ) {}

  async execute(): Promise<GetAllAppEventsResponse> {
    const appEvents = await this.appEventsRepository.find();
    return { appEvents };
  }
}

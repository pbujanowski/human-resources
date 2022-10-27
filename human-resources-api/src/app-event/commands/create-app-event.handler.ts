import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppEvent } from '../entities';
import { CreateAppEventCommand } from './create-app-event.command';
import { CreateAppEventResponse } from './create-app-event.response';

@CommandHandler(CreateAppEventCommand)
export class CreateAppEventHandler
  implements ICommandHandler<CreateAppEventCommand, CreateAppEventResponse>
{
  constructor(
    @InjectRepository(AppEvent)
    private readonly appEventRepository: Repository<AppEvent>,
  ) {}
  async execute(
    command: CreateAppEventCommand,
  ): Promise<CreateAppEventResponse> {
    const appEvent = await this.appEventRepository.save(
      command.createAppEventDto,
    );
    return { appEventDto: appEvent };
  }
}

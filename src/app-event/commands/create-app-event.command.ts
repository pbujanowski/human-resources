import { CreateAppEventDto } from '../dto';

export class CreateAppEventCommand {
  constructor(public readonly createAppEventDto: CreateAppEventDto) {}
}

import { AppEventDto } from '../dto';

export class CreateAppEventResponse {
  constructor(public readonly appEventDto: AppEventDto) {}
}

import { AppEventDto } from '../dto';

export class GetAllAppEventsResponse {
  constructor(public readonly appEvents: AppEventDto[]) {}
}

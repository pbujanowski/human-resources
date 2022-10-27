import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppEventService } from './app-event.service';

@Controller('app-events')
export class AppEventController {
  constructor(private readonly appEventService: AppEventService) {}

  @Get('get-all-app-events')
  async getAllAppEvents(@Res() res: Response) {
    const queryResponse = await this.appEventService.getAllAppEvents();
    return res.json(queryResponse.appEvents);
  }
}

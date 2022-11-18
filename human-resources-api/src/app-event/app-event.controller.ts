import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthenticationGuard } from 'src/authentication';
import { AppEventService } from './app-event.service';

@Controller('app-events')
@UseGuards(AuthenticationGuard)
export class AppEventController {
  constructor(private readonly appEventService: AppEventService) {}

  @Get('get-all-app-events')
  async getAllAppEvents(@Res() res: Response) {
    const queryResponse = await this.appEventService.getAllAppEvents();
    return res.json(queryResponse.appEvents);
  }
}

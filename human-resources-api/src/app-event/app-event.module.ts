import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppEvent } from './entities';
import { AppEventService } from './app-event.service';
import { CreateAppEventHandler } from './commands';
import { CqrsModule } from '@nestjs/cqrs';
import { AppEventController } from './app-event.controller';
import { GetAllAppEventsHandler } from './queries';

const CommandHandlers = [CreateAppEventHandler];
const QueryHandlers = [GetAllAppEventsHandler];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([AppEvent])],
  controllers: [AppEventController],
  providers: [AppEventService, ...CommandHandlers, ...QueryHandlers],
  exports: [AppEventService, TypeOrmModule],
})
export class AppEventModule {}

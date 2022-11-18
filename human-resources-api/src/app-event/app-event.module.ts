import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from 'src/authentication';
import { AppEvent } from './entities';
import { AppEventController } from './app-event.controller';
import { AppEventService } from './app-event.service';
import { CreateAppEventHandler } from './commands';
import { GetAllAppEventsHandler } from './queries';

const CommandHandlers = [CreateAppEventHandler];
const QueryHandlers = [GetAllAppEventsHandler];

@Module({
  imports: [
    AuthenticationModule,
    CqrsModule,
    TypeOrmModule.forFeature([AppEvent]),
  ],
  controllers: [AppEventController],
  providers: [AppEventService, ...CommandHandlers, ...QueryHandlers],
  exports: [AppEventService, TypeOrmModule],
})
export class AppEventModule {}

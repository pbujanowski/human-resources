import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppEvent } from './entities';
import { AppEventService } from './app-event.service';

@Module({
  imports: [TypeOrmModule.forFeature([AppEvent])],
  providers: [AppEventService],
})
export class AppEventModule {}

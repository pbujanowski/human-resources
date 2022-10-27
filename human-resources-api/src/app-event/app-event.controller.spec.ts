import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { AppEventController } from './app-event.controller';
import { AppEventService } from './app-event.service';

describe('AppEventController', () => {
  let controller: AppEventController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      controllers: [AppEventController],
      providers: [AppEventService],
    }).compile();

    controller = module.get<AppEventController>(AppEventController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

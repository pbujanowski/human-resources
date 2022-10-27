import { CqrsModule } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';
import { AppEventService } from './app-event.service';

describe('AppEventService', () => {
  let service: AppEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CqrsModule],
      providers: [AppEventService],
    }).compile();

    service = module.get<AppEventService>(AppEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

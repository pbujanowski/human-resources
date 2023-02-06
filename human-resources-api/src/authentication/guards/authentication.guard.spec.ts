import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

import { AuthenticationGuard } from './authentication.guard';
import { AuthenticationService } from '../authentication.service';

describe('AuthenticationGuard', () => {
  let authenticationService: AuthenticationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, HttpModule],
      providers: [AuthenticationService],
    }).compile();

    authenticationService = module.get<AuthenticationService>(
      AuthenticationService,
    );
  });

  it('should be defined', () => {
    expect(new AuthenticationGuard(authenticationService)).toBeDefined();
  });
});

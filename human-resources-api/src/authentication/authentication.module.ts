import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationService } from './authentication.service';
import { AuthenticationGuard } from './guards';

@Module({
  imports: [ConfigModule, HttpModule],
  providers: [AuthenticationGuard, AuthenticationService],
  exports: [AuthenticationGuard, AuthenticationService],
})
export class AuthenticationModule {}

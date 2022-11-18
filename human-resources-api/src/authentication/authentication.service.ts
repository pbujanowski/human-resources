import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthenticationError } from './errors';
import { OpenIdConfiguration } from './models';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private get authorityUrl() {
    return this.configService.getOrThrow('API_AUTHORITY');
  }

  public readonly authenticate = async (accessToken: string) => {
    try {
      const openIdConfigurationUrl = `${this.authorityUrl}/.well-known/openid-configuration`;

      const openIdConfigurationResponse =
        await this.httpService.axiosRef.get<OpenIdConfiguration>(
          openIdConfigurationUrl,
        );

      const userInfo = await this.httpService.axiosRef.get(
        openIdConfigurationResponse.data.userinfo_endpoint,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );

      return userInfo.data;
    } catch (error) {
      throw new AuthenticationError(error.message);
    }
  };
}

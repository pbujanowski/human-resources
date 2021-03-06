import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AuthModule.forRoot({
      config: {
        authority: environment.authority,
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        clientId: environment.clientId,
        scope: environment.scope,
        responseType: 'code',
        silentRenew: true,
        useRefreshToken: true,
        renewTimeBeforeTokenExpiresInSeconds: 30,
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthorizationModule {}

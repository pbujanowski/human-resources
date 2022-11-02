import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { ConfirmDialogComponent, LayoutComponent } from './components';
import {
  AuthenticationInterceptor,
  AuthenticationModule,
} from './authentication';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, LayoutComponent, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    AuthenticationModule.forRoot({
      authority: environment.clientAuthority,
      clientId: environment.clientId,
      redirectUri: `${environment.clientUrl}/login-callback`,
      responseType: 'code',
      scope: 'openid profile email',
      postLogoutRedirectUri: `${environment.clientUrl}/logout-callback`,
      automaticSilentRenew: true,
      silentRedirectUri: `${environment.clientUrl}/silent-callback`,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

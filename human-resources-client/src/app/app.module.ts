import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConfirmDialogComponent, LayoutComponent } from './components';
import {
  AuthenticationInterceptor,
  AuthenticationModule,
} from './authentication';
import { MaterialModule } from './material';

import { environment } from 'src/environments/environment';

const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http);

const translateModuleConfig: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  defaultLanguage: 'en',
};

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, LayoutComponent, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    TranslateModule.forRoot(translateModuleConfig),
    AuthenticationModule.forRoot({
      authority: environment.clientAuthority,
      clientId: environment.clientId,
      redirectUri: `${window.location.href}/login-callback`,
      responseType: 'code',
      scope: 'openid profile email',
      postLogoutRedirectUri: `${window.location.href}/logout-callback`,
      automaticSilentRenew: true,
      silentRedirectUri: `${window.location.href}/silent-callback`,
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

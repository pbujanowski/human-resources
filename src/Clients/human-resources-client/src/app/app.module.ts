import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http);

const translateModuleConfig: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  defaultLanguage: 'en',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(translateModuleConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

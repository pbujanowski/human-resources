import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import {
  DashboardOutline,
  DoubleLeftOutline,
  DoubleRightOutline,
  HomeOutline,
  TeamOutline,
  UnorderedListOutline,
} from '@ant-design/icons-angular/icons';

import {
  TranslateLoader,
  TranslateModule,
  TranslateModuleConfig,
} from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { EmployeeService } from './services';

const HttpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http);

const translateModuleConfig: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient],
  },
  defaultLanguage: 'en',
};

const antDesignModules = [
  NzButtonModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule,
  NzTableModule,
];
const icons = [
  DashboardOutline,
  DoubleLeftOutline,
  DoubleRightOutline,
  HomeOutline,
  TeamOutline,
  UnorderedListOutline,
];

registerLocaleData(en);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    antDesignModules,
    TranslateModule.forRoot(translateModuleConfig),
  ],
  exports: [antDesignModules, HttpClientModule, TranslateModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    EmployeeService,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import en from '@angular/common/locales/en';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
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
  UserAddOutline,
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
  NzDatePickerModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
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
  UserAddOutline,
];

registerLocaleData(en);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    antDesignModules,
    TranslateModule.forRoot(translateModuleConfig),
  ],
  exports: [
    antDesignModules,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    EmployeeService,
  ],
})
export class SharedModule {}

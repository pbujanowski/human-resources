import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import {
  DashboardOutline,
  DoubleLeftOutline,
  DoubleRightOutline,
} from '@ant-design/icons-angular/icons';

const modules = [NzIconModule, NzLayoutModule, NzMenuModule];
const icons = [DashboardOutline, DoubleLeftOutline, DoubleRightOutline];

registerLocaleData(en);

@NgModule({
  declarations: [],
  imports: [CommonModule, modules],
  exports: modules,
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class AntDesignModule {}

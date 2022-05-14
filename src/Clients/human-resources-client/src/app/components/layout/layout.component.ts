import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  @Input()
  public title?: string;

  public isCollapsed = false;

  public routes = [
    {
      key: 'home',
      path: '/',
      icon: 'home',
    },
  ];

  constructor(public translate: TranslateService) {}
}

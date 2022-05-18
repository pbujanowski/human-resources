import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom, Observable } from 'rxjs';

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
      type: 'group',
      icon: 'home',
      children: [
        {
          key: 'dashboard',
          type: 'item',
          path: '/dashboard',
          icon: 'dashboard',
        },
      ],
    },
    {
      key: 'employees',
      type: 'group',
      icon: 'team',
      children: [
        {
          key: 'employeesList',
          type: 'item',
          path: '/employees',
          icon: 'unordered-list',
        },
      ],
    },
  ];

  public getRouteLabel = (key: string) => {
    let label = '';
    this.translate.get(`pages.${key}`).subscribe(value => (label = value));
    return label;
  };

  constructor(public translate: TranslateService) {}
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Profile } from 'src/app/shared';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  @Input()
  public title?: string;

  public get profile(): Profile {
    return this.oidc.getUserData() as Profile;
  }

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
          path: '/employees/list',
          icon: 'unordered-list',
        },
      ],
    },
  ];

  public getRouteLabel = (key: string) => this.getTranslation(`pages.${key}`);

  public getTranslation = (key: string) => this.translate.instant(key);

  public logInUser = () => this.oidc.authorize();

  public logOutUser = () => this.oidc.logoff();

  public navigateToProfile = () => this.router.navigate(['profile']);

  constructor(
    public translate: TranslateService,
    private oidc: OidcSecurityService,
    private router: Router
  ) {}
}

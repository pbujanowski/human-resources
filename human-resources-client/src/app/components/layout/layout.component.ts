import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/authentication';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  @Input()
  public title?: string;

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

  public readonly getRouteLabel = (key: string) =>
    this.getTranslation(`pages.${key}`);

  public readonly getTranslation = (key: string) =>
    this._translate.instant(key);

  public readonly isLoggedIn = () => this._authenticationService.isLoggedIn();

  public readonly getUserClaims = () => this._authenticationService.getClaims();

  public readonly onLoginClick = () => this._router.navigate(['login']);

  public readonly onLogoutClick = () => this._router.navigate(['logout']);

  constructor(
    private readonly _authenticationService: AuthenticationService,
    private readonly _router: Router,
    private readonly _translate: TranslateService
  ) {}
}

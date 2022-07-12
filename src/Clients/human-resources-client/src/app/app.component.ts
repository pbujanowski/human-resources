import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

import defaultLanguage from 'src/assets/i18n/en.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Human Resources';

  constructor(
    private translate: TranslateService,
    private oidc: OidcSecurityService
  ) {}

  ngOnInit() {
    this.translate.setTranslation('en', defaultLanguage);
    this.translate.setDefaultLang('en');

    this.oidc.checkAuth().subscribe(({ isAuthenticated }) => {
      if (!isAuthenticated) {
        this.oidc.authorize();
      }
    });
  }
}

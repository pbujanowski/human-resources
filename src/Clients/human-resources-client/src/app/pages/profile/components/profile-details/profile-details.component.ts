import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Profile } from 'src/app/shared';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
})
export class ProfileDetailsComponent {
  public get profile(): Profile {
    return this.oidc.getUserData() as Profile;
  }

  public getProfileLabel = (key: string) =>
    this.translate.instant(`models.profile.${key}`);

  constructor(
    private translate: TranslateService,
    private oidc: OidcSecurityService
  ) {}
}

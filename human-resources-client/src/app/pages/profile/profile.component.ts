import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  public get claims(): string | undefined {
    return JSON.stringify(this._authenticationService.getClaims());
  }

  constructor(private readonly _authenticationService: AuthenticationService) {}
}

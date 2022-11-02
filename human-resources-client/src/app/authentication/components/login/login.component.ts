import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private readonly _authenticationService: AuthenticationService) {}

  async ngOnInit(): Promise<void> {
    await this._authenticationService.startAuthentication();
  }
}

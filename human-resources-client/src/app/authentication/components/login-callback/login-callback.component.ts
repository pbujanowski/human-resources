import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-login-callback',
  templateUrl: './login-callback.component.html',
  styleUrls: ['./login-callback.component.css'],
})
export class LoginCallbackComponent implements OnInit {
  constructor(
    private readonly _authenticationService: AuthenticationService,
    private readonly _router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this._authenticationService.completeAuthentication();
    this._router.navigate(['']);
  }
}

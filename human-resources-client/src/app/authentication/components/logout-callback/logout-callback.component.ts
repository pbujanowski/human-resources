import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-logout-callback',
  templateUrl: './logout-callback.component.html',
  styleUrls: ['./logout-callback.component.css'],
})
export class LogoutCallbackComponent implements OnInit {
  constructor(
    private readonly _authenticationService: AuthenticationService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this._authenticationService.completeLogout();
    this._router.navigate(['']);
  }
}

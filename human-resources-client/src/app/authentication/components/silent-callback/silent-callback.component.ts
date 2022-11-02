import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-silent-callback',
  templateUrl: './silent-callback.component.html',
  styleUrls: ['./silent-callback.component.css'],
})
export class SilentCallbackComponent implements OnInit {
  constructor(private readonly _authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this._authenticationService.silentAuthentication();
  }
}

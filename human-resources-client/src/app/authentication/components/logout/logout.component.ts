import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private readonly _authenticationService: AuthenticationService) {}

  async ngOnInit(): Promise<void> {
    await this._authenticationService.startLogout();
  }
}

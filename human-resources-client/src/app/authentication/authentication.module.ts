import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  LoginComponent,
  LoginCallbackComponent,
  LogoutCallbackComponent,
  LogoutComponent,
  SilentCallbackComponent,
} from './components';
import { AuthenticationServiceConfig } from './configs';
import { AuthenticationService } from './services';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login-callback',
    component: LoginCallbackComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'logout-callback',
    component: LogoutCallbackComponent,
  },
  {
    path: 'silent-callback',
    component: SilentCallbackComponent,
  },
];

@NgModule({
  declarations: [
    LoginCallbackComponent,
    LogoutCallbackComponent,
    SilentCallbackComponent,
    LoginComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [AuthenticationService],
  exports: [RouterModule],
})
export class AuthenticationModule {
  static forRoot(
    config: AuthenticationServiceConfig
  ): ModuleWithProviders<AuthenticationModule> {
    return {
      ngModule: AuthenticationModule,
      providers: [{ provide: AuthenticationServiceConfig, useValue: config }],
    };
  }
}

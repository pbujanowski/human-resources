import { Injectable } from '@angular/core';
import {
  User,
  UserManager,
  UserManagerSettings,
  WebStorageStateStore,
} from 'oidc-client-ts';
import { AuthenticationServiceConfig } from '../configs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _config: AuthenticationServiceConfig;
  private _user?: User | null;
  private _userManager?: UserManager;

  public get isUserDefined() {
    return this._user !== undefined && this._user !== null;
  }

  public readonly isLoggedIn = () => this._user != null && !this._user.expired;

  public readonly getAccessToken = () =>
    this._user ? this._user.access_token : '';

  public readonly getClaims = () => this._user?.profile;

  public readonly startAuthentication = async () => {
    await this.getUserManager();
    await this._userManager?.signinRedirect();
  };

  public readonly completeAuthentication = async () => {
    await this.getUserManager();
    this._user = await this._userManager?.signinRedirectCallback();
  };

  public readonly startLogout = async () => {
    await this.getUserManager();
    return await this._userManager?.signoutRedirect();
  };

  public readonly completeLogout = async () => {
    await this.getUserManager();
    return await this._userManager?.signoutRedirectCallback();
  };

  public readonly silentAuthentication = async () => {
    await this.getUserManager();
    return await this._userManager?.signinSilentCallback();
  };

  private readonly getUserManager = async () => {
    if (!this._userManager) {
      const userManagerSettings: UserManagerSettings = {
        authority: this._config.authority,
        client_id: this._config.clientId,
        response_type: this._config.responseType,
        scope: this._config.scope,
        redirect_uri: this._config.redirectUri,
        post_logout_redirect_uri: this._config.postLogoutRedirectUri,
        automaticSilentRenew: this._config.automaticSilentRenew,
        silent_redirect_uri: this._config.silentRedirectUri,
        userStore: new WebStorageStateStore({
          store: window.localStorage,
        }),
      };
      this._userManager = new UserManager(userManagerSettings);
      this._user = await this._userManager.getUser();
    }
  };

  constructor(config: AuthenticationServiceConfig) {
    this._config = config;
  }
}

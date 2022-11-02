export class AuthenticationServiceConfig {
  constructor(
    public readonly authority: string,
    public readonly clientId: string,
    public readonly redirectUri: string,
    public readonly responseType?: string,
    public readonly scope?: string,
    public readonly postLogoutRedirectUri?: string,
    public readonly automaticSilentRenew?: boolean,
    public readonly silentRedirectUri?: string
  ) {}
}

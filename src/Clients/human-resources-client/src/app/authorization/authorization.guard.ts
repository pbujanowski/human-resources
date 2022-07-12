import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private oidc: OidcSecurityService) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let result = false;
    try {
      this.oidc.checkAuth().subscribe(({ isAuthenticated }) => {
        if (!isAuthenticated) {
          this.oidc.authorize();
        }
        result = true;
      });
    } catch (error) {
      console.log(error);
    }
    return result;
  }
}

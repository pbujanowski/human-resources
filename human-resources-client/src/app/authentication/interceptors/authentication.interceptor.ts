import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthenticationService } from '../services';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(
    private readonly _authenticationService: AuthenticationService,
    private readonly _router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this._authenticationService.getAccessToken();
    const headers = request.headers.set(
      'Authorization',
      `Bearer ${accessToken}`
    );

    const authRequest = request.clone({ headers });

    return next.handle(authRequest).pipe(
      tap(
        () => {},
        error => {
          const responseError = error as HttpErrorResponse;
          if (
            (responseError && responseError.status === 401) ||
            responseError.status === 403
          ) {
            this._router.navigate(['/login']);
          }
        }
      )
    );
  }
}

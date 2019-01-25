import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '../services/authentication.service';
import {ApiError} from './api-error';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request)
      .pipe(catchError((error: HttpErrorResponse) => {
        if (error.status === 401) { // unauthorized
          this.authenticationService.logout();
          location.reload(true);
        }
        if (error.status === 403) { // forbidden
          this.authenticationService.logout();
        }
        const apiError = error.error as ApiError;
        console.log(apiError.verboseErrorMessage);
        return throwError(apiError);
      }));
  }
}

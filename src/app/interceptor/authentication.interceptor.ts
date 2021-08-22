import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LoginService } from '../core/http/login/login.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string | null = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
    }
    request = request.clone({
      headers: request.headers.set('Contentent-Type', 'application/json'),
    });
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });
    console.log(request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status != 401) {
          console.log(error);
        } else {
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
@Injectable()
export class AuthLoggedInterceptor implements HttpInterceptor {
  constructor(private router: Router, private userService: UserService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token: string | null = localStorage.getItem('token');
    request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
    request = request.clone({
      headers: request.headers.set('Contentent-Type', 'application/json'),
    });
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error) {
          this.router.navigate(['']);
          console.log(error);
        }
        if (error.status > 400 && error.status != 404 &&error.status<500) {
          this.router.navigate(['login']);
          this.userService.userLoggedOut()
          localStorage.clear();
        }
        return throwError(error);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token: string | null = localStorage.getItem('token')
    if(token)request = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`),
    });
    request = request.clone({
      headers: request.headers.set('Contentent-Type', 'application/json'),
    });
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json'),
    });
    console.log(request);
    return next.handle(request);
  }
}

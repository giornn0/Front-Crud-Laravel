import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertsService } from '../services/alerts/alerts.service';

@Injectable()
export class AlertsInterceptor implements HttpInterceptor {
  constructor(private alertsService: AlertsService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    
    return next.handle(request)
    .pipe(
      tap(
        (res: HttpEvent<any>) => {
          if (res instanceof HttpResponse) {
            // if (res.body.logged)
            //   this.alertsService.success('Successfully loged');
            if (res.body && res.body.message) {
              this.alertsService.success(res.body.message);
            }
          }
        },
        (error) => {
          this.alertsService.error(error.error.message);
        }
      )
    );
  }
}

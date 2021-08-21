import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  started = false;
  constructor(private loader: LoaderService) {}
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!this.started) this.loader.startSpinner();
    if (req.url.includes('address')) {
      this.started = true;
      return next.handle(req);
    }
    return next.handle(req).pipe(
      finalize(() => {
        this.loader.stopSpinner();
        this.started = false;
      })
    );
  }
}

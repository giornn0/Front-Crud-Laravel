import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { VentasService } from './ventas.service';

@Injectable({
  providedIn: 'root',
})
export class VentasResolver implements Resolve<unknown> {
  constructor(private ventasService: VentasService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    const { page } = route.queryParams;
    return this.ventasService.index(page);
  }
}

@Injectable({
  providedIn: 'root',
})
export class VentaResolver implements Resolve<unknown> {
  constructor(private ventasService: VentasService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    const { id } = route.params;
    return this.ventasService.index(id);
  }
}

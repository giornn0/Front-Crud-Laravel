import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root',
})
export class ProductosResolver implements Resolve<unknown> {
  constructor(private productosService: ProductosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    const { page } = route.queryParams;
    return this.productosService.index(page);
  }
}

@Injectable({
  providedIn: 'root',
})
export class AllProductosResolver implements Resolve<unknown> {
  constructor(private productosService: ProductosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    return this.productosService.index();
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductoResolver implements Resolve<unknown> {
  constructor(private productosService: ProductosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    const { id } = route.params;
    return this.productosService.getOne(id);
  }
}

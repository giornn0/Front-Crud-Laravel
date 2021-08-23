import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductosVentaService } from './productos-venta.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosVentaResolver implements Resolve<unknown> {
  constructor(private prodVentasService: ProductosVentaService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{id} = route.params
    return this.prodVentasService.getProductosVenta(id)
  }
}

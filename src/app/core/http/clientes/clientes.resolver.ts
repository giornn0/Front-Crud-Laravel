import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ClientesService } from './clientes.service';

@Injectable({
  providedIn: 'root',
})
export class ClientesResolver implements Resolve<unknown> {
  constructor(private clientesService: ClientesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    const { page } = route.queryParams;
    return this.clientesService.index(page);
  }
}
@Injectable({
  providedIn: 'root',
})
export class AllClientesResolver implements Resolve<unknown> {
  constructor(private clientesService: ClientesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    return this.clientesService.index();
  }
}
@Injectable({
  providedIn: 'root',
})
export class ClienteResolver implements Resolve<unknown> {
  constructor(private clientesService: ClientesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    const { id } = route.params;
    return this.clientesService.getOne(id);
  }
}

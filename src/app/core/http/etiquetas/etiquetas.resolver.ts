import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EtiquetasService } from './etiquetas.service';

@Injectable({
  providedIn: 'root',
})
export class EtiquetasResolver implements Resolve<unknown> {
  constructor(private etiquetasService: EtiquetasService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    return this.etiquetasService.index();
  }
}
@Injectable({
  providedIn: 'root',
})
export class EtiquetaResolver implements Resolve<unknown> {
  constructor(private etiquetasService: EtiquetasService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<unknown> {
    const { id } = route.params;
    return this.etiquetasService.getOne(id);
  }
}

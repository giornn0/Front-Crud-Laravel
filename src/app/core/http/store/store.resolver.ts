import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root'
})
export class StoresResolver implements Resolve<unknown> {
  constructor(private storeService:StoreService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const {page} = route.queryParams
    return this.storeService.getIndex(page)
  }
}

@Injectable({
  providedIn: 'root'
})
export class StoreResolver implements Resolve<unknown> {
  constructor(private storeService:StoreService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{id}=route.params
    return this.storeService.getOne(id)
  }
}
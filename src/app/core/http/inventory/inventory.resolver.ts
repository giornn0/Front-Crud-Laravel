import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { InventoryService } from './inventory.service';

@Injectable({
  providedIn: 'root'
})
export class InventoriesResolver implements Resolve<unknown> {
  constructor(private inventoryService:InventoryService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const {page} = route.queryParams
    return this.inventoryService.getIndex(page)
  }
}
@Injectable({
  providedIn: 'root'
})
export class InventoryResolver implements Resolve<unknown> {
  constructor(private inventoryService:InventoryService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const {id } = route.params
    return this.inventoryService.getOne(id)
  }
}
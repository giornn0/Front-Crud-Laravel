import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddressService } from './address.service';

@Injectable({
  providedIn: 'root'
})
export class AddressResolver implements Resolve<unknown> {
  constructor(private addressService:AddressService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{id} = route.params
    return this.addressService.getOne(id)
  }
}

import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RentalService } from './rental.service';

@Injectable({
  providedIn: 'root'
})
export class RentalsResolver implements Resolve<unknown> {
  constructor(private rentalService:RentalService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const {page} = route.queryParams
    return this.rentalService.getIndex(page)
  }
}
@Injectable({
  providedIn: 'root'
})
export class RentalResolver implements Resolve<unknown> {
  constructor(private rentalService:RentalService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{id}=route.params
    return this.rentalService.getOne(id)
  }
}
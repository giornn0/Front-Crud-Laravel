import { Injectable } from '@angular/core';
import { Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersResolver implements Resolve<unknown> {
  constructor(private customerService:CustomerService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const {page}=route.queryParams
    return this.customerService.getIndex(page)
  }
}


@Injectable({
  providedIn: 'root'
})
export class CustomerResolver implements Resolve<unknown> {
  constructor(private customerService:CustomerService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{id}=route.params
    return this.customerService.getOne(id)
  }
}
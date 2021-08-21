import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { StaffService } from './staff.service';

@Injectable({
  providedIn: 'root'
})
export class StaffsResolver implements Resolve<unknown> {
  constructor(private staffService:StaffService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{page} = route.queryParams
    return this.staffService.getIndex(page)
  }
}
@Injectable({
  providedIn: 'root'
})
export class StaffResolver implements Resolve<unknown> {
  constructor(private staffService:StaffService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{id}=route.params
    return this.staffService.getOne(id)
  }
}

@Injectable({
  providedIn: 'root'
})
export class PictureResolver implements Resolve<unknown>{
  constructor(private staffService:StaffService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{id} = route.params
    return this.staffService.getPicture(id)
  }
}
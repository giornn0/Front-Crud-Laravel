import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FilmService } from './film.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsResolver implements Resolve<unknown> {
  constructor(private filmService: FilmService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const {page}=route.queryParams
    return this.filmService.getIndex(page)
  }
}

@Injectable({
  providedIn: 'root'
})
export class FilmResolver implements Resolve<unknown> {
  constructor(private filmService: FilmService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const{id}=route.params
    return this.filmService.getOne(id)
  }
}

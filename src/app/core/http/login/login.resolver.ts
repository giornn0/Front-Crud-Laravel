import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable, of } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginResolver implements Resolve<Subscription> {
  constructor(private logService: LoginService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Subscription {
    return this.logService.statusSession().subscribe(
      (res) => this.logService.logged.next(true),
      (error) => {
        this.logService.logged.next(false);
        this.router.navigate(['login']);
      }
    );
  }
}

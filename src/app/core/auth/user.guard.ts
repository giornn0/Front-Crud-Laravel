import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLoggedInterceptor } from '../interceptors/auth-logged.interceptor';
import { AlertsService } from '../services/alerts/alerts.service';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  logged: boolean = false;
  constructor(private router: Router, private userService: UserService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if ((localStorage.getItem('token')&& sessionStorage.getItem('id'))) {
      this.userService.userLogged()
      this.logged = true;
    } else {
      this.userService.userLoggedOut()
      this.router.navigate(['/login'])
      this.logged = false;
    }
    return this.logged;
  }
}

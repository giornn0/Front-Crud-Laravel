import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  logged: Subject<boolean> = new Subject();

  constructor() {}

  userLogged() {
    this.logged.next(true);
  }
  userLoggedOut() {
    this.logged.next(false);
  }

  getUserStatus():Observable<boolean>{
    return this.logged.asObservable()
  }
  getUserStatusPromise():Promise<boolean>{
    return this.logged.toPromise()
  }
}

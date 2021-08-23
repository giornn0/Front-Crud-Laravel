import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  logged: Subject<boolean> = new Subject();

  login(user: Usuario): Observable<any> {
    return this.http.post(`${env.API_URL}/login`, user);
  }
  restart(mail: string): Observable<any> {
    return this.http.post(`${env.API_URL}/login/restart`, mail);
  }
  createUser(user:Usuario){
    return this.http.post(`${env.API_URL}/register`, user)
  }

  logout(id: string): Observable<any> {
    return this.http.delete(`${env.API_URL}/logout/${id}`);
  }
  statusSession(): Observable<unknown> {
    return this.http.get(`${env.API_URL}/logstatus`);
  }
  getSessionStatus(): Observable<any> {
    return this.logged.asObservable();
  }
}

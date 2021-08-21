import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: Usuario): Observable<any> {
    console.log(user, env.API_URL)
    return this.http.post(`${env.API_URL}/login`, user);
  }
  restart(mail:string): Observable<any>{
    return this.http.post(`${env.API_URL}/login/restart`,mail)
  }

  logout(id:number): Observable<any> {
    return this.http.delete(`${env.API_URL}/login/${id}`);
  }
}

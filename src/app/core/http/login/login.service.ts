import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(`${env.API_URL}/login`, user);
  }
  restart(mail:string): Observable<any>{
    return this.http.post(`${env.API_URL}/login/restart`,mail)
  }

  logout(id:number | null): Observable<any> {
    if(id)return this.http.delete(`${env.API_URL}/login/:id`);
    return new Observable()
  }
}

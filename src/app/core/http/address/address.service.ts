import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AddressService {
  constructor(private http: HttpClient) {}

  getOne(id: number) {
    return this.http.get(`${env.API_URL}/address/${id}`);
  }
  create(address:any) {
    return this.http.post(`${env.API_URL}/address/`, address);
  }
  update(address:any, id: number) {
    return this.http.put(`${env.API_URL}/address/${id}`, address);
  }
  destroy(id:number) {
    return this.http.delete(`${env.API_URL}/address/${id}`);
  }
}

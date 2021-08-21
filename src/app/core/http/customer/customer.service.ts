import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getIndex(page = 1) {
    return this.http.get(`${env.API_URL}/customers?page=${page}`);
  }

  getOne(id: number) {
    return this.http.get(`${env.API_URL}/customers/${id}`);
  }
  create(customers:any) {
    return this.http.post(`${env.API_URL}/customers/`, customers);
  }
  update(customers:any , id:number) {
    return this.http.put(`${env.API_URL}/customers/${id}`, customers);
  }
  destroy(id:number) {
    return this.http.delete(`${env.API_URL}/customers/${id}`);
  }
}

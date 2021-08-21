import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient) { }

  getIndex(page=1){
    return this.http.get(`${env.API_URL}/rentals?page=${page}`)
  }

  getOne(id:number){
    return this.http.get(`${env.API_URL}/rentals/${id}`)
  }
  create(rentals:any){
    return this.http.post(`${env.API_URL}/rentals/`,rentals)
  }
  update(rentals:any,id:number){
    return this.http.put(`${env.API_URL}/rentals/${id}`,rentals)
  }
  destroy(id:number){
    return this.http.delete(`${env.API_URL}/rentals/${id}`)
  }
}

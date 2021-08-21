import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env  } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  constructor(private http: HttpClient) { }

  getIndex(page=1){
    return this.http.get(`${env.API_URL}/inventory?page=${page}`)
  }

  getOne(id:number){
    return this.http.get(`${env.API_URL}/inventory/${id}`)
  }
  create(inventory:any){
    return this.http.post(`${env.API_URL}/inventory/`,inventory)
  }
  update(inventory:any,id:number){
    return this.http.put(`${env.API_URL}/inventory/${id}`,inventory)
  }
  destroy(id:number){
    return this.http.delete(`${env.API_URL}/inventory/${id}`)
  }
}

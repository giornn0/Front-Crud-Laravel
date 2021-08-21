import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private http: HttpClient) { }

  getIndex(page=1){
    return this.http.get(`${env.API_URL}/store?page=${page}`)
  }

  getOne(id:number){
    return this.http.get(`${env.API_URL}/store/${id}`)
  }
  create(store:any){
    return this.http.post(`${env.API_URL}/store/`,store)
  }
  update(store:any,id:number){
    return this.http.put(`${env.API_URL}/store/${id}`,store)
  }
  destroy(id:number){
    return this.http.delete(`${env.API_URL}/store/${id}`)
  }
}

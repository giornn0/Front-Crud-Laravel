import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getIndex(page=1){
    return this.http.get(`${env.API_URL}/film?page=${page}`)
  }

  getOne(id:number){
    return this.http.get(`${env.API_URL}/film/${id}`)
  }
  create(film:any){
    return this.http.post(`${env.API_URL}/film/`,film)
  }
  update(film:any,id:number){
    return this.http.put(`${env.API_URL}/film/${id}`,film)
  }
  destroy(id:number){
    return this.http.delete(`${env.API_URL}/film/${id}`)
  }
}

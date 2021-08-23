import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from 'src/app/shared/models/venta.model';
import {environment as env} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http:HttpClient) { }



  index(page?:number):Observable<unknown>{
    return this.http.get(`${env.API_URL}/ventas?page=${page}`)
  }
  getOne(id:number):Observable<unknown>{
    return this.http.get(`${env.API_URL}/ventas/${id}`)
  }
  create(venta:Venta):Observable<unknown>{
    return this.http.post(`${env.API_URL}/ventas`,venta)
  }
  edit(venta:Venta,id:number):Observable<unknown>{
    return this.http.put(`${env.API_URL}/ventas/${id}`,venta)
  }
  delete(id:number):Observable<unknown>{
    return this.http.delete(`${env.API_URL}/ventas/${id}`)
  }

}

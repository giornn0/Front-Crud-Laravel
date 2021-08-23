import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/shared/models/producto.model';
import { environment as env} from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }



  index(page?:number):Observable<unknown>{
    return this.http.get(`${env.API_URL}/productos?page=${page}`)
  }
  getOne(id:number):Observable<unknown>{
    return this.http.get(`${env.API_URL}/productos/${id}`)
  }
  create(producto:Producto):Observable<unknown>{
    return this.http.post(`${env.API_URL}/productos`,producto)
  }
  edit(producto:Producto,id:number):Observable<unknown>{
    return this.http.put(`${env.API_URL}/productos/${id}`,producto)
  }
  delete(id:number):Observable<unknown>{
    return this.http.delete(`${env.API_URL}/productos/${id}`)
  }

}

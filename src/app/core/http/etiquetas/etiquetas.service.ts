import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etiqueta } from 'src/app/shared/models/etiqueta.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  constructor(private http:HttpClient) { }

  index(page:number):Observable<unknown>{
    return this.http.get(`${env.API_URL}/etiquetas_prod?page=${page}`)
  }
  getOne(id:number):Observable<unknown>{
    return this.http.get(`${env.API_URL}/etiquetas_prod/${id}`)
  }
  create(etiqueta:Etiqueta):Observable<unknown>{
    return this.http.post(`${env.API_URL}/etiquetas_prod`,etiqueta)
  }
  edit(etiqueta:Etiqueta,id:number):Observable<unknown>{
    return this.http.put(`${env.API_URL}/etiquetas_prod/${id}`,etiqueta)
  }
  delete(id:number):Observable<unknown>{
    return this.http.delete(`${env.API_URL}/etiquetas_prod/${id}`)
  }

}

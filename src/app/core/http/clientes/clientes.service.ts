import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { environment as env } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  index(page?: number): Observable<unknown> {
    return this.http.get(`${env.API_URL}/clientes?page=${page}`);
  }
  getOne(id: number): Observable<unknown> {
    return this.http.get(`${env.API_URL}/clientes/${id}`);
  }
  create(cliente: Cliente): Observable<unknown> {
    return this.http.post(`${env.API_URL}/clientes`, cliente);
  }
  edit(cliente: Cliente, id: number): Observable<unknown> {
    return this.http.put(`${env.API_URL}/clientes/${id}`, cliente);
  }
  delete(id: number): Observable<unknown> {
    return this.http.delete(`${env.API_URL}/clientes/${id}`);
  }
}

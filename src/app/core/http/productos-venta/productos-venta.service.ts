import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoVenta } from 'src/app/shared/models/producto-venta.model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosVentaService {
  constructor(private http: HttpClient) {}

  getProductosVenta(id_venta: number): Observable<unknown> {
    return this.http.get(`${env.API_URL}/ventas/${id_venta}/productos_ventas`);
  }
  chargeProducto(producto: ProductoVenta) {
    return this.http.post(
      `${env.API_URL}/ventas/${producto.venta_id}/productos_ventas`,
      producto
    );
  }
  updateProducto(producto: ProductoVenta):Observable<unknown> {
    return this.http.put(
      `${env.API_URL}/ventas/${producto.venta_id}/productos_ventas/${producto.id}`,
      producto
    );
  }
  delete(id_producto:number,id_venta:number):Observable<unknown>{
    return this.http.delete(`${env.API_URL}/ventas/${id_venta}/productos_ventas/${id_producto}`)
  }
}

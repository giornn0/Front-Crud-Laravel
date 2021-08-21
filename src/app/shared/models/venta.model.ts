import { Producto } from "./producto.model";

export interface Venta {
   cliente_id:number,
   monto: number,
   fecha: Date,
   productos: Producto[]
}
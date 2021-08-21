import { Producto } from "./producto.model";

export interface Venta {
   id?:number,
   cliente_id:number,
   monto: number,
   fecha: Date,
   productos: Producto[]
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClientesResolver } from 'src/app/core/http/clientes/clientes.resolver';
import { AllProductosResolver } from 'src/app/core/http/productos/productos.resolver';
import {
  VentaResolver,
  VentasResolver,
} from '../../core/http/ventas/ventas.resolver';
import { ProductosVentaResolver } from '../../core/http/productos-venta/productos-venta.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {ventas: VentasResolver },
  },
  {
    path: 'crear',
    resolve: { productos: AllProductosResolver, clientes: AllClientesResolver },
  },
  {
    path: 'editar/:id/',
    resolve: {
      productos: AllProductosResolver,
      clientes: AllClientesResolver,
      prod_en_venta: ProductosVentaResolver,
      venta: VentaResolver,
    },
  },
  {
    path: 'ver/:id/',
    resolve: {
      prod_en_venta: ProductosVentaResolver,
      venta: VentaResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasRoutingModule {}
export const routingComponents = [];

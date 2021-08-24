import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClientesResolver } from 'src/app/core/http/clientes/clientes.resolver';
import { AllProductosResolver } from 'src/app/core/http/productos/productos.resolver';
import {
  VentaResolver,
  VentasResolver,
} from '../../core/http/ventas/ventas.resolver';
import { ProductosVentaResolver } from '../../core/http/productos-venta/productos-venta.resolver';
import { ListComponent } from './pages/list/list.component';
import { FormComponent } from './pages/form/form.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosVentasFormComponent } from './components/productos-ventas-form/productos-ventas-form.component';

const routes: Routes = [
  {
    path: '',
    resolve: { ventas: VentasResolver },
    component: ListComponent,
  },
  {
    path: '',
    outlet: 'header',
    component: HeaderComponent,
  },
  {
    path: 'crear',
    resolve: { productos: AllProductosResolver, clientes: AllClientesResolver },
    component: FormComponent,
  },
  {
    path: 'editar/:id',
    resolve: {
      productos: AllProductosResolver,
      clientes: AllClientesResolver,
      prod_en_venta: ProductosVentaResolver,
      venta: VentaResolver,
    },
    component: FormComponent,
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
export const routingComponents = [
  HeaderComponent,
  ListComponent,
  FormComponent,
  ProductosVentasFormComponent
];

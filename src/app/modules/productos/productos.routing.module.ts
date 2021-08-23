import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtiquetasResolver } from 'src/app/core/http/etiquetas/etiquetas.resolver';
import {
  ProductoResolver,
  ProductosResolver,
} from 'src/app/core/http/productos/productos.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { productos: ProductosResolver },
  },
  {
    path: 'crear',
    resolve: { etiquetas: EtiquetasResolver },
  },
  {
    path: 'editar/:id/',
    resolve: { producto: ProductoResolver, etiquetas: EtiquetasResolver },
  },
  {
    path: 'etiquetas',
    loadChildren: () =>
      import('../etiquetas/etiquetas.module').then((m) => m.EtiquetasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
export const routingComponents = [];

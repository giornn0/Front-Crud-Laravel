import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtiquetasResolver } from 'src/app/core/http/etiquetas/etiquetas.resolver';
import {
  ProductoResolver,
  ProductosResolver,
} from 'src/app/core/http/productos/productos.resolver';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {
    path: '',
    resolve: { productos: ProductosResolver },
    component: ListComponent,
  },
  {
    path: '',
    outlet: 'header',
    component: HeaderComponent,
  },
  {
    path: 'crear',
    resolve: { etiquetas: EtiquetasResolver },
    component: FormComponent,
  },
  {
    path: 'etiquetas',
    loadChildren: () =>
    import('../etiquetas/etiquetas.module').then((m) => m.EtiquetasModule),
  },
  {
    path: 'editar/:id',
    resolve: { producto: ProductoResolver, etiquetas: EtiquetasResolver },
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
export const routingComponents = [
  HeaderComponent,
  FormComponent,
  ListComponent,
];

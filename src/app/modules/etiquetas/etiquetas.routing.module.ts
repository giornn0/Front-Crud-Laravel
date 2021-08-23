import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  EtiquetaResolver,
  EtiquetasResolver,
} from 'src/app/core/http/etiquetas/etiquetas.resolver';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { LoginResolver } from '../../core/http/login/login.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { etiquetas: EtiquetasResolver },
    component: ListComponent,
  },
  {
    path: 'crear',
    component: FormComponent,
    resolve:{LoginResolver}
  },
  {
    path: 'editar/:id',
    resolve: { etiqueta: EtiquetaResolver },
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtiquetasRoutingModule {}
export const routingComponents = [FormComponent, ListComponent];

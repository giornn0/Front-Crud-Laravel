import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ClienteResolver,
  ClientesResolver,
} from 'src/app/core/http/clientes/clientes.resolver';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';

const routes: Routes = [
  {
    path: '',
    resolve: { clientes: ClientesResolver },
    component: ListComponent,
  },
  {
    path: '',
    outlet: 'header',
    component: HeaderComponent,
  },
  {
    path: 'crear',
    component: FormComponent,
  },
  {
    path: 'editar/:id/',
    resolve: { cliente: ClienteResolver },
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
export const routingComponents = [
  FormComponent,
  HeaderComponent,
  ListComponent,
];
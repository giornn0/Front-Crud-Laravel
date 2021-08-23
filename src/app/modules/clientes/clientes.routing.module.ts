import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ClienteResolver,
  ClientesResolver,
} from 'src/app/core/http/clientes/clientes.resolver';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './pages/form/form.component';
import { ListComponent } from './pages/list/list.component';
import { LoginResolver } from '../../core/http/login/login.resolver';

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
    resolve: { LoginResolver },
    component: FormComponent,
  },
  {
    path: 'editar/:id',
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
  HeaderComponent,
  FormComponent,
  ListComponent,
];

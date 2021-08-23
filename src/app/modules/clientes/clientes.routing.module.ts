import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteResolver, ClientesResolver } from 'src/app/core/http/clientes/clientes.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { clientes: ClientesResolver },
  },
  {
    path:'crear',

  },
  {
    path:'editar/:id/',
    resolve: {cliente:ClienteResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
export const routingComponents = [];

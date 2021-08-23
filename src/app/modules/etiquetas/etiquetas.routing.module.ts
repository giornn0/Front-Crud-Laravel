import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { etiquetaResolver, etiquetasResolver } from 'src/app/core/http/etiquetas/etiquetas.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { etiquetas: etiquetasResolver },
  },
  {
    path:'crear',

  },
  {
    path:'editar/:id/',
    resolve: {etiqueta:EtiquetaResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtiquetasRoutingModule {}
export const routingComponents = [];

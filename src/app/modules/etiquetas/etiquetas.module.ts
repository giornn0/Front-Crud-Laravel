import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EtiquetasRoutingModule, routingComponents } from './etiquetas.routing.module';

@NgModule({
  declarations: [routingComponents],
  imports: [CommonModule, EtiquetasRoutingModule],
})
export class EtiquetasModule {}

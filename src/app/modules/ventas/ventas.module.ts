import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingComponents, VentasRoutingModule } from './ventas.routing.module';



@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingComponents } from './clientes.routing.module';



@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }

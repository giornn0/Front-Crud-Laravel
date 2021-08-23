import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingComponents } from './productos.routing.module';



@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }

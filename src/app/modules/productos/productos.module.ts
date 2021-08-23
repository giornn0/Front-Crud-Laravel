import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ProductosRoutingModule,
  routingComponents,
} from './productos.routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class ProductosModule {}

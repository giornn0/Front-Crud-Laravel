import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ProductosRoutingModule,
  routingComponents,
} from './productos.routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class ProductosModule {}

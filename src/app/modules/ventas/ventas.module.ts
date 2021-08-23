import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  routingComponents,
  VentasRoutingModule,
} from './ventas.routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    VentasRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class VentasModule {}

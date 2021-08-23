import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  routingComponents,
  VentasRoutingModule,
} from './ventas.routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    VentasRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class VentasModule {}

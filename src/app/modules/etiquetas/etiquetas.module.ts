import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EtiquetasRoutingModule,
  routingComponents,
} from './etiquetas.routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    EtiquetasRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class EtiquetasModule {}

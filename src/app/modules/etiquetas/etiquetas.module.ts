import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EtiquetasRoutingModule,
  routingComponents,
} from './etiquetas.routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    EtiquetasRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
})
export class EtiquetasModule {}

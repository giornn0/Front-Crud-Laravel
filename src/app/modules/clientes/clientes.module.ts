import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routingComponents, ClientesRoutingModule } from './clientes.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    ClientesRoutingModule,
    SharedModule
  ]
})
export class ClientesModule { }

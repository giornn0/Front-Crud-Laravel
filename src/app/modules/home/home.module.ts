import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule, routingComponents } from './home.routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/core/material.module';



@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class HomeModule { }

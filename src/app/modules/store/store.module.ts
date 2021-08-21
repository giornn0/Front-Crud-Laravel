import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingComponents, StoreRoutingModule } from './store-routing.module';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SelectClickOutside } from 'src/app/directives/selec&&clickoutisde.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class StoreModule {}

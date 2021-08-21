import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  RentalsRoutingModule,
  routingComponents,
} from './rentals-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/core/material.module';

@NgModule({
  declarations: [routingComponents],
  imports: [CommonModule, RentalsRoutingModule, MaterialModule, SharedModule],
})
export class RentalsModule {}

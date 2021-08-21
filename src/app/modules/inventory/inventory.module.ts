import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  InventoryRoutingModule,
  routingComponents,
} from './inventory-routing.module';
import { FormComponent } from './pages/form/form.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [routingComponents],
  imports: [CommonModule, InventoryRoutingModule, MaterialModule, SharedModule],
})
export class InventoryModule {}

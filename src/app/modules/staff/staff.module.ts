import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routingComponents, StaffRoutingModule } from './staff-routing.module';
import { FormComponent } from './pages/form/form.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    StaffRoutingModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class StaffModule {}

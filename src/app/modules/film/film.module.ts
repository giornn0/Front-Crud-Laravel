import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule, routingComponents } from './film-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from 'src/app/core/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [routingComponents],
  imports: [CommonModule, FilmRoutingModule, MaterialModule, SharedModule, ReactiveFormsModule],
})
export class FilmModule {}

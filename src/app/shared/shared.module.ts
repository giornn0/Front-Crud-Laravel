import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './components/alerts/alerts.component';
import { ButtonActionsComponent } from './components/button-actions/button-actions.component';
import { MaterialModule } from '../core/material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { SelectClickOutside } from '../directives/selec&&clickoutisde.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AlertsComponent,
    ButtonActionsComponent,
    DialogComponent,
    SelectClickOutside,
    SpinnerComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [
    AlertsComponent,
    ButtonActionsComponent,
    SelectClickOutside,
    SpinnerComponent
  ],
})
export class SharedModule {}

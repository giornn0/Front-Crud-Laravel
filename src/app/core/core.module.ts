import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [CommonModule,MaterialModule, ReactiveFormsModule],
  exports: [HeaderComponent, SideNavComponent],
})
export class CoreModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [CommonModule,MaterialModule,RouterModule],
  exports: [HeaderComponent, SideNavComponent],
})
export class CoreModule {}

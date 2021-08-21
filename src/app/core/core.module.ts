import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [HeaderComponent, SideNavComponent],
  imports: [CommonModule,MaterialModule],
  exports: [HeaderComponent, SideNavComponent],
})
export class CoreModule {}

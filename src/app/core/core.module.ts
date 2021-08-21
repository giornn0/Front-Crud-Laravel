import { NgModule } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FlexLayoutComponent, SideNavComponent, HeaderComponent],
  imports: [MaterialModule, FontAwesomeModule, RouterModule, SharedModule],
  providers: [],
  exports: [
    FlexLayoutComponent,
    MaterialModule,
    SideNavComponent,
    HeaderComponent,
  ],
})
export class CoreModule {}

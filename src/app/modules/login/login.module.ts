import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SetMail, UserLogComponent } from './page/user-log/user-log.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/core/material.module';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

@NgModule({
  declarations: [UserLogComponent,SetMail],
  entryComponents:[SetMail],
  imports: [CommonModule, ReactiveFormsModule, LoginRoutingModule, MaterialModule],
  providers: [{
    provide:MAT_DIALOG_DEFAULT_OPTIONS,useValue:{hasBackdrop:true}
  }]
})
export class LoginModule {}

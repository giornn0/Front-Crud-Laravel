import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLogComponent } from './page/user-log/user-log.component';

const routes: Routes = [
  {
    path: '',
    component: UserLogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

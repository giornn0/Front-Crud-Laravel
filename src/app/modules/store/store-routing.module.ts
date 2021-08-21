import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffsResolver } from 'src/app/core/http/staff/staff.resolver';
import {
  StoreResolver,
  StoresResolver,
} from 'src/app/core/http/store/store.resolver';
import { HeaderComponent } from './components/header/header.component';
import { FirstComponent } from './pages/first/first.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    resolve: { store: StoresResolver },
    component: FirstComponent,
  },
  {
    path: '',
    outlet: 'header-top',
    component: HeaderComponent,
  },
  {
    path: 'create',
    resolve:{staff: StaffsResolver},
    component: FormComponent,
  },
  {
    path: 'edit/:id',
    resolve: { store: StoreResolver, staff:StaffsResolver },
    component: FormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
export const routingComponents = [FirstComponent, HeaderComponent,FormComponent];

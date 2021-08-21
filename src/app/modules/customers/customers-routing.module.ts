import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CustomerResolver,
  CustomersResolver,
} from 'src/app/core/http/customer/customer.resolver';
import { StoresResolver } from 'src/app/core/http/store/store.resolver';
import { HeaderComponent } from './components/header/header.component';
import { FirstComponent } from './pages/first/first.component';
import { FormComponent } from './pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        outlet: 'header-top',
        component: HeaderComponent,
      },
      {
        path: '',
        resolve: { customers: CustomersResolver },
        component: FirstComponent,
      },
      {
        path: 'create',
        resolve:{stores:StoresResolver},
        component: FormComponent,
      },
      {
        path: 'edit/:id',
        resolve: { customer: CustomerResolver, stores:StoresResolver },
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}

export const routingComponents = [
  FirstComponent,
  HeaderComponent,
  FormComponent,
];

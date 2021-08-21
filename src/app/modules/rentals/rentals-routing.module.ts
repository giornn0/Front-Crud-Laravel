import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  RentalResolver,
  RentalsResolver,
} from 'src/app/core/http/rental/rental.resolver';
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
        resolve: { rentals: RentalsResolver },
        component: FirstComponent,
      },
      {
        path: 'edit',
        component: FormComponent,
      },
      {
        path: 'edit/:id',
        resolve: { rental: RentalResolver },
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalsRoutingModule {}
export const routingComponents = [
  FirstComponent,
  HeaderComponent,
  FormComponent,
];

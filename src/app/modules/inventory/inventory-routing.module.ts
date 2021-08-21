import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  InventoriesResolver,
  InventoryResolver,
} from 'src/app/core/http/inventory/inventory.resolver';
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
        resolve: { inventory: InventoriesResolver },
        component: FirstComponent,
      },
      {
        path: 'edit',
        component: FormComponent,
      },
      {
        path: 'edit/:id',
        resolve: { inventory: InventoryResolver },
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventoryRoutingModule {}
export const routingComponents = [
  FirstComponent,
  HeaderComponent,
  FormComponent,
];

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/auth/user.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'customers',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/customers/customers.module').then(
        (m) => m.CustomersModule
      ),
  },
  {
    path: 'rentals',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/rentals/rentals.module').then((m) => m.RentalsModule),
  },
  {
    path: 'staff',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'film',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/film/film.module').then((m) => m.FilmModule),
  },
  {
    path: 'inventory',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/inventory/inventory.module').then(
        (m) => m.InventoryModule
      ),
  },
  {
    path: 'store',
    canActivate: [UserGuard],
    loadChildren: () =>
      import('./modules/store/store.module').then((m) => m.StoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

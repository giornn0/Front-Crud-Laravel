import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  FilmResolver,
  FilmsResolver,
} from 'src/app/core/http/film/film.resolver';
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
        resolve: { films: FilmsResolver },
        component: FirstComponent,
      },
      {
        path: 'create',
        component: FormComponent,
      },
      {
        path: 'edit/:id',
        resolve: { film: FilmResolver },
        component: FormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {}

export const routingComponents = [
  FirstComponent,
  HeaderComponent,
  FormComponent,
];

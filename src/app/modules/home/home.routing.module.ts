import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginResolver } from '../../core/http/login/login.resolver';

const routes: Routes= [
    {
        path: '',
        resolve:{LoginResolver},
        component: HomeComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRoutingModule{}
export const routingComponents = [HomeComponent]
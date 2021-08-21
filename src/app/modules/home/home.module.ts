import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule, routingComponents } from './home.routing.module';



@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

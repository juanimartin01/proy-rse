import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    NavComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent
  ]
})
export class SharedModule { }

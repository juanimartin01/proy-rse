import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmbitosModule } from './ambitos/ambitos.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin.module';
import { HomeModule } from './home/home.module';
import { FacultadesModule } from './facultades/facultades.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AmbitosModule,
    AdminModule,
    HomeModule,
    SharedModule,
    FacultadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

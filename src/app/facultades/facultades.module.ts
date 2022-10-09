import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultadesRoutingModule } from './facultades-routing.module';
import { RectoradoComponent } from './pages/rectorado/rectorado.component';

import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    RectoradoComponent
  ],
  imports: [
    CommonModule,
    FacultadesRoutingModule,
    MatToolbarModule
  ],
  exports: [
    CommonModule,
    FacultadesRoutingModule
  ]
})
export class FacultadesModule { }

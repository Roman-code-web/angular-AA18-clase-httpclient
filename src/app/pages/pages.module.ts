import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetalleComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class PagesModule { }

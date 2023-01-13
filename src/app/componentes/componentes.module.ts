import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TablaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TablaComponent
  ]
})
export class ComponentesModule { }

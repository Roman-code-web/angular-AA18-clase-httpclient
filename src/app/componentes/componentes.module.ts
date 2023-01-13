import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { RouterModule } from '@angular/router';
import { CardTodoComponent } from './card-todo/card-todo.component';
import { CardUserComponent } from './card-user/card-user.component';



@NgModule({
  declarations: [
    TablaComponent,
    CardTodoComponent,
    CardUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    TablaComponent,
    CardTodoComponent,
    CardUserComponent
  ]
})
export class ComponentesModule { }

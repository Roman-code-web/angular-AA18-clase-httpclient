import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardTodoComponent } from './componentes/card-todo/card-todo.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"detalle/:id", component:DetalleComponent,
  children:[
      {path:":idtodo", component:CardTodoComponent}
  ]},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

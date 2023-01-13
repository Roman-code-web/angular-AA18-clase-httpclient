import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatajsonAPIService } from 'src/app/servicios/datajson-api.service';

@Component({
  selector: 'app-card-todo',
  templateUrl: './card-todo.component.html',
  styleUrls: ['./card-todo.component.css']
})
export class CardTodoComponent implements OnInit {
  //1.declaro variables
  ID!:string;
  userTodo:any=[];
  //2.constructor
  constructor(public dataJSON:DatajsonAPIService, public router:ActivatedRoute){}

  //3. ciclo de vida cuando inicia
  ngOnInit(): void {
    //4. obtenemos el parametro idtodo (asi lo llame en el archivo rutas)
    this.ID= String (this.router.snapshot.paramMap.get('idtodo'));
    this.MostrarTodos(this.ID);
    
  }
  //funcion que te muestra los todos de ese usuario
  MostrarTodos(ID:string){
    this.dataJSON.getAllRegistrosTodos().subscribe((data)=>{
      this.userTodo=data.filter((data)=> data.userId==ID)
      this.dataJSON.hidden=true; //oculta el div de la imagen de todos
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatajsonAPIService } from 'src/app/servicios/datajson-api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  ID!:string;
  userEncontrado:any=[];
  userTodo:any=[];

  constructor(private route:ActivatedRoute, private dataJSON: DatajsonAPIService){}

  ngOnInit(): void {
    this.ID=String(this.route.snapshot.paramMap.get('id'));
    this.cargarDatos(this.ID);
  }

  cargarDatos(ID:string){
    this.dataJSON.getAllRegistrosUser().subscribe((data) => {
      this.userEncontrado = data.filter((data) => data.id == ID)
    });
  }
  MostrarTodos(ID:string){
    this.dataJSON.getAllRegistrosTodos().subscribe((data)=>{
      this.userTodo=data.filter((data)=> data.userId==ID)
    });
  }
}

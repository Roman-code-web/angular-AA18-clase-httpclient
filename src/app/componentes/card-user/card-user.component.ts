import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatajsonAPIService } from 'src/app/servicios/datajson-api.service';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css']
})
export class CardUserComponent implements OnInit {
  //1.variables
  ID!:string;
  userEncontrado:any=[];
  
//2.constructor
constructor(public dataJSON: DatajsonAPIService, private route:ActivatedRoute){}
//3.ciclo de vida cuando inicia
  ngOnInit(): void {
    //4. obtenemos el id
    this.ID=String(this.route.snapshot.paramMap.get('id'));
    this.cargarDatos(this.ID);
    this.dataJSON.hidden=false;
  }
  //5.funcion que carga los datos del usuario
  cargarDatos(ID:string){
    this.dataJSON.getAllRegistrosUser().subscribe((data) => {
      this.userEncontrado = data.filter((data) => data.id == ID)
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { DatajsonAPIService } from 'src/app/servicios/datajson-api.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent  implements OnInit {
  //1.variable
  listaRegistros:any = [];
  //2. constructor
  constructor(public datajson:DatajsonAPIService){}
  //3. ciclo de vida inicio
  ngOnInit(): void {
    //5.obtenemos todos lo registros
    this.datajson.getAllRegistrosUser().subscribe(data=> this.listaRegistros=data);
    //this.datajson.getAllRegistros().subscribe( data => console.log(data));
  }

}

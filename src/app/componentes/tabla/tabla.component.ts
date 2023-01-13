import { Component, OnInit } from '@angular/core';
import { DatajsonAPIService } from 'src/app/servicios/datajson-api.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent  implements OnInit {
  listaRegistros:any = [];
  constructor(public datajson:DatajsonAPIService){}

  ngOnInit(): void {
    this.datajson.getAllRegistrosUser().subscribe(data=> this.listaRegistros=data);
    //this.datajson.getAllRegistros().subscribe( data => console.log(data));
  }

}

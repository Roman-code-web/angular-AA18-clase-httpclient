import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatajsonAPIService } from 'src/app/servicios/datajson-api.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  constructor( public dataJSON: DatajsonAPIService){}

  ngOnInit(): void {
   this.dataJSON.hidden=false;
  }
}

import { Component, OnInit } from '@angular/core';
import { DatajsonAPIService } from 'src/app/servicios/datajson-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dataJson:DatajsonAPIService){}
  ngOnInit(): void {
    this.dataJson.hidden=false;
  }
}

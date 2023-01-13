import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatajsonAPIService {
  //1. variable que obtiene la url
  private urlApiJSON="https://jsonplaceholder.typicode.com/todos";

  //2.llamamos a httpclient
  constructor(private http:HttpClient) { }

  //3.funcion que obtiene los registros
  getAllRegistros():Observable<string[]>{
    return this.http.get<string[]>(this.urlApiJSON);
  }
}

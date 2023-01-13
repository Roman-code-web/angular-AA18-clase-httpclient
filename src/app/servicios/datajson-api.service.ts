import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatajsonAPIService {
  hidden=false;
  //1. variable que obtiene la url
  private urlApiJSON="https://jsonplaceholder.typicode.com/";

  //2.llamamos a httpclient
  constructor(private http:HttpClient) { }

  //3.funcion que obtiene los registros de user
  getAllRegistrosUser():Observable<any[]>{
    return this.http.get<any[]>(this.urlApiJSON +'users');
  }
  //4. funcion que obtiene los to do 
  getAllRegistrosTodos():Observable<any[]>{
    return this.http.get<any[]>(this.urlApiJSON + 'todos');
  }

}

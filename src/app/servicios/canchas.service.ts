import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancha } from '../components/models/Cancha.model';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CanchasService {
  canchas: Cancha[] = [];
  constructor(private http:HttpClient) {

  }

  apiUrl = environment.API_URL_;


  //                                   http://localhost:8080/api/field/list

  //HTTP + LOCALHOST:8080 + API/FIELD/LIST

  get(type : string, port: string, body : any){
    return this.http.get<Cancha[]>(type + "://" + this.apiUrl + ":" + port + "/" + body);
  }
  getById(type : string, port: string, body : any, id : number){
    return this.http.get<Cancha>(type + "://" + this.apiUrl + ":" + port + "/" + body + "/" + id);
  }

  getToken(): String{
    return localStorage.getItem('token')!;
  }
}

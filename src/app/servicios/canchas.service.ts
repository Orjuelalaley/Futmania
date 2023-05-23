import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancha } from '../components/models/Cancha.model';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {
  canchas: Cancha[] = [];
  constructor(private http:HttpClient) {

  }

  url = "localhost";

  //http://localhost:8080/api/field/list



  //HTTP + LOCALHOST:8080 + API/FIELD/LIST

  get(type : string, port: string, body : any){
    return this.http.get<Cancha[]>(type + "://" + this.url + ":" + port + "/" + body);
  }
}

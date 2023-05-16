import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cancha } from '../components/models/cancha.model';

@Injectable({
  providedIn: 'root'
})
export class CanchasService {
  canchas: Cancha[] = [];
  constructor(private http:HttpClient) {

  }

  url = "http://localhost:8080/api/field/list";

  getCanchas(){
    return this.http.get<Cancha[]>(this.url);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AplicacionService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private url = 'http://localhost:8080/api/field';
  constructor(private http: HttpClient) { }
  findById(id: number): Observable<any> {
    return this.http.get(this.url + '/' + id);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../components/models/Usuario.model';
import { JwtResponse } from 'app/components/models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:8080';
  authSubject  =  new  BehaviorSubject(false);
  private token: String = "";
  constructor(private httpClient: HttpClient) { }

  register(user: Usuario): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/api/v1/users/register`, user).pipe(
      tap((res:  JwtResponse ) => {

        if (res) {
          // guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }

  login (user: Usuario): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/api/v1/users/login`, user).pipe(
      tap(async (res:  JwtResponse ) => {

        if (res) {
          // guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }


  logout(): void {
    this.token = "";
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): String {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN")!;
    }
    return this.token;
  }
}

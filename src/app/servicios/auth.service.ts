import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Usuario } from '../components/models/Usuario.model';
import { JwtResponse } from 'app/components/models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { RegisterR } from '../components/models/RegisterR.model';
import { UsuarioL } from '../components/models/UsuarioL.model';
import { CookieService } from 'ngx-cookie-service';



@Injectable()
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:8080';
  authSubject  =  new  BehaviorSubject(false);
  private token: String = "";
  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  register(user: Usuario): Observable<RegisterR> {
    console.log('Register: ', user);
    return this.httpClient.post<RegisterR>(this.AUTH_SERVER + '/api/v1/users/register', user);
  }

  login (user: UsuarioL): Observable<JwtResponse>{
    console.log('Login: ', user);
    return this.httpClient.post<JwtResponse>(this.AUTH_SERVER +'/api/v1/users/login', user ).pipe(
      tap((res: JwtResponse) => {
        if (res) {
          this.saveToken(res.accessToken);
          console.log('token: ', this.token);
        }
      })
    );
  }


  logout(): void {
    this.token = "";
    localStorage.removeItem('token');
    this.cookieService.delete('token');
  }

  private saveToken(token: string): void {
    localStorage.setItem('token', token);
    this.token = token;
  }

  getToken(): String {
    if (!this.token) {
      this.token = localStorage.getItem('token')!;
    }
    return this.token;
  }
}

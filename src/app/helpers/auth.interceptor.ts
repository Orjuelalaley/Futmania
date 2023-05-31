import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CanchasService } from '../servicios/canchas.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private canchasService: CanchasService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.canchasService.getToken();
    console.log('tokenInterceptor: ', token);
    if(token){
      const authReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer '  + token)
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}

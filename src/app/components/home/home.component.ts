import { Component } from '@angular/core';
import { Cancha } from '../models/Cancha.model';
import { Equipo } from './equipo.model';
import { Router } from '@angular/router';
import { CanchasService } from '../../servicios/canchas.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Soccer_field = './assets/images/Soccer_field_icon.png';
  logo = './assets/images/logo.png';
  imagen_juan = './assets/images/equipo/patrick.jpeg';
  imagen_tomas = './assets/images/equipo/Tomas3.jpeg';
  imagen_sebas = './assets/images/equipo/sebastian.jpeg';
  imagen_carlos = './assets/images/equipo/uwu.jpeg';

  canchas: Cancha[] = [];
  constructor(private service:CanchasService, private router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.ScrollTop();
    this.service.get("http","8080", "api/v1/field/list").subscribe(data => {
      this.canchas = data;
    });
    if(this.cookieService.check('token') == false){
      this.router.navigate(['/auth/registro']);
    }
  }
    Integrantes:Equipo [] = [
      {
        nombre: 'Juan',
        imagen: this.imagen_juan,
        descripcion: 'Lider Desarrollo',
        especialidad: 'Java · HTML · CSS · Angular · NodeJS · Stringboot · Spring'
      },
      {
        nombre: 'Tomas',
        imagen: this.imagen_tomas,
        descripcion: 'Lider Desarrollo',
        especialidad: 'Java · HTML · CSS'
      },
      {
        nombre: 'Sebastian',
        imagen: this.imagen_sebas,
        descripcion: 'Lider Desarrollo',
        especialidad: 'Java · HTML · CSS · Angular · NodeJS',
      },
      {
        nombre: 'Carlos',
        imagen: this.imagen_carlos,
        descripcion: 'Lider Desarrollo',
        especialidad: 'SpringBoot · Java · HTML · CSS',
      }]

    ScrollTop(){
      window.scrollTo(0,0);
    }


    navegar(web_page : String, cancha: Cancha):void {
      console.log(cancha.id);
      this.router.navigate([web_page, cancha.id]);
    }

}

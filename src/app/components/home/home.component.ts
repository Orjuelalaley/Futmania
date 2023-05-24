import { Component } from '@angular/core';
import { Cancha } from '../models/Cancha.model';
import { Equipo } from './equipo.model';
import { Router } from '@angular/router';
import { CanchasService } from '../../servicios/canchas.service';

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

  cancha1 = './assets/images/canchas/1.jpg';
  cancha2 = './assets/images/canchas/2.jpg';
  cancha3 = './assets/images/canchas/3.jpg';
  cancha4 = './assets/images/canchas/4.jpg';

  canchas: Cancha[] = [];
  constructor(private service:CanchasService, private router: Router) { }

  ngOnInit(): void {
    this.service.get("http","8080", "api/field/list").subscribe(data => {
      this.canchas = data;
  });
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


    navegar(web_page : String):void {
      this.router.navigate([web_page]);
    }

}

import { Component } from '@angular/core';
import { Cancha } from '../canchas/canchas.model';
import { Equipo } from './equipo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Soccer_field = './assets/images/Soccer_field_icon.png';
  logo = './assets/images/logo.png';
  imagen_juan = './assets/images/equipo/patrick.jpeg';
  imagen_tomas = './assets/images/equipo/Tomas2.jpeg';
  imagen_sebas = './assets/images/equipo/sebastian.jpeg';
  imagen_carlos = './assets/images/equipo/uwu.jpeg';
  canchas: Cancha[] = [
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 1',
      imagen: this.logo
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 2',
      imagen: this.logo
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 3',
      imagen: this.logo
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 4',
      imagen: this.logo
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 5',
      imagen: this.logo
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 6',
      imagen: this.logo
    },]
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

}

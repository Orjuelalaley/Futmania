import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cancha } from '../canchas/canchas.model';

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
      imagen: "./assets/images/logo.png"
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 2',
      imagen: "./assets/images/logo.png"
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 3',
      imagen: "./assets/images/logo.png"
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 4',
      imagen: "./assets/images/logo.png"
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 5',
      imagen: "./assets/images/logo.png"
    },
    {
      price: 10000,
      info: 'Cancha de fútbol 5',
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 6',
      imagen: "./assets/images/logo.png"
    },]
    ScrollTop(){
      window.scrollTo(0,0);
    }
}

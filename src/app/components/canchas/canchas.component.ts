import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { CanchasService } from '../../servicios/canchas.service';
import { Cancha } from '../models/cancha.model';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})

export class CanchasComponent {
  img = './assets/images/logo.png';

  cancha1 = './assets/images/canchas/1.jpg';
  cancha2 = './assets/images/canchas/2.jpg';
  cancha3 = './assets/images/canchas/3.jpg';
  cancha4 = './assets/images/canchas/4.jpg';
  Soccer_field = './assets/images/Soccer_field_icon.png';

  canchas: Cancha[] = [];

  /*
  canchas: Cancha[] = [
    {
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 1',
      imagen: this.cancha1
    },
    {
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 2',
      imagen: this.cancha2
    },
    {
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 3',
      imagen: this.cancha3
    },
    {
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 4',
      imagen: this.cancha4
    },
    {
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 5',
      imagen: this.cancha2
    },
    {
      descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, facilis!',
      nombre: 'Cancha 6',
      imagen: this.cancha3
    },]
*/
  constructor(private service:CanchasService, private router:Router) { }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    this.service.getCanchas().subscribe(data => {
        this.canchas = data;
    });
  }

  navegar(web_page : String ):void {
    this.router.navigate([web_page]);
  }

}

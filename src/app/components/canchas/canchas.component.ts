import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { CanchasService } from '../../servicios/canchas.service';
import { Cancha } from '../models/Cancha.model';

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
  constructor(private service:CanchasService, private router:Router) { }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
    this.service.get("http", "8080","api/v1/field/list").subscribe(data => {
        this.canchas = data;
    });
  }

  navegarRegistro( web_page : String):void {
    this.router.navigate([web_page]);
  }

  navegar(web_page : String , cancha: Cancha):void {
    this.router.navigate([web_page, cancha.id]);
  }

}

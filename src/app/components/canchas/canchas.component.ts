import { Component } from '@angular/core';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})

export class CanchasComponent {
  img = './assets/images/logo.png';
  cons = './assets/images/enConstruccion.png';
  Soccer_field = './assets/images/Soccer_field_icon.png';
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

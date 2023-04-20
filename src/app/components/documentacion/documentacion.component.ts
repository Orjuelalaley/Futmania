import { Component } from "@angular/core";
import { Cancha } from '../canchas/canchas.model';

@Component({
    selector: 'app-documentacion',
    templateUrl: './documentacion.component.html',
    styleUrls: ['./documentacion.component.css']
  })

export class DocumentacionComponent {
    img = './assets/images/Modelo_entidad_relacion.png';
    pagInicio = './assets/images/paginaInicio.png';
    pagNosotros = './assets/images/paginaNosotros.png';
    pagCanchas = './assets/images/paginaCanchas.png';
    pagEquipo = './assets/images/paginaEquipo.png';
}

  
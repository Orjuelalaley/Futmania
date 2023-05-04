import { Component } from '@angular/core';
import { Aplicacion } from '../model/aplication';
import { AplicacionService } from '../servicios/aplicacion.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aplication',
  templateUrl: './aplication.component.html',
  styleUrls: ['./aplication.component.css']
})
export class AplicationComponent {
  aplicacion: Aplicacion | undefined;
  inicio = 0;
  constructor(private aplicacionService: AplicacionService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.aplicacionService.findById(2).subscribe(aplicacion => this.aplicacion = aplicacion as Aplicacion);
  }
}

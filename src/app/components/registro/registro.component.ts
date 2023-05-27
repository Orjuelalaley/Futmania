import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const BotonRegistro = document.getElementById('Registrate');
    const BotonInicio = document.getElementById('Iniciasesion');
    const contenedor = document.getElementById('contenedor');

    BotonRegistro?.addEventListener('click', () => {
      contenedor?.classList.add("panel-derecho-activado");
    });
    BotonInicio?.addEventListener('click', () => {
      contenedor?.classList.remove("panel-derecho-activado");
    });
  }



  navegar() {
    this.router.navigate(['/home']);
  }

  IniciarSesion() {


  }
}

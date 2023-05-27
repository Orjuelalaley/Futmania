import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/servicios/auth.service';
import { Usuario } from 'app/components/models/Usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private authService : AuthService) { }

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

  onLogin(form: any) : void {
    console.log('login: ', form.value);
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/home');
    });
  }

  onRegister(form: any) : void {
    console.log('register: ', form.value);
    this.authService.register(form.value).subscribe(res => {
      this.router.navigateByUrl('/home');
    });
  }


  navegar() {
    this.router.navigate(['/home']);
  }

}

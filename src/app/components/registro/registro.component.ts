import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/servicios/auth.service';
import { Usuario } from 'app/components/models/Usuario.model';
import { NgForm } from '@angular/forms';
import { UsuarioL } from 'app/components/models/UsuarioL.model';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private router: Router, private authService : AuthService, private cookieService: CookieService) { }

  usuario: Usuario = {
    name: '',
    telefono: '',
    identification: '',
    email: '',
    password: ''
  }

  usuarioL: UsuarioL = {
    email: '',
    password: ''
  }

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

  onLogin(form: NgForm) : void {
    console.log('login: ', form.value);
    this.usuarioL = form.value;
    this.authService.login(this.usuarioL).subscribe(res => {
        if(res.accessToken != null){
          console.log('login: ', res.accessToken);
          console.log('status: ', res.status);
          this.cookieService.set('token', res.accessToken);
          this.router.navigateByUrl('auth/home');
        }
    });
  }

  onRegister(form: NgForm) : void {
    console.log('register: ', form.value);
    this.usuario = form.value;
    this.authService.register(this.usuario).subscribe(res => {
      console.log('register: ', res.message);
    });
  }


  navegar() {
    this.router.navigate(['/home']);
  }

}

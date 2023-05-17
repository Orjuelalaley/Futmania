import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';
import { RegistrarCanchaComponent } from './canchaR/registrar-cancha/registrar-cancha.component';
import { SolicitarCanchaComponent } from './canchasS/solicitar-cancha/solicitar-cancha.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListarComponent } from './canchas/listar/listar.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    RegistroComponent,
    RegistrarCanchaComponent,
    SolicitarCanchaComponent,
    ListarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }

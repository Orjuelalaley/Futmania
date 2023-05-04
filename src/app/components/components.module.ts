import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';
import { RegistrarCanchaComponent } from './canchaR/registrar-cancha/registrar-cancha.component';
import { SolicitarCanchaComponent } from './canchasS/solicitar-cancha/solicitar-cancha.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    RegistroComponent,
    RegistrarCanchaComponent,
    SolicitarCanchaComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    CommonModule
  ]
})
export class ComponentsModule { }

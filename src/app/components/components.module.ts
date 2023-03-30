import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanchasComponent } from './canchas/canchas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    RegistroComponent,
    RegistroComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    CommonModule
  ]
})
export class ComponentsModule { }

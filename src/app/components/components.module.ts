import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanchasComponent } from './canchas/canchas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavmenuComponent } from './navmenu/navmenu.component';



@NgModule({
  declarations: [
    CanchasComponent,
    PageNotFoundComponent,
    HomeComponent,
    NavmenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [
    CanchasComponent,
    PageNotFoundComponent
  ]
})
export class ComponentsModule { }

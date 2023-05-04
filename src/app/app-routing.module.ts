import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanchasComponent } from './components/canchas/canchas.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistroComponent } from './components/registro/registro.component';
import { DocumentacionComponent } from './components/documentacion/documentacion.component';
import { RegistrarCanchaComponent } from './components/canchaR/registrar-cancha/registrar-cancha.component';
import {SolicitarCanchaComponent} from './components/canchasS/solicitar-cancha/solicitar-cancha.component';



const routes: Routes = [
  { path: '', redirectTo: '/registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent},
  { path: 'home', component: HomeComponent},
  { path: 'canchas', component: CanchasComponent},
  { path: 'home', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)},
  { path: 'not-found', component: PageNotFoundComponent},
  { path: 'documentacion', component: DocumentacionComponent},
  { path: 'registroCancha', component: RegistrarCanchaComponent},
  { path: 'solicitudCancha', component: SolicitarCanchaComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanchasComponent } from '../../canchas/canchas.component';
import { HomeComponent } from '../../home/home.component';
import { PageNotFoundComponent } from '../../page-not-found/page-not-found.component';
import { RegistroComponent } from '../../registro/registro.component';
import { RegistrarCanchaComponent } from '../../canchaR/registrar-cancha/registrar-cancha.component';
import { SolicitarCanchaComponent } from '../../canchasS/solicitar-cancha/solicitar-cancha.component';

const routes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent},
  { path: 'auth/home', component: HomeComponent},
  { path: 'canchas', component: CanchasComponent},
  { path: 'home', loadChildren: () => import('../../../components/components.module').then(m => m.ComponentsModule)},
  { path: 'solicitudCancha/:id', component: SolicitarCanchaComponent },
  { path: 'registroCancha', component: RegistrarCanchaComponent},
  { path: 'solicitudCancha', component: SolicitarCanchaComponent},
  { path: 'auth/**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

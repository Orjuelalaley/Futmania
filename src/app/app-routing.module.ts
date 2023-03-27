import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanchasComponent } from './components/canchas/canchas.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  {path: 'home', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)},
  { path: 'canchas', component: CanchasComponent},
  { path: 'canchas', loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth/registro', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./components/auth/auth/auth.module').then(m => m.AuthModule)},
  { path: '**' , component: PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Estadisticas', component: EstadisticasComponent },
  { path: 'Sugerencias', component: SugerenciasComponent },
  { path: '**', redirectTo: 'Inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

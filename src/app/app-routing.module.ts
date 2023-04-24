import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
  { path: 'Inicio', component: InicioComponent },
  { path: 'Estadisticas', component: EstadisticasComponent },
  { path: 'Sugerencias', component: SugerenciasComponent },
  { path: 'Configuracion', component: ConfiguracionComponent },
  { path: '**', redirectTo: 'Inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
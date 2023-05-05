import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { TabsComponent } from './tabs/tabs.component';
import { FormsModule } from '@angular/forms';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { NgChartsModule } from 'ng2-charts';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { IonicModule } from '@ionic/angular';

/* */
import {BluetoothSerial} from '@awesome-cordova-plugins/bluetooth-serial/ngx';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TabsComponent,
    EstadisticasComponent,
    SugerenciasComponent,
    ConfiguracionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgChartsModule,
    IonicModule.forRoot(),
  ],
  providers: [
    /* */
    BluetoothSerial
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

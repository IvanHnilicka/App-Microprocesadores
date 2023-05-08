import { Component} from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
interface Sugerencia {
  mensaje: string;
}
@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent {
    compilo = true
    sugerencias = [
      {mensaje: "Revisa y repara fugas",tiempo: 4},
      {mensaje: "Cierra el grifo cuando no lo estés usando, por ejemplo, cuando te cepilles los dientes o te afeites."},
      {mensaje: "Toma duchas cortas en lugar de baños de inmersión, ya que esto usa menos agua."},
      {mensaje: "No uses el inodoro como papelera para desechar residuos no orgánicos."},
      {mensaje: "Utiliza electrodomésticos eficientes en el consumo de agua, como lavadoras y lavavajillas de alta eficiencia."},
      {mensaje: "Riega las plantas temprano en la mañana o tarde en la noche para evitar la evaporación del agua."},
      {mensaje: "Recoge agua de lluvia para regar las plantas y limpiar el hogar."},
      {mensaje: "Usa una escoba en lugar de una manguera para limpiar el patio."},
      {mensaje: "Repara cualquier fuga de agua en el hogar tan pronto como sea posible."},
      {mensaje: "Instala aireadores de grifo para reducir la cantidad de agua que se utiliza al lavarse las manos o cepillarse los dientes."},
      {mensaje: "Reutiliza el agua cuando sea posible, por ejemplo, usando agua de la lavadora para regar las plantas."},
      {mensaje: "Usa la lavadora y lavaplatos solamente cuando estén llenos."},
      {mensaje: "Instala inodoros de bajo consumo de agua y arregla las fugas de agua de manera oportuna."},
      {mensaje: "Toma duchas en lugar de baños de tina para ahorrar agua."},
      {mensaje: "No uses la manguera para lavar el carro, en su lugar utiliza un balde con agua y jabón.",},
      {mensaje: "Riega tus plantas temprano en la mañana o tarde en la noche para evitar la evaporación del agua."},
      {mensaje: "Usa plantas nativas o adaptadas a tu clima para reducir la necesidad de riego."},
      {mensaje: "Usa un cubo para lavar el piso en lugar de una manguera."},
      {mensaje: "Usa agua de lluvia para regar las plantas o el jardín."},
      {mensaje: "Participa en campañas de limpieza de ríos y playas para evitar la contaminación del agua."},
      {mensaje: "Usa una cubeta para lavar el carro en lugar de la manguera."},
      {mensaje: "Instala dispositivos de ahorro de agua en tus grifos y duchas."},
      {mensaje: "Reutiliza el agua en la casa, como el agua de la lavadora para el riego de las plantas."},
      {mensaje: "Usa una botella de agua reutilizable en lugar de comprar botellas de agua de plástico."},
      {mensaje: "Usa una escoba en lugar de una manguera para limpiar el exterior de tu casa."},
      {mensaje: "No laves tus platos con el grifo abierto constantemente. En su lugar, llena el lavabo o una cubeta con agua para enjuagarlos."},
      {mensaje: "No descongeles los alimentos bajo el agua corriente. En su lugar, planifica y saca los alimentos del congelador con suficiente anticipación."},
      {mensaje: "No arrojes aceite o grasa por el fregadero, ya que puede obstruir las tuberías y contaminar el suministro de agua."},
      {mensaje: "Lava tus mascotas al aire libre en un área que no tenga césped para evitar que se mezcle con el agua y contamine el suelo."},
    ];
    mensaje = this.sugerencias[0].mensaje
    i = 0;
    avanzar(){
      this.i++
      if(this.i>(this.sugerencias.length-1)){
        this.i = 0
      }
      this.mensaje = this.sugerencias[this.i].mensaje
    }
    retroceder(){
      this.i--
      if(this.i<0){
        this.i = this.sugerencias.length-1
      }
      this.mensaje = this.sugerencias[this.i].mensaje
    }
    constructor(){
      this.i = Math.floor(Math.random() * (this.sugerencias.length + 1));
      this.mensaje = this.sugerencias[this.i].mensaje
    }
}

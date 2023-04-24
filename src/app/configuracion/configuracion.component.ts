import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {
  modal = false;
  modal_guardado = false;

  // Se obtendrán del almacenamiento local una vez implementado
  numPersonas = 3;  
  limiteLitros = 500; 
  
  // Pendiente implementar almacenamiento local
  guardarConfiguracion(){
    this.modal_guardado = true;
    console.log("Configuracion guardada");
  }
}

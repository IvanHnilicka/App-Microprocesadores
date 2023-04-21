import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  configuracion = false;
  personas = 3;
  litros = 500;


  ngOnInit(): void {
    let porcentaje = 80;
    let lecturaSensor = 500;

    let porcentajeLbl = document.getElementById('porcentaje');
    let litrosLbl = document.getElementById("litros");
    this.updateHeight(porcentaje);
    this.updateCounter(porcentajeLbl, porcentaje);
    // this.updateCounter(litrosLbl, lecturaSensor);
  }


  // Realiza la animacion para contador de porcentaje
  updateCounter(label: any, objetivo: number){
    let contador = 0;
    let intervalo = (1/objetivo) * 900;
    let texto = label.textContent;

    const interval = setInterval(function() {
      if(objetivo === 0){
        label!.textContent = texto + '0';
        return;
      }

      contador++;
      label!.textContent = texto + contador.toString();
      if(contador >= objetivo){
        clearInterval(interval);
      }
    }, intervalo);
  }

  
  // Realiza la animacion para actualizar la altura del agua
  updateHeight(altura: number){
    let contador = 0;
    let agua = document.getElementById("agua");

    if(altura === 0){
      agua!.style.height = '0';
      return;
    }

    const interval = setInterval(function() {
      contador++;
      agua!.style.height = contador + '%';
      if(contador >= altura){
        clearInterval(interval);
      }
    }, (1/altura) * 900);
  }


  guardarConfiguracion(){
    console.log("Configuracion guardada");
  }


  // Evita que se oculte el modal si se da clic en algun input
  stopPropagation(event: Event){
    event.stopPropagation();
  }
}

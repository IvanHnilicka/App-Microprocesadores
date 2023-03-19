import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  ngOnInit(): void {
    let porcentaje = 100;
    let lecturaSensor = 500;

    let porcentajeLbl = document.getElementById('porcentaje');
    let litrosLbl = document.getElementById("litros");
    this.updateHeight(porcentaje);
    this.updateCounter(porcentajeLbl, porcentaje);
    this.updateCounter(litrosLbl, lecturaSensor);
  }


  updateCounter(label: any, objetivo: number){
    let contador = 0;
    let intervalo = (1/objetivo) * 1000;
    let texto = label.textContent;

    const interval = setInterval(function() {
      contador++;
      label!.textContent = texto + contador.toString();
      if(contador >= objetivo){
        clearInterval(interval);
      }
    }, intervalo);
  }


  // Pendiente obtener función para calcular intervalos
  updateHeight(altura: number){
    let contador = 0;

    const interval = setInterval(function() {
      contador++;

      let agua = document.getElementById("agua");
      agua!.style.height = contador.toString() + "%";
      if(contador >= altura){
        clearInterval(interval);
      }
    }, 10);
  }
}

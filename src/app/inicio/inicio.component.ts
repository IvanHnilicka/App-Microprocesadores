import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  ngOnInit(): void {
    let porcentaje = 50;
    let lecturaSensor = 500;

    let porcentajeLbl = document.getElementById('porcentaje');
    let litrosLbl = document.getElementById("litros");
    this.updateHeight(porcentaje);
    this.updateCounter(porcentajeLbl, porcentaje);
    this.updateCounter(litrosLbl, lecturaSensor);
  }

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
}

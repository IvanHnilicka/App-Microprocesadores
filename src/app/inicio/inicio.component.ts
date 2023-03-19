import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  ngOnInit(): void {
    this.updateCounter(100);
  }


  updateCounter(objetivo: number){
    const label = document.getElementById('porcentaje');
    let contador = 0;
    let intervalo = (1/objetivo) * 2650;

    const interval = setInterval(function() {
      contador++;
      label!.textContent = contador + "%";
      if(contador >= objetivo){
        clearInterval(interval);
      }
    }, intervalo)
  }
}

import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {
  
  title = 'Consumo diario';

  public barChartLegend = false;  // Indica que no muestre la etiqueta
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],  // Etiquetas para eje x
    datasets: [
      { data: [ 500, 265, 229, 361, 285, 297, 301 ],  // Datos que se graficarán
        label: 'Consumo de agua en litros', // Texto que se muestra en las etiquetas
        backgroundColor: "rgb(133, 237, 255)",  // Color de fondo de las barras
        borderColor: "rgb(133, 237, 255)" // Color del borde de las barras
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };


  datosDiarios(){
    // Elimina todos los elementos del array
    this.barChartData = {
      labels: ['Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],  // Etiquetas para eje x
      datasets: [
        { data: [ 777, 649, 472, 539, 623, 452, 583 ],  // Datos que se graficarán
          label: 'Consumo de agua en litros', // Texto que se muestra en las etiquetas
          backgroundColor: "rgb(133, 237, 255)",  // Color de fondo de las barras
          borderColor: "rgb(133, 237, 255)" // Color del borde de las barras
        }
      ]
    };
  }

  datosMensual(){    
    this.barChartData = {
      labels: ['Semana 1','Semana 2', 'Semana 3', 'Semana 4'],  // Etiquetas para eje x
      datasets: [
        { data: [ 4428, 4985, 4348, 4646],  // Datos que se graficarán
          label: 'Consumo de agua en litros', // Texto que se muestra en las etiquetas
          backgroundColor: "rgb(133, 237, 255)",  // Color de fondo de las barras
          borderColor: "rgb(133, 237, 255)" // Color del borde de las barras
        }
      ]
    };
  }

  datosAnual(){
    this.barChartData = {
      labels: ['Enero','Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],  // Etiquetas para eje x
      datasets: [
        { data: [ 16990, 17420, 17247, 17493, 16360, 17570, 17086, 16544, 16673, 16606, 16021, 16489 ],  // Datos que se graficarán
          label: 'Consumo de agua en litros', // Texto que se muestra en las etiquetas
          backgroundColor: "rgb(133, 237, 255)",  // Color de fondo de las barras
          borderColor: "rgb(133, 237, 255)" // Color del borde de las barras
        }
      ]
    };
  }

}

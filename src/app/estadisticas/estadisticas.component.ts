import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

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
    labels: [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo' ],  // Eti1uetas para eje x
    datasets: [
      { data: [ 500, 260, 200, 300, 285, 297, 301 ],  // Datos que se graficarán
        label: 'Consumo en litros de agua', // Leyenda que se muestra en la etiqueta si se está mostrandos
        backgroundColor: "rgb(133, 237, 255)",  // Color de fondo de las barras
        borderColor: "rgb(133, 237, 255)"
      }  // Color del borde de las barras
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true
  };
}

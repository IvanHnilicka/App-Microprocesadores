import { Component } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SmartTank';

  constructor(private ls: LocalStorageService){}

  datosIngresados(){
    if(this.ls.leerDatos("numPersonas") && this.ls.leerDatos("limiteLitros")){
      return true;
    }

    return false;
  }
}

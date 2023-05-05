import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';
/**/
import { BluetoothSerial } from '@awesome-cordova-plugins/bluetooth-serial/ngx'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{ 
  constructor(private ls: LocalStorageService, private router: Router,/**/private BluetoothSerial:BluetoothSerial, private alertController : AlertController){}

  ngOnInit(): void {
    if(!this.ls.leerDatos("numPersonas") || !this.ls.leerDatos("limiteLitros")){
      this.router.navigate(["Configuracion"]);
    }


    let porcentaje = 80;  // Se calculará en base a la lectura del sensor y el tamaño del tinaco
    let porcentajeLbl = document.getElementById('porcentaje');
    this.updateHeight(porcentaje);
    this.updateCounter(porcentajeLbl, porcentaje);
  }


  // Realiza la animacion para contador de porcentaje
  updateCounter(label: any, objetivo: number){
    let contador = 0;
    let intervalo = (1 / objetivo) * 900;
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

  
  // Realiza la animacion para actualizar la altura del agua en el tinaco
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


  /**/
  ActivarBluetooth(){
    this.BluetoothSerial.isEnabled().then(response=>{
      this.MensajeAlerta("Está conectado");
      console.log("Esta conectado");
      this.Listdevices()
    }, error => {
      this.MensajeAlerta("No está conectado");
      console.log("No está conectado");
    })
  }

  async MensajeAlerta(msg : any){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: msg,
      buttons: [{
        text: 'Okay',
        handler: () => {
          console.log("Okay")
        }
      }]
    })
  }
  
  Devices: any
  Listdevices(){
    this.BluetoothSerial.list().then(response => {
    this.Devices=response
    }, error=>{
      console.log(("Error en Listdevices"))
    })
  }

  connect(address : any){
    this.BluetoothSerial.connect(address).subscribe(success=>{
      this.deviceConnected()
    },error=>{
      console.log("Error en connect")
    })
  }

  deviceConnected(){
    this.BluetoothSerial.subscribe('/n').subscribe(success=>{
      this.hundler(success)
    })
  }
  
  hundler(value : any){
    console.log(value)
  }

  setData(){
    this.BluetoothSerial.write("7").then(response=>{
      console.log("Oky")
    }, error=>{
      console.log("Error en setData")
    })
  }

  Disconnected(){
    this.BluetoothSerial.disconnect()
    console.log("dispositivo desconectado")
  }
  
}
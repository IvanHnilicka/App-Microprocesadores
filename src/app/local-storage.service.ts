import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  guardarDatos(nombre: string, datos: any){
    localStorage.setItem(nombre, datos);
  }

  leerDatos(nombre: string){
    return(localStorage.getItem(nombre) ? localStorage.getItem(nombre) : null);
  }

  actualizarDatos(nombre: string, datosNuevos: any){
    localStorage.setItem(nombre, datosNuevos);
  }

  borrarDatos(nombre: string){
    localStorage.removeItem(nombre);
  }

}

import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };


  constructor(  @Inject(DOCUMENT) private _document) { 

    // esto lo inyectmos en el app.components
    // con la primera llamada ya va ejecutar esta llamada
    this.cargarAjustes();

  }

  guardarAjustes() {
    // asi de imple sin importar nada guardamos el objeto al local storage
    // convertimos el objeto ajustes a un json string
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
    // console.log('Datos guardados');

  }

  cargarAjustes() {

    // preguntamos si la llave ajutes existe
    // si existe lo cargamos, previa conversion a objeto con la funcion
    // json.parse
    if (localStorage.getItem('ajustes')) {
       this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
       console.log('Cargando del localstorage');

       // aplicamos el tema por defecto
       this.aplicarTema ( this.ajustes.tema );

    } else {
      // console.log('Usando valores por defecto');
      this.aplicarTema ( this.ajustes.tema );
    }
  }

  aplicarTema( tema: string) {
    // tslint:disable-next-line:prefer-const
    let url = `assets/css/colors/${ tema }.css`
    this._document.getElementById('tema').setAttribute('href',url)

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();

  }


}

interface Ajustes {
  temaUrl:string;
  tema:string;
}

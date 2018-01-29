import { Component, OnInit, Inject } from "@angular/core";
import { inject } from '@angular/core/src/render3';
import { DOCUMENT } from "@angular/platform-browser";

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: []
})
export class AcountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService ) { }

  ngOnInit() {
  }

  cambiarColor(tema:string, link: any){

    this.aplicarChek (link);
    this._ajustes.aplicarTema ( tema );

  }

  aplicarChek ( link: any){

    //aqui obtenemos un arreglo de todos los selectores con nombre selector
    let selectores: any = document.getElementsByClassName('selector');
    //recorremos estos selectores y borramos todas las clases que tengan nombre working
    for ( let ref of selectores){
      ref.classList.remove('working');
    }

    //agregamos la clase working al selector seleccionado
    link.classList.add('working');

  }


}

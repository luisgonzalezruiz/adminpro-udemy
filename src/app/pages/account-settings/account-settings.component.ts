import { Component, OnInit, Inject } from "@angular/core";
import { inject } from '@angular/core/src/render3';
import { DOCUMENT } from "@angular/platform-browser";

import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService ) { }

  ngOnInit() {

    this.colocarChek();

  }

  cambiarColor(tema: string, link: any) {

    this.aplicarChek (link);
    this._ajustes.aplicarTema ( tema );

  }

  aplicarChek ( link: any) {

    // aqui obtenemos un arreglo de todos los selectores con nombre selector
    // tslint:disable-next-line:prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    // recorremos estos selectores y borramos todas las clases que tengan nombre working
    // tslint:disable-next-line:prefer-const
    for ( let ref of selectores) {
      ref.classList.remove('working');
    }

    // agregamos la clase working al selector seleccionado
    link.classList.add('working');

  }

  colocarChek() {

      // aqui obtenemos un arreglo de todos los selectores con nombre selector
      // tslint:disable-next-line:prefer-const
      let selectores: any = document.getElementsByClassName('selector');
      // recorremos estos selectores y borramos todas las clases que tengan nombre working

      // tslint:disable-next-line:prefer-const
      let tema = this._ajustes.ajustes.tema;

      // tslint:disable-next-line:prefer-const
      for ( let ref of selectores) {
          if ( ref.getAttribute('data-theme') === tema ) {
            ref.classList.add('working');
            break; // al aplicar salgo del for
          }
      }
  }

}

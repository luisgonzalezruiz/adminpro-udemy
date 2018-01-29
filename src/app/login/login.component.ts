import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

// esto es una funcion que tomamos en assets/js/custom.js
// y sirve para poder cargar desde cualquier pagina
// ejemplo, cuando nos logueamos los carga
// Ejecutamos en el ngOnInit() 
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar() {

    this.router.navigate([ '/dashboard' ]);

  }

}

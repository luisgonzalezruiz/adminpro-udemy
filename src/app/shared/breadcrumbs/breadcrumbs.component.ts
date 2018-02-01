import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from "@angular/router";
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label: string = '';
  
  constructor( private router: Router,
               public title: Title) { 

    this.getDataRoute()
        .subscribe( data => {
            console.log (data);
            this.label = data.titulo;

            //agregamos valor al titulo de la pagina
            this.title.setTitle( this.label );

        });

  }

  getDataRoute(){

    return this.router.events
    .filter(evento => evento instanceof ActivationEnd)
    .filter( (evento: ActivationEnd) => evento.snapshot.firstChild===null)  //evaluamos solo el evento ActivationEnd conn la propiedad snapshot y firstchild
    .map( (evento: ActivationEnd ) =>evento.snapshot.data );

  }


  ngOnInit() {
  }

}

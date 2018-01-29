import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  //asi vemos toda la referencia de un elemnto HTML en especifico aqui la caja de texto con hash #txtProgress
  @ViewChild('txtProgress') txtProgress: ElementRef;

  //los input son usados de esta forma en los componentes desde donde se lo invoca
  @Input() progreso: number = 50;
  @Input() leyenda: string = 'Leyenda';

  //asi recibimos los valores que nos viene del componente hijo
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();
 
  constructor() { 

   // console.log("Leyenda = ",this.leyenda);
   // console.log("progreso = ",this.progreso);

  }

  ngOnInit() {
    //console.log("Leyenda = ",this.leyenda);
   // console.log("progreso = ",this.progreso);
  }

  cambiarValor( valor ) {
    
      if ( this.progreso >= 100 && valor > 0) {
        this.progreso = 100;
        return;
      }
  
      if ( this.progreso <= 0 && valor < 0 ) {
        this.progreso = 0;
        return;
      }
  
      this.progreso = this.progreso + valor;

      //@output
      //asi emitimos el valor dentro del output definido mas arriba
      this.cambioValor.emit(this.progreso);


      //asi llevamos el foco al lugar donde queremos
      this.txtProgress.nativeElement.focus();


      //con esto en la consola se ve claramente el elemento que se toca
      //console.log(this.txtProgress.nativeElement);

    
  }

  onChange( newValue: number ){
    //console.log (newValue);
    //asitomamos el valor de la caja de texto con nombre progreso
    //let elemenHtml: any = document.getElementsByName('progreo')[0];
    //console.log(elemenHtml);

    if (newValue >= 100){
      this.progreso = 100;
    }else if( newValue <=0 ){
      this.progreso = 0;
    }

    //aqui forzamos que el numero de la caja de texto se vea como numero
    //elemenHtml.value = Number (this.progreso);

    //asi hacemos referencia al #txtProgress en su elemento nativo
    this.txtProgress.nativeElement.value = this.progreso;

    //@output
    //asi emitimos el valor dentro del output definido mas arriba
    this.cambioValor.emit(this.progreso);

  }

}

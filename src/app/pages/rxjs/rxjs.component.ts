import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription} from 'rxjs/Rx';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscrition: Subscription;
  
  constructor() { 


  
    this.subscrition = this.regresaObservador()
     
       //.retry(2)
       .subscribe( 
               numero => console.log('Subs', numero),
               error => console.log('Error en el obs, intente 2 veces', error),
               () => console.log('El observador termino!')
        );
  
  }



  ngOnInit() {
  }

  ngOnDestroy() {

    this.subscrition.unsubscribe();
    
  }

  regresaObservador(): Observable<number> {

        return new Observable( ( observer ) =>{
        let contador = 0;
    
        let intervalo = setInterval( ()=> {
    
          contador += 1;

          let salida = {
            valor: contador
          };
    
          observer.next( salida );

          if ( contador === 3 ){
            clearInterval( intervalo );
            observer.complete();
          }

          // if ( contador === 2 ){
          //   observer.error('Auxilio!');
          // }
    

        }, 1000);
    
      })
      .retry(2)  //el retry significa que si hay error, que intente dos veces
      .map( (res: any) => {
         return res.valor;   //convertimos el valor para retornar lo mas limpio posible
      })
      .filter( (valor, index) => {
         console.log('Filter', valor, index);

         if ( valor % 2 ===1){   //evaluamos si es impar
            return true;
         }else{
            return false; 
         }

      });  

      //return obs;

  }

}

import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar ( termino: string ) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital( termino )
    .subscribe( (paises1) =>{
      console.log(paises1);
      this.paises = paises1;
      
    }, (err) =>{
      this.hayError = true;
      this.paises =[];

    } );
    
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    // TODO: crear sugerencias...

  }



}

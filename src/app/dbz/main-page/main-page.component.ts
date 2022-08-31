import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  /**
  get personajes(): Personaje[]{
    return this.dbzservice.personajes;
  } Una forma de obtener data del service
   */

  
  agregarNuevoPersonaje(argumento: Personaje){
     // this.personajes.push(argumento)
  }

  constructor(){ }



}

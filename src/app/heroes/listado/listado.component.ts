import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes: string[] = ['Spider-Man','IroMan','Hull','Thor']
  heoreborra: string[] = []
  validor: string | undefined  = ''

  borrarHeroe(){
    this.validor = this.heroes.shift()
    if(this.validor != undefined){
      this.heoreborra.push(this.validor)
    }
    
    //this.heroes.shift() //Elimina el primer heroe
    //this.heroes.pop() //Elimina el ultimo heroe

  }
}

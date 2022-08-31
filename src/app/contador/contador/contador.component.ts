import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola mundo</h1>
        <hr>

        <h3>{{ titulo }}</h3>
        <hr>
        <hr>

        <h3>La base es: {{ base }}</h3>

        <button (click)="acumular(base)"> + {{ base }} </button>

        <span> {{ numero }} </span>

        <button (click)="acumular(-base)"> - {{ base }} </button>

    `
})



export class ContadorComponent {

    titulo: string = 'Contandor APP';
    numero: number = 10;
    base: number = 5;
  
    acumular(valor: number ) {
      this.numero += valor;
    }

}
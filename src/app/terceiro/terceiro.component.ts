import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro',
  template: `
    <h2 [class]="contador % 2 == 0 ? 'par' : 'impar'">{{ contador }}</h2>
    <button type="button" (click)="contador = contador + 1 ">
      INCREMENTO
    </button>
  `,
  styles: [
    `
      .par {
        color: green;
      }
      .impar {
        color: red;
      }
    `,
  ],
})
export class TerceiroComponent {
  public parOuImpar: string = 'par';
  public contador: number = 0;
}

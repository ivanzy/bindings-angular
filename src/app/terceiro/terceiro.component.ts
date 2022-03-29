import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro',
  template: `
    <h2 [class]="parOuImpar">{{ getContador() }}</h2>
    <!--     <input type="text" value="{{ texto }}" [disabled]="isDisable" />
 -->
    <button type="button" (click)="cliqueBotao()">CLIQUE EM MIM</button>
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
  private contador: number = 0;

  public cliqueBotao() {
    console.log('BOTÃO CLICADO! ' + ++this.contador);
    if (this.contador % 2 == 0) {
      console.log('par');
      this.parOuImpar = 'par';
    } else {
      this.parOuImpar = 'impar';
    }
  }
  public getContador() {
    return this.contador;
  }
}

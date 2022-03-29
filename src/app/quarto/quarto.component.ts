import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto',
  template: `
    <input [(ngModel)]="campo" type="text"  />
    {{ campo }}
  `,
})
export class QuartoComponent {
  campo: string = 'Digite seu email';
}

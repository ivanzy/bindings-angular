import { Component } from '@angular/core';

@Component({
  selector: 'app-quarto',
  template: ` <input type="text" [(ngModel)]="campoTexto" />
    {{ campoTexto }}
  `,
})
export class QuartoComponent {
  campoTexto: string;
  constructor(){
    this.campoTexto = "Digite algo"
  }
}

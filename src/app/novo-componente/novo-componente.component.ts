import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  template: `
    <input type="text" [disabled]="isDisabled" />
    <button type="button" (click)="isDisabled = !isDisabled">
      {{ isDisabled ? 'Habilitar' : 'Desabilitar' }}
    </button>
  `,
})
//TODO: Crie um botão que quando é pressionado, desabilita um elemento de input
//TODO: Se for pressionado novamente, habilita o elemento de input
export class NovoComponenteComponent {
  public isDisabled: boolean = false;
}

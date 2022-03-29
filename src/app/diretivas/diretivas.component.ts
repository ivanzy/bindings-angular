import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  template: `
    <h2 *ngIf="aparece">esse texto pode aparecer ou não</h2>
    <button (click)="aparece = !aparece">
      {{ aparece ? 'OCULTAR O TEXTO' : 'MOSTRAR O TEXTO' }}
    </button>
  `,
})
export class DiretivasComponent {
  public aparece: boolean = true;
}

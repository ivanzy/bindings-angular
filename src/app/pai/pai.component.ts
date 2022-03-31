import { Component } from '@angular/core';

@Component({
  selector: 'app-pai',
  template: `
    <app-filho [mensagem]="mensagemPai"></app-filho>`,
  styleUrls: ['./pai.component.css'],
})
export class PaiComponent {
  mensagemPai: string = "mensagem do Pai para o Filho";
}

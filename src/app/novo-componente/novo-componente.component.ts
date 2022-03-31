import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  template: `
    <input type="text" [disabled]="isDesabilitado" />
    <button type="button" (click)="controlaDesabilita()">
      {{ textoBotao }}
    </button>
  `,
})
export class NovoComponenteComponent {
  public isDesabilitado: boolean;
  public textoBotao: string;
  constructor() {
    this.isDesabilitado = false;
    this.textoBotao = this.mudaTextoBotao();
  }
  public controlaDesabilita(): void {
    this.isDesabilitado = !this.isDesabilitado;
    this.textoBotao = this.mudaTextoBotao();
  }

  private mudaTextoBotao = (): string =>
    this.isDesabilitado ? 'HABILITAR' : 'DESABILITAR';
}

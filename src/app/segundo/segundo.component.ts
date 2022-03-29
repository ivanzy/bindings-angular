import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  template: `
    <div>{{ preco + 1 }}</div>
    <div>{{ preco + user.nome }}</div>
    <div>{{ getPreco() }}</div>
    <div>{{ preco > 0 }}</div>
    <div>{{ preco < 0 }}</div>
  `,
})
export class SegundoComponent {

  public user: { id: number; nome: string } = {
    id: 3012,
    nome: 'Ivan',
  };

  public preco: number = 10;

  getPreco(): string {
    return `R$ ${this.preco}`;
  }
}

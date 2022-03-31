import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  template: `
    <div>{{ preco }}</div>
    <div>{{ mussarela.id }}</div>
    <div>{{ getPreco() }}</div>
    <div>{{ preco > 0 }}</div>
    <div>{{ preco < 0 }}</div>
    <div>{{ preco > 10 ? 'Está MUITO caro' : ' Está barato' }}</div>
  `,
})
export class SegundoComponent {
  public mussarela: { id: number; nome: string } = {
    id: 3012,
    nome: 'Ivan',
  };

  public preco: number = 5;

  getPreco(): string {
    return `R$ ${this.preco}`;
  }
}

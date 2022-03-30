import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  template: `
    <h2 *ngIf="aparece">esse texto pode aparecer ou não</h2>
    <button (click)="aparece = !aparece">
      {{ aparece ? 'OCULTAR O TEXTO' : 'MOSTRAR O TEXTO' }}
    </button>

    <div [ngSwitch]="estacao">
      <div *ngSwitchCase="'verao'">Verão</div>
      <div *ngSwitchCase="'outono'">Outuno</div>
      <div *ngSwitchCase="'inverno'">Inverno</div>
      <div *ngSwitchCase="'primavera'">Primavera</div>
    </div>

    <ul>
      <li *ngFor="let pokemon of pokemons; odd as jeremias">
        <p [style.color]="jeremias? 'green' : 'red'">
          {{ pokemon.nome }}, {{ pokemon.tipo }}
        </p>
      </li>
    </ul>
  `,
})
export class DiretivasComponent {
  public pokemons: any[] = [
    {
      nome: 'Alakazam',
      level: 10,
      tipo: 'psiquico',
      moveset: ['psych', 'confusion ray'],
    },
    {
      nome: 'raichu',
      tipo: 'eletrico',
      level: 20,
      moveset: ['thunder', 'tail whip', 'thunder wave'],
    },
    {
      nome: 'Psyduck',
      tipo: 'Aquático/Psiquico',
      level: 12,
      moveset: ['tackle', 'confusion ray'],
    },
    {
      nome: 'venossaur',
      tipo: 'Grama',
      level: 42,
      moveset: ['razor leaf'],
    },
    {
      nome: 'vulpix',
      tipo: 'fogo',
      level: 23,
      moveset: ['ember', 'tail whip', 'tackle'],
    },
  ];
  public estacao: string = 'outono';
  public aparece: boolean = true;
}

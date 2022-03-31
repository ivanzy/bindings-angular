import { Component } from '@angular/core';
import { PokemonInterface } from '../pokemon.interface';
//TODO 1. Criem um vetor de objetos, sendo que os objetos desse vetor simblizam algo que você gosta
//TODO 2. Crie uma interface para tipar esse array de objetos
//TODO 3. Crie uma diretiva ngFor no template que liste cada propriedade desses objetos
//TODO DESAFIO Crie um Input number que o usu+ario escolhe o número máximo de objetos na tela


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
      <li *ngFor="let pokemon of pokemons; even as par">
        <p [style.color]="par ? 'green' : 'red'">
          {{ pokemon.nome }}, {{ pokemon.tipo }}
        </p>
      </li>
    </ul>
  `,
})
export class DiretivasComponent {
  public pokemons: PokemonInterface[] = [
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
    {
      nome: 'pikachu',
      level: 72,
      tipo: 'eletrico',
      moveset: ['thunder', 'tail whip', 'tackle'],
    },
  ];
  public estacao: string = 'outono';
  public aparece: boolean = true;
}

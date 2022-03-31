import { Component } from '@angular/core';
import { PokemonInterface, tiposPokemon } from '../pokemon.interface';
//TODO 1. Criem um vetor de objetos, sendo que os objetos desse vetor simblizam algo que você gosta
//TODO 2. Crie uma interface para tipar esse array de objetos
//TODO 3. Crie uma diretiva ngFor no template que liste cada propriedade desses objetos
//TODO DESAFIO Crie um Input number que o usu+ario escolhe o número máximo de objetos na tela

@Component({
  selector: 'app-diretivas',
  template: `
    <input
      type="number"
      #campoNumero
      (input)="numMaxPokemons = +campoNumero.value - 1"
      [value]="pokemons.length"
      [max]="pokemons.length"
      min="0"
    />
    <ul>
      <div *ngFor="let pokemon of pokemons; index as indice">
        <li *ngIf="indice <= numMaxPokemons">
          <p>
            {{ pokemon.nome }}, {{ pokemon.tipo }}, level: {{ pokemon.level }}
          </p>
        </li>
      </div>
    </ul>
  `,
})
export class DiretivasComponent {
  public numMaxPokemons: number;
  public pokemons: PokemonInterface[];

  constructor() {
    this.pokemons = [
      {
        nome: 'Alakazam',
        level: 10,
        tipo: tiposPokemon.Psychic,
        moveset: ['psych', 'confusion ray'],
      },
      {
        nome: 'raichu',
        tipo: tiposPokemon.Electric,
        level: 20,
        moveset: ['thunder', 'tail whip', 'thunder wave'],
      },
      {
        nome: 'Psyduck',
        tipo: tiposPokemon.Water,
        level: 12,
        moveset: ['tackle', 'confusion ray'],
      },
      {
        nome: 'venossaur',
        tipo: tiposPokemon.Grass,
        level: 42,
        moveset: ['razor leaf'],
      },
      {
        nome: 'vulpix',
        tipo: tiposPokemon.Fire,
        level: 23,
        moveset: ['ember', 'tail whip', 'tackle'],
      },
      {
        nome: 'pikachu',
        level: 72,
        tipo: tiposPokemon.Electric,
        moveset: ['thunder', 'tail whip', 'tackle'],
      },
    ];
    this.numMaxPokemons = this.pokemons.length;
  }
}

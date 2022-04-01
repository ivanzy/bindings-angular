import { Component, OnInit } from '@angular/core';
import { PokemonInterface, tiposPokemon } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';
//TODO 1. Criem um vetor de objetos, sendo que os objetos desse vetor simbolizam algo que você gosta
//TODO 2. Crie uma interface para tipar esse array de objetos
//TODO 3. Crie uma diretiva ngFor no template que liste cada propriedade desses objetos
//TODO DESAFIO Crie um Input number que o usuário escolhe o número máximo de objetos na tela

//*************************************/
//TODO: 1. Separe em um componente a visualização do objeto (como enviar dados do componente pai para o filho)
//TODO: 2. Separa em um componente o input que controla quanto objetos são visualizados na tela
//TODO:     (como enviar dados do componente filho para o pai)


@Component({
  selector: 'app-diretivas',
  template: `
    <app-contador
      (eventoContador)="numMaxPokemons = $event - 1"
      [numeroMax]="pokemons.length"
    ></app-contador>
    <ul>
      <div *ngFor="let pkm of pokemons; index as indice">
        <li *ngIf="indice <= numMaxPokemons">
          <app-mostra-pokemon [pokemon]="pkm"></app-mostra-pokemon>
        </li>
      </div>
    </ul>
  `,
})
export class DiretivasComponent implements OnInit {
  public numMaxPokemons: number = 0;
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
        level: 8,
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
  }

  ngOnInit(): void {
//    this.pokemons = this.pokemonService.getPokemons();
    this.numMaxPokemons = this.pokemons.length;
  }
}

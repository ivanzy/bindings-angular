import { Component, OnInit } from '@angular/core';
import { PokemonInterface } from '../pokemon.interface';
import { PokemonService } from '../pokemon.service';
//TODO 1. Criem um vetor de objetos, sendo que os objetos desse vetor simblizam algo que você gosta
//TODO 2. Crie uma interface para tipar esse array de objetos
//TODO 3. Crie uma diretiva ngFor no template que liste cada propriedade desses objetos
//TODO DESAFIO Crie um Input number que o usuário escolhe o número máximo de objetos na tela

@Component({
  selector: 'app-diretivas',
  template: `
    <app-contador
      (eventoContador)="numMaxPokemons = $event - 1"
      [numeroMax]="pokemons.length"
    ></app-contador>
    <ul>
      <div *ngFor="let pokemon of pokemons; index as indice">
        <li *ngIf="indice <= numMaxPokemons">
          <app-mostra-pokemon [pokemon]="pokemon"></app-mostra-pokemon>
        </li>
      </div>
    </ul>
  `,
})
export class DiretivasComponent implements OnInit {
  public numMaxPokemons: number = 0;
  public pokemons: PokemonInterface[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
    this.numMaxPokemons = this.pokemons.length;
  }
}

import { Injectable } from '@angular/core';
import { PokemonInterface, tiposPokemon } from './pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private _pokemons: PokemonInterface[];
  constructor() {
    this._pokemons = [
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

  public getPokemons(): PokemonInterface[] {
    return this._pokemons;
  }
}

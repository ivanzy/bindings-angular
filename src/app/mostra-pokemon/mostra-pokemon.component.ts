import { Component, OnInit, Input } from '@angular/core';
import { Pokemon, PokemonInterface } from '../pokemon.interface';

@Component({
  selector: 'app-mostra-pokemon',
  template: `
    {{ pokemon.nome | uppercase }}<br />
    {{ pokemon.tipo }}<br />
    {{ pokemon.level | number: '2.0-0' }}<br />
    {{ pokemon.moveset }}<br /><br />
  `,
  styleUrls: ['./mostra-pokemon.component.css'],
})
export class MostraPokemonComponent implements OnInit {
  @Input() public pokemon: PokemonInterface = new Pokemon();

  constructor() {}

  ngOnInit(): void {}
}

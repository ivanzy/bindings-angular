export interface PokemonInterface {
  nome: string;
  level: number;
  tipo: tiposPokemon;
  moveset: string[];
}

export enum tiposPokemon {
  Normal = 'Normal',
  Fire = 'Fire',
  Water = 'Water',
  Grass = 'Grass',
  Electric = 'Electric',
  Ice = 'Ice',
  Fighting = 'Fighting',
  Poison = 'Poison',
  Ground = 'Ground',
  Flying = 'Flying',
  Psychic = 'Psychic',
  Bug = 'Bug',
  Rock = 'Rock',
  Ghost = 'Ghost',
  Dark = 'Dark',
  Dragon = 'Dragon',
  Steel = 'Steel',
  Fairy = 'Fairy',
}

import type { MalEntity } from './base';
import type { Person } from './person';

export interface Character extends MalEntity {}

export interface CharacterDub {
  person: Person;
  language: string;
}

export interface CharacterCard {
  character: Character;
  role: string;
  favorites: number;
  voice_actors: CharacterDub[];
}

export interface CharacterStaff {
  person: Person;
  positions: string[];
}

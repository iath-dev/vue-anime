import type { Anime } from './anime';
import type { MalEntity } from './common';
import type { Manga } from './manga';
import type { Role } from './params';
import type { Person } from './person';

// Character types
export interface CharacterFull extends MalEntity {
  name_kanji: string | null;
  nicknames: string[];
  favorites: number;
  about: string | null;
  anime: Array<{
    role: string;
    anime: Anime;
  }>;
  manga: Array<{
    role: string;
    manga: Manga;
  }>;
  voices: Array<{
    language: string;
    person: Person;
  }>;
}

export interface Character {
  character: MalEntity;
  role: Role;
  favorites: number;
  voice_actors: { person: Person; language: string }[];
}

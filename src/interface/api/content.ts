import type { Title } from './anime';
import type { MalEntity, MalLink } from './common';

export interface Content extends MalEntity {
  title: string;
  title_english: string | null;
  title_japanese: string | null;
  titles: Title[];
  type: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string | null;
  genres: MalLink[];
  themes: MalLink[];
  demographics: MalLink[];
}

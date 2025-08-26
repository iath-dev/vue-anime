import type {
  Aired,
  Broadcast,
  Demographic,
  Entry,
  Image,
  Title,
  Trailer,
} from './base';

export interface Anime extends Entry {
  trailer: Trailer;
  approved: boolean;
  titles: Title[];
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string | null;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: Broadcast;
  producers: Demographic[];
  licensors: Demographic[];
  studios: Demographic[];
  genres: Demographic[];
  explicit_genres: any[];
  themes: Demographic[];
  demographics: Demographic[];
}

export interface AnimeRelation {
  relation: string;
  entry: Demographic[];
}

export interface AnimePicture {
  jpg: Image;
  webp: Image;
}

export interface AnimeStatistics {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: Score[];
}

export interface Score {
  score: number;
  votes: number;
  percentage: number;
}

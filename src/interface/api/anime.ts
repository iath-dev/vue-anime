import type { MalLink } from "./common";
import type { Content } from './content';
import type { AnimeStatus } from "./params";

// Anime types
export interface Title {
  type: string;
  title: string;
}

export interface Anime extends Content {
  source: string;
  episodes: number | null;
  status: AnimeStatus;
  airing: boolean;
  aired: {
    from: string | null;
    to: string | null;
    string: string;
  };
  duration: string;
  rating: string;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: MalLink[];
  licensors: MalLink[];
  studios: MalLink[];
}

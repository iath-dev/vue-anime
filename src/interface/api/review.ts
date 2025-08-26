import type { User } from './base';

export interface Review {
  mal_id: number;
  url: string;
  type: string;
  reactions: Reactions;
  date: Date;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: null;
  user: User;
}

export interface Reactions {
  overall: number;
  nice: number;
  love_it: number;
  funny: number;
  confusing: number;
  informative: number;
  well_written: number;
  creative: number;
}

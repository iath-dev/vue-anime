import type { Entry } from './base';

export interface Recommendation {
  entry: Entry;
  url: string;
  votes: number;
}

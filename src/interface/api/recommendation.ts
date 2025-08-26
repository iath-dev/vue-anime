import type { MalEntity } from './common';

export interface RecommendationEntry extends Omit<MalEntity, 'name'> {
  title: string;
}

export interface Recommendation {
  entry: RecommendationEntry;
  url: string;
  votes: number;
}

import type { Images } from './base';

// Common entity types
export interface MalEntity {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
}

export interface MalLink extends Omit<MalEntity, 'images'> {}

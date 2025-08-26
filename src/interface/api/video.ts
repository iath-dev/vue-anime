import { type Image, type Trailer } from './base';

export interface Video {
  promo: Promo[];
  episodes: Episode[];
  music_videos: any[];
}

export interface Episode {
  mal_id: number;
  title: string;
  episode: string;
  url: string;
  images: Image;
}

export interface Promo {
  title: string;
  trailer: Trailer;
}

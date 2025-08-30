import type { MalLink } from './common';

export type ImageFormat = 'jpg' | 'webp';

export interface Image {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
  medium_image_url?: string | null;
  maximum_image_url?: string | null;
}

export type Images = {
  [key in ImageFormat]: Image;
};

export interface Trailer {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
  images: Image | null;
}

export interface Title {
  type: string;
  title: string;
}

export interface Aired {
  from: Date | null;
  to: Date | null;
  prop: Prop;
  string: string;
}

export interface Prop {
  from: From;
  to: From;
}

export interface From {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface Broadcast {
  day: string | null;
  time: string | null;
  timezone: string | null;
  string: string | null;
}

export interface Demographic extends MalLink {
  type: string;
}

export interface Items {
  count: number;
  total: number;
  per_page: number;
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items?: Items;
}

export interface Entry extends Omit<MalEntity, 'name'> {
  title: string;
}

export interface User {
  url: string;
  username: string;
  images: { [key: string]: Image };
}

export interface MalEntity {
  mal_id: number;
  url: string;
  images: Images;
  name: string;
}

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

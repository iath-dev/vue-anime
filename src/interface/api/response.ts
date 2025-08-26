import type { Anime } from './anime';
import type { Pagination } from './base';
import type { CharacterFull } from './characters';
import type { Manga } from './manga';
import type { Person } from './person';
import type { Recommendation } from './recommendation';

export interface Response<T> {
  data: T;
}

export interface PaginatedResponse<T> {
  pagination: Pagination;
  data: T[];
}

// Response types
export type AnimeSearchResponse = PaginatedResponse<Anime>;
export type MangaSearchResponse = PaginatedResponse<Manga>;
export type CharacterSearchResponse = PaginatedResponse<CharacterFull>;
export type PersonSearchResponse = PaginatedResponse<Person>;
export type SeasonalAnimeResponse = PaginatedResponse<Anime> & {
  season: { year: number; season: string };
};
export type TopAnimeResponse = PaginatedResponse<Anime>;
export type TopMangaResponse = PaginatedResponse<Manga>;
export type UserAnimeListResponse = PaginatedResponse<{
  anime: Anime;
  status: string;
  score: number;
  episodes_watched: number;
  tags: string[];
}>;
export type UserMangaListResponse = PaginatedResponse<{
  manga: Manga;
  status: string;
  score: number;
  chapters_read: number;
  volumes_read: number;
  tags: string[];
}>;

export interface RecommendationResponse
  extends Omit<PaginatedResponse<Recommendation>, 'pagination'> {}

import type { Anime } from './anime';
import type { Images, Pagination } from './base';
import type { Character } from './characters';
import type { Manga } from './manga';
import type { Person } from './person';
import type { Recommendation } from './recommendation';
import type { Review } from './review';
import type { Video } from './video';

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
export type CharacterSearchResponse = PaginatedResponse<Character>;
export type PersonSearchResponse = PaginatedResponse<Person>;
export type SeasonalAnimeResponse = PaginatedResponse<Anime>;
export type TopAnimeResponse = PaginatedResponse<Anime>;
export type TopMangaResponse = PaginatedResponse<Manga>;
export type UserAnimeListResponse = PaginatedResponse<Anime>;
export type UserMangaListResponse = PaginatedResponse<Manga>;
export type RecommendationResponse = PaginatedResponse<Recommendation>;
export type ReviewResponse = PaginatedResponse<Review>;
export type VideoResponse = Response<Video>;
export type ImagesResponse = Omit<PaginatedResponse<Images>, 'pagination'>;

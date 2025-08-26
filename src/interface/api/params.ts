export type SearchOrderBy =
  | 'mal_id'
  | 'title'
  | 'start_date'
  | 'end_date'
  | 'episodes'
  | 'chapters'
  | 'volumes'
  | 'score'
  | 'scored_by'
  | 'rank'
  | 'popularity'
  | 'members'
  | 'favorites';

export const SEARCH_ORDER_BY: SearchOrderBy[] = [
  'mal_id',
  'title',
  'start_date',
  'end_date',
  'episodes',
  'chapters',
  'volumes',
  'score',
  'scored_by',
  'rank',
  'popularity',
  'members',
  'favorites',
];

export type SearchStatus = 'airing' | 'complete' | 'upcoming' | 'tba';

export const SEARCH_STATUS: SearchStatus[] = [
  'airing',
  'complete',
  'upcoming',
  'tba',
];

export type SearchType =
  | 'tv'
  | 'movie'
  | 'ova'
  | 'special'
  | 'ona'
  | 'music'
  | 'manga'
  | 'novel'
  | 'oneshot'
  | 'doujin'
  | 'manhwa'
  | 'manhua';

export const SEARCH_TYPE: SearchType[] = [
  'tv',
  'movie',
  'ova',
  'special',
  'ona',
  'music',
  'manga',
  'novel',
  'oneshot',
  'doujin',
  'manhwa',
  'manhua',
];

export type SearchRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';

export const SEARCH_RATING: SearchRating[] = [
  'g',
  'pg',
  'pg13',
  'r17',
  'r',
  'rx',
];

export type SeasonalFilter =
  | 'tv'
  | 'movie'
  | 'ova'
  | 'special'
  | 'ona'
  | 'music';

export const SEASONAL_FILTER: SeasonalFilter[] = [
  'tv',
  'movie',
  'ova',
  'special',
  'ona',
  'music',
];

export type TopType =
  | 'tv'
  | 'movie'
  | 'ova'
  | 'special'
  | 'ona'
  | 'music'
  | 'manga'
  | 'novel'
  | 'oneshot'
  | 'doujin'
  | 'manhwa'
  | 'manhua';

export const TOP_TYPE: TopType[] = [
  'tv',
  'movie',
  'ova',
  'special',
  'ona',
  'music',
  'manga',
  'novel',
  'oneshot',
  'doujin',
  'manhwa',
  'manhua',
];

export type TopFilter = 'airing' | 'upcoming' | 'bypopularity' | 'favorite';

export const TOP_FILTER: TopFilter[] = [
  'airing',
  'upcoming',
  'bypopularity',
  'favorite',
];

export type AnimeStatus =
  | 'Finished Airing'
  | 'Currently Airing'
  | 'Not yet aired';

export const ANIME_STATUS: AnimeStatus[] = [
  'Finished Airing',
  'Currently Airing',
  'Not yet aired',
];

export type Role = 'Main' | 'Supporting';

export const ROLE: Role[] = ['Main', 'Supporting'];

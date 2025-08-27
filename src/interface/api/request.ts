import type {
  SearchOrderBy,
  SearchRating,
  SearchStatus,
  SearchType,
  SeasonalFilter,
  TopFilter,
  TopType,
} from './params';

// Parameter interfaces for different endpoints
export interface JikanRequest {
  page?: number;
  limit?: number;
}

export interface SearchParams extends JikanRequest {
  q?: string;
  score?: number;
  min_score?: number;
  max_score?: number;
  genres?: string;
  genres_exclude?: string;
  order_by?: SearchOrderBy;
  sort?: 'desc' | 'asc';
  letter?: string;
  producers?: string;
  magazines?: string;
  start_date?: string;
  end_date?: string;
  status?: SearchStatus;
  type?: SearchType;
  rating?: SearchRating;
  sfw?: boolean;
  unapproved?: boolean;
}

export interface SeasonalParams extends JikanRequest {
  year: number;
  season: 'winter' | 'spring' | 'summer' | 'fall';
  filter?: SeasonalFilter;
  continuing?: boolean;
}

export interface TopParams extends JikanRequest {
  type?: TopType;
  filter?: TopFilter;
}

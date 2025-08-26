import type { Anime } from '@/interface/api/anime';
import type { SearchParams, TopParams } from '@/interface/api/request';
import api from '@/lib/api';
import type { SeasonalParams } from '../interface/api/request';
import type {
  PaginatedResponse,
  RecommendationResponse,
  Response,
} from '@/interface/api/response';
import type { Character, CharacterFull } from '@/interface/api/characters';
import type { Person } from '@/interface/api/person';

export const searchAnime = async ({
  q,
  limit = 5,
  ...props
}: SearchParams): Promise<PaginatedResponse<Anime>> => {
  const res = await api.get<PaginatedResponse<Anime>>('/anime', {
    params: {
      q,
      limit,
      ...props,
    },
  });

  return res.data;
};

export const getAnimeFull = async (id: string): Promise<Response<Anime>> => {
  const res = await api.get<Response<Anime>>(`/anime/${id}/full`);

  return res.data;
};

export const getAnimeCharacters = async (
  id: string
): Promise<{ data: Array<Character> }> => {
  const res = await api.get<{ data: Array<Character> }>(
    `/anime/${id}/characters`
  );

  return res.data;
};

export const getAnimeStaff = async (
  id: string
): Promise<{ data: Array<{ person: Person; positions: string[] }> }> => {
  const res = await api.get<{
    data: Array<{ person: Person; positions: string[] }>;
  }>(`/anime/${id}/staff`);

  return res.data;
};

export const getAnimeRecommendation = async (
  id: string
): Promise<RecommendationResponse> => {
  const res = await api.get<RecommendationResponse>(
    `/anime/${id}/recommendations`
  );

  return res.data;
};

export const getTopAnime = async ({
  limit = 6,
  ...props
}: TopParams): Promise<PaginatedResponse<Anime>> => {
  const res = await api.get<PaginatedResponse<Anime>>('/top/anime', {
    params: {
      limit,
      ...props,
    },
  });

  return res.data;
};

export const getCurrentSeason = async ({
  limit = 6,
  continuing,
}: Omit<SeasonalParams, 'year' | 'season'>): Promise<
  PaginatedResponse<Anime>
> => {
  const res = await api.get<PaginatedResponse<Anime>>('/seasons/now', {
    params: {
      limit,
      continuing,
    },
  });

  return res.data;
};

export const getUpcoming = async ({
  limit = 6,
  ...props
}: Omit<SeasonalParams, 'year' | 'season' | 'continuing'>): Promise<
  PaginatedResponse<Anime>
> => {
  const res = await api.get<PaginatedResponse<Anime>>('/seasons/upcoming', {
    params: {
      limit,
      ...props,
    },
  });

  return res.data;
};

import type { Anime } from '@/interface/api/anime';
import type { SearchParams, TopParams } from '@/interface/api/request';
import api from '@/lib/api';
import type { SeasonalParams } from '../interface/api/request';
import type {
  ImagesResponse,
  PaginatedResponse,
  RecommendationResponse,
  Response,
} from '@/interface/api/response';
import type { CharacterCard, CharacterStaff } from '@/interface/api/characters';

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
): Promise<{ data: Array<CharacterCard> }> => {
  const res = await api.get<{ data: Array<CharacterCard> }>(
    `/anime/${id}/characters`
  );

  return res.data;
};

export const getAnimeStaff = async (
  id: string
): Promise<{ data: Array<CharacterStaff> }> => {
  const res = await api.get<{ data: Array<CharacterStaff> }>(
    `/anime/${id}/staff`
  );

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

export const getAnimePictures = async (id: string): Promise<ImagesResponse> => {
  const res = await api.get<ImagesResponse>(`/anime/${id}/pictures`);

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
  ...params
}: Omit<SeasonalParams, 'year' | 'season'>): Promise<
  PaginatedResponse<Anime>
> => {
  const res = await api.get<PaginatedResponse<Anime>>('/seasons/now', {
    params: {
      limit,
      continuing,
      ...params,
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

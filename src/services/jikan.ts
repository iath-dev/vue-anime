import type { JikanResponse } from '@/interface/response';
import api from '@/lib/api';

export const searchAnime = async (query: string): Promise<JikanResponse> => {
  const res = await api.get<JikanResponse>('/anime', {
    params: {
      q: query,
      limit: 5,
    },
  });

  return res.data;
};

export const getTopAnime = async (): Promise<JikanResponse> => {
  const res = await api.get<JikanResponse>('/top/anime', {
    params: {
      limit: 5,
    },
  });

  return res.data;
};

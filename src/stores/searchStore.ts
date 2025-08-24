import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Anime } from '@/interface/response';
import { searchAnime } from '@/services/jikan';

export const useSearchStore = defineStore('search', () => {
  const results = ref<Anime[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const search = async (searchQuery: string) => {
    if (!searchQuery) {
      results.value = [];
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const response = await searchAnime(searchQuery);
      results.value = response.data;
    } catch (err) {
      error.value =
        err instanceof Error ? err.message : 'An unknown error occurred';
    } finally {
      loading.value = false;
    }
  };

  return { results, loading, error, search };
});

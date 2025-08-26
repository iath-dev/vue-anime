<script setup lang="ts">
import { getAnimeRecommendation } from '@/services/jikan';
import { useQuery } from '@tanstack/vue-query';
import { useRoute } from 'vue-router';
import AnimeCard from './AnimeCard.vue';

const route = useRoute();

const animeId = route.params.id as string;

const { data, isLoading } = useQuery({
  queryKey: ['staff', animeId],
  queryFn: () => getAnimeRecommendation(animeId),
  enabled: !!animeId,
});
</script>

<template>
  <section v-if="isLoading" class="skeleton col-span-full h-72"></section>
  <section
    v-if="!!data && !isLoading"
    class="col-span-full grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
  >
    <AnimeCard
      v-for="{ entry } in data.data"
      :entry="entry"
      class="card card-sm rounded-2xl shadow-md transition-transform hover:scale-110"
    />
  </section>
</template>

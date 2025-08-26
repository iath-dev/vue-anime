<script setup lang="ts">
import { getAnimeRecommendation } from '@/services/jikan';
import { useQuery } from '@tanstack/vue-query';
import { useRoute } from 'vue-router';

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
    <div v-for="{ entry } in data.data" class="card card-sm shadow-md">
      <figure>
        <img
          :src="
            entry.images.jpg.image_url ??
            'https://placehold.co/300x400?text=No+Image'
          "
          :alt="entry.title"
          loading="lazy"
          class="aspect-square w-full object-cover"
        />
      </figure>
      <div class="card-body">
        <h1 class="card-title">{{ entry.title }}</h1>
      </div>
    </div>
  </section>
</template>

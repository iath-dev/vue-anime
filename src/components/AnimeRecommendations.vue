<script setup lang="ts">
import { getAnimeRecommendation } from '@/services/jikan';
import { useQuery } from '@tanstack/vue-query';
import { useRoute } from 'vue-router';
import AnimeCard from './AnimeCard.vue';
import { TransitionGroup } from 'vue';

const route = useRoute();

const animeId = route.params.id as string;

const { data, isLoading } = useQuery({
  queryKey: ['recommendations', animeId],
  queryFn: () => getAnimeRecommendation(animeId),
  enabled: !!animeId,
});
</script>

<template>
  <section v-if="isLoading" class="skeleton col-span-full h-72"></section>
  <TransitionGroup
    tag="div"
    name="cards"
    v-if="!!data && !isLoading"
    class="col-span-full grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
  >
    <AnimeCard
      v-for="{ entry } in data.data"
      :entry="entry"
      class="card card-sm rounded-2xl shadow-md transition-transform hover:scale-110"
    />
  </TransitionGroup>
</template>
<style scoped>
/* Animación de entrada/salida */
.cards-enter-active,
.cards-leave-active {
  transition: all 0.5s ease;
}

.cards-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.cards-enter-to {
  opacity: 1;
  transform: scale(1);
}

.cards-leave-from {
  opacity: 1;
  transform: scale(1);
}
.cards-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Animación de reordenamiento */
.cards-move {
  transition: transform 0.3s ease;
}
</style>

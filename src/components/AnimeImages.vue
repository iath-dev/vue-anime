<script setup lang="ts">
import { getAnimePictures } from '@/services/jikan';
import { useQuery } from '@tanstack/vue-query';
import { TransitionGroup } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const animeId = route.params.id as string;

const { data, isLoading } = useQuery({
  queryKey: ['pictures', animeId],
  queryFn: () => getAnimePictures(animeId),
  enabled: !!animeId,
});
</script>

<template>
  <section v-if="isLoading" class="skeleton col-span-full h-72"></section>
  <TransitionGroup
    v-if="!!data && !isLoading"
    name="columns"
    tag="div"
    class="col-span-full columns-auto gap-4 sm:columns-3 md:columns-4 lg:columns-5"
  >
    <figure v-for="(picture, index) in data.data" :key="index" class="mb-4">
      <img
        :src="
          picture.jpg.image_url ?? 'https://placehold.co/300x400?text=No+Image'
        "
        :alt="`${animeId}-${index}`"
        loading="lazy"
        class="h-full w-full rounded-lg object-cover transition-transform hover:scale-105"
      />
    </figure>
  </TransitionGroup>
</template>

<style scoped>
/* Animación de entrada/salida */
.columns-enter-active,
.columns-leave-active {
  transition: all 0.5s ease;
}

.columns-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.columns-enter-to {
  opacity: 1;
  transform: scale(1);
}

.columns-leave-from {
  opacity: 1;
  transform: scale(1);
}
.columns-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Animación de reordenamiento */
.columns-move {
  transition: transform 0.3s ease;
}
</style>

<script setup lang="ts">
import { getAnimeStaff } from '@/api/service';
import { useQuery } from '@tanstack/vue-query';
import { TransitionGroup } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const animeId = route.params.id as string;

const { data, isLoading } = useQuery({
  queryKey: ['staff', animeId],
  queryFn: () => getAnimeStaff(animeId),
  enabled: !!animeId,
});
</script>

<template>
  <section v-if="isLoading" class="skeleton col-span-full h-72"></section>
  <TransitionGroup
    name="cards"
    tag="div"
    v-if="!!data && !isLoading"
    class="col-span-full grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
  >
    <div
      v-for="{ person, positions } in data.data"
      class="card card-sm shadow-md"
    >
      <figure>
        <img
          :src="
            person.images.jpg.image_url ??
            'https://placehold.co/300x400?text=No+Image'
          "
          :alt="person.name"
          loading="lazy"
          class="aspect-square w-full object-cover"
        />
      </figure>
      <div class="card-body">
        <h1 class="card-title">{{ person.name }}</h1>
        <div class="card-actions">
          <span class="badge badge-info badge-soft badge-sm">{{
            positions[0]
          }}</span>
        </div>
      </div>
    </div>
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

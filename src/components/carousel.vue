<script setup>
import { getTopAnime } from '@/services/jikan';
import { useQuery } from '@tanstack/vue-query';

const { data, isLoading } = useQuery({
  queryKey: ['top'],
  queryFn: getTopAnime,
});
</script>

<template>
  <div v-if="isLoading" class="skeleton h-72 w-full"></div>
  <section
    v-if="!!data"
    class="relative overflow-hidden [user-select:none]"
  >
    <div class="carousel-container flex">
      <div
        v-for="value in Array.from({ length: 2 })"
        class="carousel__content flex shrink-0"
      >
        <div
          v-for="anime in data.data"
          :key="anime.mal_id"
          class="card hover:bg-base-100 flex shrink-0 flex-row overflow-x-hidden rounded-lg shadow-xl mx-2"
        >
          <figure>
            <img
              :src="anime.images.webp.large_image_url"
              :alt="anime.title"
              loading="lazy"
              @error="
                (e) =>
                  (e.target.src = 'https://placehold.co/300x400?text=No+Image')
              "
              class="aspect-[3/4] h-96 object-cover"
            />
          </figure>
          <div class="flex max-w-xs flex-col gap-2.5 p-3">
            <h2 class="line-clamp-1 text-xl font-bold">{{ anime.title }}</h2>
            <p class="line-clamp-4 text-sm">{{ anime.synopsis }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-container {
  animation: scroll 20s linear infinite;
}

section:hover .carousel-container {
  animation-play-state: paused;
}

@keyframes scroll {
  from {
    margin-left: 0;
  }

  to {
    margin-left: -100%;
  }
}
</style>

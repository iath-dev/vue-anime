<script setup>
import Carousel from '@/components/carousel.vue';
import { getTopAnime } from '@/services/jikan';
import { useQuery } from '@tanstack/vue-query';

const { data, isLoading } = useQuery({
  queryKey: ['trending'],
  queryFn: getTopAnime,
});
</script>

<template>
  <Carousel />
  <section class="container mx-auto px-4 py-6">
    <div class="flex flex-col gap-2.5">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold tracking-tight uppercase">
          Trending NOW
        </h1>
        <router-link to="/trending" class="link-secondary text-sm"
          >view all</router-link
        >
      </div>
      <div v-if="isLoading" class="skeleton h-30 w-full"></div>
      <div
        v-if="data"
        class="flex w-full gap-3.5 overflow-x-hidden max-sm:[&>:nth-child(n+3)]:hidden max-md:[&>:nth-child(n+4)]:hidden max-lg:[&>:nth-child(n+5)]:hidden"
      >
        <div
          v-for="anime in data.data"
          class="relative flex aspect-[3/4] h-full flex-col"
        >
          <img
            :src="anime.images.webp.image_url"
            :alt="anime.title"
            class="object-cover"
          />
          <h1 class="absolute bottom-0 z-10 w-full truncate text-xl">
            {{ anime.title }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

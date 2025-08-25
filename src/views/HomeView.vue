<script setup>
import ControlCarousel from '@/components/ControlCarousel.vue';
import HomeSection from '@/components/HomeSection.vue';
import { getTopAnime, getCurrentSeason } from '@/services/jikan';
</script>

<template>
  <section
    class="container mx-auto flex w-full flex-col gap-4 overflow-x-hidden px-4 py-6"
  >
    <ControlCarousel />
    <HomeSection
      title="Trending Now"
      queryKey="trending"
      :queryFn="getTopAnime"
    />
    <HomeSection
      title="Season Now"
      queryKey="season"
      :queryFn="getCurrentSeason"
    />
  </section>
</template>

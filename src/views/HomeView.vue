<script setup>
import { getCurrentSeason, getUpcoming } from '@/api/service';
import ControlCarousel from '@/components/carousel/ControlCarousel.vue';
import { defineAsyncComponent } from 'vue';

const HomeSection = defineAsyncComponent(
  () => import('@/components/HomeSection.vue')
);
</script>

<template>
  <section
    class="container mx-auto flex w-full flex-col gap-4 overflow-x-hidden px-4 py-6"
  >
    <ControlCarousel />
    <div class="divider"></div>
    <HomeSection
      title="Season Now"
      queryKey="season"
      path="/season"
      :queryFn="() => getCurrentSeason({ limit: 10, continuing: true })"
    />
    <HomeSection
      title="Upcoming"
      queryKey="upcoming"
      path="/upcoming"
      :queryFn="() => getUpcoming({ limit: 10 })"
    />
  </section>
</template>

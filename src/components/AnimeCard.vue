<script setup lang="ts">
import type { Entry } from '@/interface/api/base';

const { entry } = defineProps<{
  entry: Entry;
}>();
</script>

<template>
  <div
    class="card card-sm rounded-2xl shadow-md transition-transform hover:scale-110"
  >
    <router-link
      :to="{
        name: 'anime-detail',
        replace: true,
        params: { id: entry.mal_id },
      }"
      class="contents"
    >
      <figure>
        <img
          :src="
            entry.images.jpg.image_url ??
            'https://placehold.co/300x400?text=No+Image'
          "
          :alt="entry.title"
          loading="lazy"
          class="aspect-square w-full rounded-t-2xl object-cover"
        />
      </figure>
      <div class="card-body">
        <h1 class="card-title line-clamp-2">{{ entry.title }}</h1>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import type { Anime } from '@/interface/api/anime';
import type { PaginatedResponse } from '@/interface/api/response';
import { useQuery } from '@tanstack/vue-query';

const props = defineProps<{
  title: string;
  queryKey: string;
  path: string;
  queryFn: () => Promise<PaginatedResponse<Anime>>;
}>();

const { data, isLoading } = useQuery({
  queryKey: [props.queryKey],
  queryFn: props.queryFn,
});
</script>
<template>
  <div class="flex w-full flex-col gap-2.5">
    <div class="flex items-center justify-between">
      <h1 class="text-lg font-semibold tracking-tight uppercase">
        {{ props.title }}
      </h1>
      <router-link :to="path" class="link-primary text-sm"
        >view all</router-link
      >
    </div>
    <div v-if="isLoading" class="skeleton h-30 w-full"></div>
    <div
      v-if="data"
      class="flex w-full items-center gap-3.5 overflow-x-auto overflow-y-hidden pb-4 max-sm:[&>:nth-child(n+3)]:hidden max-md:[&>:nth-child(n+4)]:hidden max-lg:[&>:nth-child(n+5)]:hidden max-xl:[&>:nth-child(n+7)]:hidden"
    >
      <div
        v-for="anime in data.data"
        class="group relative flex h-full cursor-pointer flex-col rounded-xl shadow"
      >
        <router-link
          :to="{ name: 'anime-detail', params: { id: anime.mal_id } }"
          class="contents"
        >
          <figure>
            <img
              :src="
                anime.images.jpg.image_url ??
                'https://placehold.co/300x400?text=No+Image'
              "
              :alt="anime.title"
              loading="lazy"
              class="aspect-[3/4] h-64 rounded-xl object-cover"
            />
          </figure>
          <div
            class="bg-base-100/75 absolute bottom-0 w-full translate-y-5 rounded-b-lg p-2 opacity-0 transition-transform group-hover:translate-y-0 group-hover:opacity-100"
          >
            <h1 class="line-clamp-1 text-xl">
              {{ anime.title }}
            </h1>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

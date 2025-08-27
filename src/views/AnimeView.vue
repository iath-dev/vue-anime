<script setup lang="ts">
import { getAnimeFull } from '@/services/jikan';
import { useQuery } from '@tanstack/vue-query';
import { computed, defineAsyncComponent, ref } from 'vue';
import { useRoute } from 'vue-router';

const Characters = defineAsyncComponent(
  () => import('@/components/AnimeCharacters.vue')
);
const Staff = defineAsyncComponent(() => import('@/components/AnimeStaff.vue'));
const Recommendations = defineAsyncComponent(
  () => import('@/components/AnimeRecommendations.vue')
);
const Pictures = defineAsyncComponent(
  () => import('@/components/AnimeImages.vue')
);

type Tab = 'details' | 'characters' | 'staff' | 'recommendations' | 'pictures';

const TABS: Record<Tab, string> = {
  details: 'Details',
  characters: 'Characters',
  staff: 'Staff',
  recommendations: 'Recommendations',
  pictures: 'Pictures',
};

const route = useRoute();

const animeId = computed(() => route.params.id as string);

const { data, isLoading } = useQuery({
  queryKey: ['anime', animeId],
  queryFn: () => getAnimeFull(animeId.value),
  enabled: !!animeId,
});

const activeTab = ref<Tab>('details');
</script>

<template>
  <div
    v-if="data"
    class="container mx-auto grid max-w-7xl grid-cols-4 items-end gap-6 p-4"
  >
    <figure class="col-span-full flex justify-center lg:col-span-1">
      <img
        v-if="data.data.images.jpg.large_image_url"
        :src="data.data.images.jpg.large_image_url"
        :alt="data.data.title"
        class="w-sm rounded-lg lg:w-[350px]"
      />
    </figure>
    <div class="col-span-full flex flex-col gap-3.5 lg:col-span-3">
      <h1 class="text-4xl">
        {{ data.data.titles.find((til) => til.type === 'Default')?.title }}
      </h1>
      <h2 class="text-lg text-gray-500">
        {{ data.data.titles.find((til) => til.type === 'Japanese')?.title }}
      </h2>
      <div class="inline-flex flex-wrap gap-2.5">
        <span class="badge badge-soft badge-primary">{{ data.data.type }}</span>
        <span
          :class="[
            'badge badge-soft',
            {
              'badge-success': data.data.status == 'Currently Airing',
              'badge-warning': data.data.status == 'Not yet aired',
              'badge-error': data.data.status == 'Finished Airing',
            },
          ]"
        >
          <div
            aria-label="status"
            :class="[
              'status',
              {
                'status-success': data.data.status == 'Currently Airing',
                'status-warning': data.data.status == 'Not yet aired',
                'status-error': data.data.status == 'Finished Airing',
              },
            ]"
          ></div>
          {{ data.data.status }}
        </span>
        <span
          v-for="demo in data.data.demographics"
          class="badge badge-info badge-soft"
        >
          {{ demo.name }}
        </span>
        <span v-for="genre in data.data.genres" class="badge badge-soft">
          {{ genre.name }}
        </span>
      </div>
    </div>
    <nav class="col-span-full flex w-full gap-4 overflow-x-auto">
      <button
        v-for="(val, key) in TABS"
        :key="key"
        :class="['btn', activeTab == key ? 'btn-soft btn-accent' : 'btn-ghost']"
        @click="activeTab = key"
      >
        {{ val }}
      </button>
    </nav>
    <div
      v-if="activeTab == 'details'"
      class="col-span-full flex w-full flex-col gap-4"
    >
      <p class="text-md">{{ data.data.synopsis }}</p>
      <iframe
        v-if="data.data.trailer.youtube_id"
        :src="`https://www.youtube.com/embed/${data.data.trailer.youtube_id}`"
        :title="data.data.titles[0].title"
        class="aspect-video w-full rounded-lg"
      ></iframe>
    </div>
    <Characters v-if="activeTab == 'characters'" />
    <Staff v-if="activeTab == 'staff'" />
    <Recommendations v-if="activeTab == 'recommendations'" />
    <Pictures v-if="activeTab == 'pictures'" />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

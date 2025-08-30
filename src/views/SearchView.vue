<script setup lang="ts">
import { searchAnime } from '@/api/service';
import {
  SEARCH_ORDER_BY,
  SEARCH_STATUS,
  SEARCH_TYPE,
  type SearchOrderBy,
  type SearchStatus,
  type SearchType,
} from '@/api/types/params';
import AnimeCard from '@/components/anime/AnimeCard.vue';
import { useInfiniteQuery } from '@tanstack/vue-query';
import { ref, Transition, TransitionGroup, watch } from 'vue';

const query = ref('');
const debounceQuery = ref('');
const order = ref<SearchOrderBy>('title');
const type = ref<SearchType | undefined>('tv');
const status = ref<SearchStatus | undefined>(undefined);

const fetchAnime = async ({ pageParam = 1 }) => {
  const res = await searchAnime({
    q: query.value,
    limit: 25,
    page: pageParam,
    order_by: order.value,
    status: status.value,
    type: type.value,
  });
  return res;
};

let timeout: ReturnType<typeof setTimeout> | null = null;
watch(query, (val) => {
  if (timeout) clearTimeout(timeout);
  timeout = setTimeout(() => {
    debounceQuery.value = val;
  }, 500); // medio segundo de debounce
});

const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
  useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['search', query, type, status, order],
    queryFn: fetchAnime,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.has_next_page
        ? lastPage.pagination.current_page + 1
        : undefined;
    },
  });

// --- 🔹 IntersectionObserver para infinite scroll ---
const loadMoreRef = ref<HTMLElement | null>(null);

const observer = new IntersectionObserver((entries) => {
  if (
    entries[0].isIntersecting &&
    hasNextPage.value &&
    !isFetchingNextPage.value
  ) {
    fetchNextPage();
  }
});

watch(loadMoreRef, (el, prev) => {
  if (prev) observer.unobserve(prev);
  if (el) observer.observe(el);
});
</script>

<template>
  <div class="container mx-auto flex flex-col gap-4 px-4 py-6">
    <div>
      <h1 class="mt-12 mb-6 text-7xl">Search</h1>
      <p class="font-tight mb-2 text-gray-500">
        Search and anime by name and apply the filters
      </p>
      <div class="mb-3 flex gap-3">
        <input
          type="search"
          v-model="query"
          placeholder="Search anime"
          class="input input-md w-full"
        />
        <details class="dropdown dropdown-end">
          <summary
            class="btn max-md:btn-square btn-outline btn-primary [&_span]:max-md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z"
              />
            </svg>
            <span>Filter</span>
          </summary>
          <Transition name="pop" tag="div">
            <ul
              class="menu dropdown-content bg-base-100 rounded-box menu-horizontal z-1 w-md p-2 shadow-sm"
            >
              <li>
                <h2 class="menu-title">Type</h2>
                <ul>
                  <li
                    v-for="value in SEARCH_TYPE"
                    @click="type = value"
                    :class="[
                      'hover:text-secondary cursor-pointer p-1 transition-colors first-letter:uppercase',
                      { 'text-primary': type == value },
                    ]"
                  >
                    {{ value }}
                  </li>
                </ul>
              </li>
              <li>
                <h2 class="menu-title">Order by</h2>
                <ul>
                  <li
                    v-for="value in SEARCH_ORDER_BY.filter(
                      (s) => s !== 'mal_id'
                    )"
                    @click="order = value"
                    :class="[
                      'hover:text-secondary cursor-pointer p-1 transition-colors first-letter:uppercase',
                      { 'text-primary': order == value },
                    ]"
                  >
                    {{ value }}
                  </li>
                </ul>
              </li>
              <li>
                <h2 class="menu-title">Status</h2>
                <ul>
                  <li
                    v-for="value in SEARCH_STATUS"
                    @click="status = value"
                    :class="[
                      'hover:text-secondary cursor-pointer p-1 transition-colors first-letter:uppercase',
                      { 'text-primary': status == value },
                    ]"
                  >
                    {{ value }}
                  </li>
                </ul>
              </li>
            </ul>
          </Transition>
        </details>
      </div>
      <TransitionGroup name="pop" tag="div" class="flex gap-3.5">
        <span
          class="badge badge-info badge-soft badge-lg cursor-pointer"
          v-if="type"
          @click="type = undefined"
        >
          Type: {{ type.toUpperCase() }}
          <svg
            class="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
        <span
          class="badge badge-info badge-soft badge-lg cursor-pointer"
          v-if="status"
          @click="status = undefined"
        >
          Status: {{ status.toUpperCase() }}
          <svg
            class="size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </span>
      </TransitionGroup>
    </div>

    <TransitionGroup
      name="grid"
      tag="div"
      v-if="data"
      class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <AnimeCard
        v-for="anime in data.pages.flatMap((page) => page.data) || []"
        :key="anime.mal_id"
        :entry="anime"
      >
        <div class="flex flex-wrap gap-2.5">
          <span
            class="badge badge-primary badge-soft badge-sm"
            v-for="demo in anime.demographics"
            >{{ demo.name }}</span
          >
          <span
            v-if="anime.rating"
            class="badge badge-info badge-soft badge-sm"
            >{{ anime.rating }}</span
          >
          <span v-if="anime.rank" class="badge badge-error badge-soft badge-sm">
            <svg
              class="size-[1em]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
              />
            </svg>
            {{ anime.rank }}</span
          >
          <span v-if="anime.score" class="badge badge-info badge-soft badge-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="size-[1em]"
            >
              <path
                fill="currentColor"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21z"
              /></svg
            >{{ anime.score }}</span
          >
        </div>
      </AnimeCard>
      <!-- Loader para infinite scroll -->
      <div
        v-if="!isFetchingNextPage"
        ref="loadMoreRef"
        class="flex aspect-square w-full items-center justify-center"
      ></div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
/* Animación de entrada/salida */
.grid-enter-active,
.grid-leave-active {
  transition: all 0.5s ease;
}

.grid-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.grid-enter-to {
  opacity: 1;
  transform: scale(1);
}

.grid-leave-from {
  opacity: 1;
  transform: scale(1);
}
.grid-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Animación de reordenamiento */
.grid-move {
  transition: transform 0.3s ease;
}

.pop-enter-active,
.pop-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.pop-enter-from,
.pop-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.pop-move {
  transition: transform 0.3s ease;
}
</style>

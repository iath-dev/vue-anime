<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import debounce from 'lodash.debounce';
import { useSearchStore } from '@/stores/searchStore';
import { useRouter } from 'vue-router';

const searchStore = useSearchStore();
const query = ref('');
const searchInput = ref<HTMLInputElement | null>(null);
const searchWrapper = ref<HTMLDivElement | null>(null);

const router = useRouter();

const handleKeyDown = (e: KeyboardEvent) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    searchInput.value?.focus();
  }
};

const handleClickOutside = (e: MouseEvent) => {
  if (searchWrapper.value && !searchWrapper.value.contains(e.target as Node)) {
    query.value = '';
  }
};

function search(q: string) {
  searchStore.search(q);
}

const debounceSearch = debounce(search, 500);

watch(query, (q) => {
  debounceSearch(q);
});

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  window.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
  window.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div class="relative" ref="searchWrapper">
    <label class="input" ref="searchInput">
      <svg
        class="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        v-model="query"
        class="grow"
        placeholder="Search..."
        @keyup.enter="router.push('/search')"
      />
      <kbd class="kbd kbd-sm">⌘</kbd>
      <kbd class="kbd kbd-sm">K</kbd>
    </label>
    <Transition name="pop">
      <div
        v-if="searchStore.loading || searchStore.results.length > 0"
        class="bg-base-100 border-base-300 absolute top-full left-0 z-10 mt-1 w-full rounded-b-lg border shadow-lg"
      >
        <div v-if="searchStore.loading" class="p-4 text-center">Loading...</div>
        <ul v-else class="divide-base-300 divide-y">
          <li
            v-for="anime in searchStore.results"
            :key="anime.mal_id"
            class="hover:bg-base-200 flex w-full items-center gap-3.5 p-2"
          >
            <router-link
              :to="{ name: 'anime-detail', params: { id: anime.mal_id } }"
              class="contents"
            >
              <img
                :src="anime.images.jpg.image_url!"
                :alt="anime.title"
                class="aspect-square h-12 rounded object-cover"
              />
              <div
                class="flex w-full flex-1 flex-col justify-start overflow-x-hidden [&_span]:truncate"
              >
                <span>{{ anime.title }}</span>
                <span class="text-sm text-gray-400">{{
                  anime.title_japanese
                }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
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
</style>

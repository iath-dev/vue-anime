<script setup lang="ts">
import AnimeCard from '@/components/AnimeCard.vue';
import { getUpcoming } from '@/services/jikan';
import { useInfiniteQuery } from '@tanstack/vue-query';
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  TransitionGroup,
  watch,
} from 'vue';

const sentinel = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

// Función para inicializar el observer
const initObserver = () => {
  if (observer && sentinel.value) {
    observer.unobserve(sentinel.value);
  }

  observer = new IntersectionObserver((entries) => {
    if (
      entries[0].isIntersecting &&
      hasNextPage.value &&
      !isFetchingNextPage.value &&
      !isLoading.value
    ) {
      fetchNextPage();
    }
  });

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }
};

// Inicializar el observer cuando el componente está montado
onMounted(() => {
  // Esperar a que el DOM se actualice antes de inicializar el observer
  nextTick(() => {
    initObserver();
  });
});

// Limpiar al desmontar
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

const fetchAnime = async ({ pageParam = 1 }) => {
  const res = await getUpcoming({
    limit: 25,
    page: pageParam,
  });
  return res;
};

const {
  data,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  isError,
  error,
  fetchNextPage,
} = useInfiniteQuery({
  initialPageParam: 1,
  queryKey: ['upcoming_series'],
  queryFn: fetchAnime,
  getNextPageParam: (lastPage) => {
    if (!lastPage || !lastPage.pagination) return undefined;

    return lastPage.pagination.has_next_page
      ? lastPage.pagination.current_page + 1
      : undefined;
  },
});

// Observar cambios en los datos para reconectar el observer
watch([data, hasNextPage], () => {
  nextTick(() => {
    if (sentinel.value && observer) {
      observer.unobserve(sentinel.value);
      observer.observe(sentinel.value);
    }
  });
});

const items = computed(() => {
  if (!data.value) return [];
  return data.value.pages.flatMap((page) => page.data);
});
</script>

<template>
  <div class="container mx-auto flex flex-col gap-6 p-4">
    <h1 class="col-span-full mb-4 text-4xl">Season Now</h1>
    <div v-if="isError" class="alert alert-error">
      {{ error }}
    </div>
    <TransitionGroup
      v-if="data"
      name="grid"
      tag="div"
      class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <AnimeCard :key="anime.mal_id" :entry="anime" v-for="anime in items" />
      <div
        ref="sentinel"
        v-if="!isFetchingNextPage && hasNextPage"
        class="skeleton aspect-square w-full bg-gray-400"
      ></div>
    </TransitionGroup>
    <!-- Sentinel -->
    <div class="w-full">
      <TransitionGroup
        tag="div"
        v-if="isLoading"
        class="skeleton grid w-full grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <div
          v-for="(_, index) in Array.from({ length: 12 })"
          :key="index"
          class="aspect-square rounded-lg bg-gray-600"
        ></div>
      </TransitionGroup>
      <Transition
        name="fade"
        v-else-if="!hasNextPage"
        class="alert alert-soft alert-info"
      >
        <span> No more results </span></Transition
      >
    </div>
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
</style>

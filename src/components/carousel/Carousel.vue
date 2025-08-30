<script setup>
import { getTopAnime } from '@/api/service';
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
    class="relative overflow-hidden py-2 [user-select:none]"
  >
    <div class="carousel-container flex">
      <div
        v-for="value in Array.from({ length: 2 })"
        class="carousel__content flex shrink-0"
      >
        <div
          v-for="anime in data.data"
          :key="anime.mal_id"
          class="card hover:bg-base-100 mx-2 flex shrink-0 flex-row overflow-x-hidden rounded-lg shadow hover:shadow-lg"
        >
          <router-link
            :to="{ name: 'anime-detail', params: { id: anime.mal_id } }"
            class="contents"
          >
            <figure>
              <img
                :src="anime.images.webp.large_image_url"
                :alt="anime.title"
                loading="lazy"
                @error="
                  (e) =>
                    (e.target.src =
                      'https://placehold.co/300x400?text=No+Image')
                "
                class="aspect-[3/4] h-96 object-cover"
              />
            </figure>
            <div class="flex max-w-xs flex-col gap-2.5 p-3">
              <h2 class="line-clamp-1 text-xl font-bold">{{ anime.title }}</h2>
              <span class="badge">
                <svg
                  class="size-[1em]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                {{ anime.score }}
              </span>
              <p class="line-clamp-4 text-sm">{{ anime.synopsis }}</p>
            </div>
          </router-link>
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

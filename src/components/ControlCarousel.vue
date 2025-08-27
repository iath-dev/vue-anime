<script setup>
import { getTopAnime } from '@/services/jikan';
import { useQuery } from '@tanstack/vue-query';

const { data, isLoading } = useQuery({
  queryKey: ['top'],
  queryFn: getTopAnime,
});
</script>

<template>
  <section
    v-if="!!data"
    class="carousel [&::scroll-button(right),&::scroll-button(left)]:btn [&::scroll-button(right),&::scroll-button(left)]:btn-accent [&::scroll-button(right),&::scroll-button(left)]:btn-square [scroll-snap-type]:x_mandatory container mx-auto flex w-full gap-4 overflow-x-auto scroll-smooth [anchor-name:--carousel] [scroll-marker-group:after] [&::scroll-button(left)]:translate-x-2/3 [&::scroll-button(left)]:content-['<'] [&::scroll-button(left)]:[position-area:left_center] [&::scroll-button(right)]:-translate-x-2/3 [&::scroll-button(right)]:content-['>'] [&::scroll-button(right)]:[position-area:right_center] [&::scroll-button(right),&::scroll-button(left)]:fixed [&::scroll-button(right),&::scroll-button(left)]:transition-colors [&::scroll-button(right),&::scroll-button(left)]:[position-anchor:--carousel] [&::scroll-button(right):disabled,&::scroll-button(left):disabled]:cursor-auto [&::scroll-button(right):disabled,&::scroll-button(left):disabled]:opacity-50 [&::scroll-marker-group]:flex [&::scroll-marker-group]:justify-center [&::scroll-marker-group]:gap-2"
  >
    <div
      v-for="anime in data.data"
      :key="anime.mal_id"
      class="[&::scroll-marker]:bg-primary [&::scroll-marker:target-current]:bg-accent flex-[0_0_20em] [scroll-snap-align:start] content-center rounded-xl text-center max-md:flex-[0_0_100%] [&::scroll-marker]:aspect-square [&::scroll-marker]:h-4 [&::scroll-marker]:rounded-full [&::scroll-marker]:content-['']"
    >
      <router-link
        :to="{ name: 'anime-detail', params: { id: anime.mal_id } }"
        class="contents"
      >
        <div
          class="card bg-base-100 image-full card-sm group aspect-auto shadow-sm"
        >
          <figure>
            <img
              :src="anime.images.webp.large_image_url"
              :alt="anime.title"
              class="aspect-video w-full md:aspect-square"
              loading="lazy"
              @error="
                (e) =>
                  (e.target.src = 'https://placehold.co/300x400?text=No+Image')
              "
            />
          </figure>
          <div class="card-body h-full">
            <h2 class="card-title line-clamp-1">
              {{ anime.title }}
            </h2>
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
            <div class="line-clamp-4 text-left">
              <p>{{ anime.synopsis }}</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.carousel::-webkit-scrollbar {
  display: none;
}
</style>

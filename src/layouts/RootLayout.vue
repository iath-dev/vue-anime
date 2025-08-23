<script setup>
import SearchInput from '@/components/search/SearchInput.vue';
import Aside from '@/components/ui/aside.vue';
import { useUiStore } from '@/stores/uiStore';

const ui = useUiStore();
</script>

<template>
  <div
    class="flex min-h-screen w-screen flex-col md:grid md:grid-cols-[auto_1fr] md:grid-rows-[auto_1fr_auto]"
  >
    <Aside />
    <header class="bg-base-100 col-span-1 p-4">
      <div class="mx-auto flex items-center gap-3.5">
        <button class="btn btn-ghost btn-md flex md:hidden" @click="ui.toggle">
          <svg
            class="size-[1.5em]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <SearchInput />
      </div>
    </header>
    <main class="bg-base-200 col-span-1 col-start-2 row-start-2 max-md:flex-1">
      <div class="mx-auto max-w-7xl p-6">
        <router-view />
      </div>
    </main>
    <footer className="bg-base-100 p-4 col-span-1">
      <div
        className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between"
      >
        <div class="flex flex-1 items-center gap-3.5">
          <figure>
            <img
              src="/logo.svg"
              alt="logo"
              class="aspect-square w-6 dark:invert"
            />
          </figure>
          <p class="w-full flex-1 truncate text-sm">
            Copyright © {{ new Date().getFullYear() }} - All right reserved
          </p>
        </div>
        <a href="https://github.com/iath-dev" target="_blank">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12.006 2a9.85 9.85 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.05 10.05 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.7 2.7 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.08 2.08 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.02 4.02 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.02 4.02 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.47 2.47 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.47 10.47 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.85 9.85 0 0 0 12.007 2Z"
                clip-rule="evenodd"
              />
            </svg>
          </figure>
        </a>
      </div>
    </footer>
  </div>
</template>

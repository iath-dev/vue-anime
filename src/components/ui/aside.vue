<script setup>
import { useUiStore } from '@/stores/uiStore';
import NavLink from '@/components/nav/NavLink.vue';

const ui = useUiStore();
</script>

<script>
const LINKS = Array.from({ length: 3 });
</script>

<template>
  <aside
    :class="[
      'border-base-300 bg-base-100 sticky top-0 z-10 row-span-3 flex h-screen w-[min(16rem,100%)] flex-col border-r shadow-xl transition-all duration-500 max-md:absolute',
      ui.open ? 'left-0' : 'max-md:-translate-x-full md:w-20',
    ]"
  >
    <section>
      <div
        :class="[
          'flex items-center justify-between gap-3.5 p-6 transition-transform duration-500',
          { 'md:flex-col': !ui.open },
        ]"
      >
        <div class="flex items-center justify-center gap-3.5">
          <figure class="aspect-square w-9 dark:invert">
            <img src="/logo.svg" alt="logo" class="aspect-square" />
          </figure>
          <h1
            :class="['text-xl font-light', { 'md:hidden md:w-0': !ui.open }]"
            :inert="!ui.open"
          >
            <span class="text-primary font-semibold">MAL</span>chemy
          </h1>
        </div>
        <label class="swap swap-rotate btn btn-square btn-outline">
          <input type="checkbox" v-model="ui.open" />
          <svg
            class="swap-on size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M20 22h2V2h-2v9H5.83l5.5-5.5l-1.41-1.42L2 12l7.92 7.92l1.41-1.42l-5.5-5.5H20z"
            />
          </svg>
          <svg
            class="swap-off size-[1em]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 2H2v20h2v-9h14.17l-5.5 5.5l1.41 1.42L22 12l-7.92-7.92l-1.41 1.42l5.5 5.5H4z"
            />
          </svg>
        </label>
      </div>
      <ul class="space-y-1 overflow-x-hidden px-4 py-2">
        <NavLink href="/" label="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M14.19 14.19L6 18l3.81-8.19L18 6m-6-4A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 8.9a1.1 1.1 0 0 0-1.1 1.1a1.1 1.1 0 0 0 1.1 1.1a1.1 1.1 0 0 0 1.1-1.1a1.1 1.1 0 0 0-1.1-1.1"
            />
          </svg>
        </NavLink>
        <NavLink href="/search" label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
            />
          </svg>
        </NavLink>
        <NavLink href="/season" label="Season">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9 10v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2zm2-7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zm0 16V8H5v11zM9 14v2H7v-2zm4 0v2h-2v-2zm4 0v2h-2v-2z"
            />
          </svg>
        </NavLink>
        <NavLink href="/upcoming" label="Upcoming">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M15 13h1.5v2.82l2.44 1.41l-.75 1.3L15 16.69zm4-5H5v11h4.67c-.43-.91-.67-1.93-.67-3a7 7 0 0 1 7-7c1.07 0 2.09.24 3 .67zM5 21a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h1V1h2v2h8V1h2v2h1a2 2 0 0 1 2 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 0 1-7 7c-1.91 0-3.64-.76-4.9-2zm11-9.85A4.85 4.85 0 0 0 11.15 16c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0 0 20.85 16c0-2.68-2.17-4.85-4.85-4.85"
            />
          </svg>
        </NavLink>
      </ul>
    </section>
  </aside>
  <div
    v-if="ui.open"
    :inert="!ui.open"
    class="bg-base-300/75 absolute inset-0 z-5 md:hidden"
    @click.once="ui.toggle"
  ></div>
</template>

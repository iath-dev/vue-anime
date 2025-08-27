<script setup lang="ts">
import type { NavLink } from '@/interface/nav';
import { useUiStore } from '@/stores/uiStore';

const props = defineProps<NavLink>();

const ui = useUiStore();
</script>

<template>
  <li
    :data-label="props.label"
    :class="[
      'hover:bg-base-200 flex w-full cursor-pointer items-center rounded p-3 transition-transform duration-500',
      {
        'before:text-base-content before:bg-base-200 before:absolute before:w-0 before:translate-x-4 before:overflow-x-hidden before:rounded-xl before:p-4 before:decoration-0 before:opacity-0 before:shadow-2xl before:transition-all before:duration-500 before:content-[attr(data-label)] hover:before:w-auto hover:before:translate-x-10 hover:before:opacity-100':
          !ui.open,
      },
    ]"
  >
    <router-link :to="props.href" class="contents">
      <span class="grid size-6 shrink-0 place-items-center">
        <slot></slot>
      </span>
      <span
        :class="['overflow-hidden transition-all', ui.open ? 'ml-3.5' : 'w-0']"
      >
        {{ props.label }}
      </span>
    </router-link>
  </li>
</template>

<!-- <style scoped>
li::before {
  content: attr(data-label);
  position: absolute;
  background-color: hsl(0, 0, 0);
  color: white;
  text-decoration: none;
  padding: 0.5em 1em;

}
</style> -->

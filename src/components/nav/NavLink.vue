<script setup lang="ts">
import type { NavLink } from '@/interface/nav';
import { useUiStore } from '@/stores/uiStore';

const props = defineProps<NavLink>();

const ui = useUiStore();
</script>

<template>
  <li
    class="hover:bg-base-200 flex w-full cursor-pointer items-center rounded p-3 transition-transform duration-500"
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

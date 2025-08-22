<script setup>
import { ref } from 'vue';

const display = ref(false);
</script>

<template>
  <div class="flex items-center justify-end gap-3.5">
    <input
      type="search"
      :inert="!display"
      :class="[
        'input input-primary input-md max-w-sm transition-all duration-300',
        display ? 'w-full opacity-100' : 'w-0 opacity-0',
      ]"
    />
    <button
      :class="[
        'btn btn-square btn-md hover:btn-primary',
        !display ? 'btn-ghost' : 'btn-primary btn-outline',
      ]"
      @click="display = !display"
    >
      <svg
        class="size-[1.2em]"
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
          d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        />
      </svg>
    </button>
  </div>
</template>

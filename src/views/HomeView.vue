<script setup>
const api = import.meta.env.VITE_API_URL;
</script>

<template>
  <section class="bg-primary h-72 w-full rounded-xl">carrousel</section>
  <section class="container mx-auto px-4 py-6">
    <div class="flex flex-col gap-2.5">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold tracking-tight uppercase">
          Trending NOW
        </h1>
        <a href="#" class="link-secondary text-sm">view all</a>
      </div>
      <div class="flex w-full bg-red-500">carrousel</div>
    </div>
  </section>
</template>

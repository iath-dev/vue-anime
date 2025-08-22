<script setup>
const api = import.meta.env.VITE_API_URL;
</script>

<template>
  <div>
    <h1 class="text-primary text-2xl md:text-4xl">Home View</h1>
    <p>{{ api }}</p>
  </div>
</template>

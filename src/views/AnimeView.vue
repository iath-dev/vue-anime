<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

const animeId = route.params.id;
</script>

<template>
  <h1>Anime {{ animeId }}</h1>
</template>

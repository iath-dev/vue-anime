import { createApp } from 'vue';
import '@/styles/global.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';

createApp(App).use(VueQueryPlugin).use(router).use(createPinia()).mount('#app');

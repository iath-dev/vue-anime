import '@/styles/global.css';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(VueQueryPlugin).use(router).use(createPinia()).mount('#app');

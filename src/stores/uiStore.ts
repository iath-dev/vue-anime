import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
  state: () => ({
    open: true,
  }),
  actions: {
    toggle() {
      this.open = !this.open;
    },
  },
});

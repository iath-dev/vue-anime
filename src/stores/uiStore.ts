import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', {
  state: () => ({
    open: false,
  }),
  actions: {
    toggle() {
      this.open = !this.open;
    },
  },
});

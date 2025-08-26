// composables/useIntersectionObserver.ts
import { onMounted, onUnmounted, ref } from 'vue';

export function useIntersectionObserver(callback: () => void) {
  const target = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        callback();
      }
    });
    if (target.value) observer.observe(target.value);
  });

  onUnmounted(() => {
    if (observer && target.value) observer.unobserve(target.value);
  });

  return target;
}

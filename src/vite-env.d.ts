/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'lodash.debounce' {
  import * as debounce from 'lodash.debounce';
  export default debounce;
}

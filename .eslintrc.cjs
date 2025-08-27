module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    // Reglas básicas/medias
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',

    // Vue
    'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
    'vue/html-self-closing': ['warn', { html: { void: 'always' } }],

    // Import sort
    'simple-import-sort/imports': 'warn',
    'simple-import-sort/exports': 'warn',

    // Tailwindcss
    'tailwindcss/classnames-order': 'warn', // ordena clases automáticamente
    'tailwindcss/no-custom-classname': 'off', // permite clases personalizadas
  },
};

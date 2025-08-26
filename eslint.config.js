
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import tailwindcss from 'eslint-plugin-tailwindcss';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  ...tailwindcss.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'warn',
      'no-debugger': 'warn',
      'vue/max-attributes-per-line': ['warn', { singleline: 3 }],
      'vue/html-self-closing': ['warn', { html: { void: 'always' } }],
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
    },
  },
];

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2021,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["simple-import-sort"],
  rules: {
    // Reglas básicas/medias
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "warn",
    "no-debugger": "warn",

    // Vue
    "vue/max-attributes-per-line": ["warn", { singleline: 3 }],
    "vue/html-self-closing": ["warn", { html: { void: "always" } }],

    // Import sort
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
  },
};
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],

    plugins: {
      js,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    extends: [
      "js/recommended",
    ],

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.vite.rules,
    },
  },
]);
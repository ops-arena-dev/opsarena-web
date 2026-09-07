import js from "@eslint/js";
import pluginQuery from "@tanstack/eslint-plugin-query";
import { defineConfig, globalIgnores } from "eslint/config";
import reactHooks from "eslint-plugin-react-hooks";
import { reactRefresh } from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["src/**/*.{ts,tsx}"],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite(),
      ...pluginQuery.configs["flat/recommended"],
    ],

    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
    },
  },

  {
    files: ["*.config.{js,mjs,ts}", "vite.config.ts"],

    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.node,
    },
  },
]);

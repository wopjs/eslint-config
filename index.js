import jsEslint from "@eslint/js";
import json from "@eslint/json";
import gitignore from "eslint-config-flat-gitignore";
import eslintConfigPrettier from "eslint-config-prettier";
import importX from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import tsEslint from "typescript-eslint";

export const defineConfig = tsEslint.config;

export default tsEslint.config(
  gitignore(),
  eslintConfigPrettier,
  {
    extends: [
      jsEslint.configs.recommended,
      ...tsEslint.configs.recommended,
      importX.flatConfigs.recommended,
      perfectionist.configs["recommended-natural"],
    ],
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        console: true,
        process: true,
      },
      parser: tsEslint.parser,
      sourceType: "module",
    },
    name: "typescript",
    plugins: {
      "@typescript-eslint": tsEslint.plugin,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "inline-type-imports" }],
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_",
        },
      ],
      "import-x/consistent-type-specifier-style": ["error", "prefer-inline"],
      "import-x/no-duplicates": ["error", { considerQueryString: true, "prefer-inline": true }],
      "import-x/no-unresolved": "off",
      "import-x/order": "off",
      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            "side-effect-style",
            "style",
            ["builtin-type", "external-type", "internal-type", "parent-type", "sibling-type", "index-type"],
            ["builtin", "external"],
            ["internal", "parent", "sibling", "index"],
            "object",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-interfaces": [
        "error",
        {
          groups: ["index-signature", "property", "method", "optional-property", "optional-method", "unknown"],
          ignoreCase: true,
          newlinesBetween: "ignore",
          order: "asc",
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: "keep",
          type: "natural",
        },
      ],
      "perfectionist/sort-object-types": [
        "error",
        {
          groups: ["index-signature", "optional-property", "optional-method", "property", "method", "unknown"],
          ignoreCase: true,
          newlinesBetween: "ignore",
          order: "asc",
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: "keep",
          type: "natural",
        },
      ],
      "prefer-const": "off",
      "sort-imports": "off",
    },
  },
  {
    extends: [json.configs.recommended],
    files: [
      "src/**/*.json",
      "scripts/**/*.json",
      "tsconfig.json",
      ".prettierrc.json",
      ".prettierrc",
      "typedoc.json",
      "mangle-cache.json",
    ],
    language: "json/json",
    name: "json",
    rules: {
      "json/sort-keys": ["error", "asc", { caseSensitive: true, minKeys: 2, natural: true }],
    },
  },
);

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      }
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: [
      'src/pages/pages.ts',
      'static/**',
      'dist/**',
      'rollup.config.mjs',
      '.config/coverage'
    ],
  },
  {
    settings: {
      react: {
        pragma: 'h',
        version: 'preact'
      }
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: "(^_|^h$|^Fragment$)"
        }
      ]
    }
  }
];

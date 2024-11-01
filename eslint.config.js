import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImportSort from "eslint-plugin-simple-import-sort";
import stylisticJs from '@stylistic/eslint-plugin-js'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default tseslint.config(
  { ignores: [ 'dist' ] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...pluginQuery.configs['flat/recommended'],
    ],
    files: [ '**/*.{ts,tsx}' ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      '@stylistic/js': stylisticJs,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@stylistic/js/semi': [ 'error', 'always',
        {
          omitLastInOneLineBlock: true,
          omitLastInOneLineClassBody: true,
        } ],
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': [
        "error",
        {
          groups: [
            [ "^\\u0000", "^node:", "^@?\\w" ],
            [ "^@mui/*" ],
            [ "^@/hooks.+", "^@/helpers.+", "^@/constants.+", "^@/interfaces/*", "types\\.(ts|tsx)$" ],
            [ "^@\\/[^\\/]+$", "^@/*.(ts|tsx)", "^", "^\\." ],
            [ "^@mui/material/styles.+", "styled\\.tsx$", "^.css$", ".scss$", "\\.module\\.(ts|tsx|css|scss)$" ],
          ],
        }
      ]
    },
  },
)

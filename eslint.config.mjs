import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.node },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
    },
  },
])

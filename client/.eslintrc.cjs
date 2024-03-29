/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  plugins: ['import', 'simple-import-sort', 'i18next'],
  extends: ['plugin:vue/vue3-essential', 'plugin:vue/vue3-recommended', 'plugin:vue/vue3-strongly-recommended', 'eslint:recommended', '@vue/eslint-config-typescript', '@vue/eslint-config-airbnb', 'plugin:i18next/recommended', 'plugin:vitest-globals/recommended', 'plugin:storybook/recommended'],
  env: {
    'vitest-globals/env': true
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': 'off',
    'semi': 'off',
    'quote-props': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'warn',
    'comma-dangle': ['error', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never',
    }],
    // Enable unused vars for types
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // Same for no-shadow
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    // Prevent import errors in test files
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          // Now eslint doesn't show an error when importing '@testing-library' in test files
          '**/*.test.ts', // actual test files
          'setup.vitest.ts', // tests setup config
          // Now eslint doesn't show an error when importing '@rushstack' in this file
          '.eslintrc.cjs',
          // And for vite.config.ts
          'vite.config.ts'
        ],
        'optionalDependencies': false
      }
    ],
    // Imports sorting
    'simple-import-sort/imports': [
      'error',
      {
        'groups': [
          // Ui
          ['^(@/layouts)(/.*|$)'],
          ['^(@/pages)(/.*|$)'],
          ['^(@/widgets)(/.*|$)'],
          ['^(@/components)(/.*|$)'],
          ['^(@/assets)(/.*|$)'],
          // Vue and Vue-router related packages come first.
          ['^vue|^vue-router', '^@?\\w'],
          // Real code
          ['^(@/router)(/.*|$)'],
          ['^(@/translation)(/.*|$)'],
          ['^(@/plugins)(/.*|$)'],
          ['^(@/composables)(/.*|$)'],
          ['^(@)(/.*|$)'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.?(css)$']
        ],
      }
    ],
    'simple-import-sort/exports': 'error',
    // Vue options
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      }
    ],
    'vue/attributes-order': ['error', {
      'order': [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        ['UNIQUE', 'SLOT'],
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ],
      'alphabetical': false,
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': {
        'max': 1,
      },
      'multiline': {
        'max': 1,
      },
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'always',
        'component': 'always',
      },
      'svg': 'always',
      'math': 'always',
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      'registeredComponentsOnly': true,
    }],
    'vue/no-irregular-whitespace': ['error', {
      'skipStrings': true,
      'skipComments': false,
      'skipRegExps': false,
      'skipTemplates': false,
      'skipHTMLAttributeValues': false,
      'skipHTMLTextContents': false,
    }],
  },
  settings: {
    'import/resolver': {
      'alias': {
        'map': [
          ['@', './src']
        ],
        extensions: ['.js', '.ts', '.vue'],
      },
    },
  },
}

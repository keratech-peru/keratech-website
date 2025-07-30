module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:astro/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      rules: {
        'prettier/prettier': 'error',
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}

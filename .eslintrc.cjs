module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  overrides: [],
  plugins: ['unicorn', 'prettier'],
  extends: ['plugin:unicorn/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'unicorn/filename-case': ['error', { cases: { pascalCase: true, camelCase: true } }],
    'unicorn/prevent-abbreviations': ['error', { ignore: [/\.d$/] }],
  },
};

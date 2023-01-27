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
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {},
};

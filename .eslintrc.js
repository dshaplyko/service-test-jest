module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  plugins: [],
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'mocha/no-mocha-arrows': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
  },
};

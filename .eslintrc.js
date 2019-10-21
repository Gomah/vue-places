module.exports = {
  root: true,
  parserOptions: {
    extends: 'standard',
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/vue',
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'es5', printWidth: 80 },
    ],
    'global-require': 0,
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never',
        vue: 'never',
      },
    ],
  },
  settings: {
    'import/core-modules': ['vue', '@vue/test-utils'],
  },
};

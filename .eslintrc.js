module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  'rules': {
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
  },
};

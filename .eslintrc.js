module.exports = {
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'windows'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'prettier/prettier': ['error', { singleQuote: true }],
    'prefer-template': 'error',
  },
};

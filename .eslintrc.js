module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  rules: {
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        bracketSameLine: true,
        singleQuote: true,
        quoteProps: 'consistent',
      },
    ],
  },
};

/* eslint-env node */
module.exports = {
  root: true,
  env: {
    'es6': true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-native/all',
    '@lacussoft',
    'plugin:jsx-control-statements/recommended',
  ],
  globals: {
    alert: true,
    console: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
    'react-native',
    'jsx-control-statements',
  ],
  rules: {
    'camelcase': ['error', { allow: ['grant_type', 'access_token', 'order_by'] }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-use-before-define': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-no-undef': ['error', { allowGlobals: true }],
    'react/prop-types': 'off',
    'react-native/no-color-literals': 'off',
  },
}

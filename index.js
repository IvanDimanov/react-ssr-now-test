require('core-js');
require('regenerator-runtime/runtime');

require('@babel/register')({
  ignore: [/(node_modules)/],
  plugins: [],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./index.es6');

'use strict';

const path = require('path');

const CSS_LOADER = require.resolve('css-loader');
const SASS_LOADER = require.resolve('sass-loader');
const STYLE_LOADER = require.resolve('style-loader');

module.exports = ({ config }) => {
  config.module
    .rule('scss')
      .test(/\.scss$/)
      .loader('style', STYLE_LOADER)
      .loader('css', CSS_LOADER)
      .loader('sass', SASS_LOADER);
};

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  serve: {
    clipboard: false,
    dev: {
      publicPath: '/',
    },
    host: '0.0.0.0',
  },
  devtool: 'cheap-eval-source-map',
  module: {
    rules: [
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});

const webpack = require('../../../../Library/Caches/typescript/2.9/node_modules/@types/webpack');
const merge = require('../../../../Library/Caches/typescript/2.9/node_modules/@types/webpack-merge');
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
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: () => [],
            },
          },
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});

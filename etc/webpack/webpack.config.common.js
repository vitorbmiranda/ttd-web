const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_ROOT = path.resolve('.');
const PATH_SOURCE = path.resolve('src/client');
const PATH_PUBLIC = path.resolve('public');
const PATH_INDEX_HTML = path.resolve(PATH_SOURCE, 'index.html');
const PATH_UI = path.resolve(PATH_SOURCE, 'lib/UI');
const PATH_IMAGES = path.resolve(PATH_SOURCE, 'images');
const PATH_STYLES = path.resolve(PATH_SOURCE, 'styles');
const NODE_ENV = process.env.NODE_ENV || 'local-dev';
const PATH_UTILS = path.resolve(PATH_SOURCE, 'lib/utils');
const PATH_CONSTANTS = path.resolve(PATH_SOURCE, 'constants');
const PATH_PROVIDERS = path.resolve(PATH_SOURCE, 'providers');
const cleanOptions = { root: PATH_ROOT };
const cleanPaths = [PATH_PUBLIC];

module.exports = {
  // babel-polyfill must be initialized here so the app works in production mode
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    path.join(PATH_SOURCE, 'main.js'),
  ],
  module: {
    rules: [
      // Babel loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|eot|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true,
          },
        }],
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: PATH_PUBLIC,
  },
  plugins: [
    // Injects env variables to our app
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
    }),
    // Clears old stuff
    new CleanWebpackPlugin(cleanPaths, cleanOptions),
    // Builds index.html
    new HtmlWebpackPlugin({
      template: PATH_INDEX_HTML,
      path: PATH_PUBLIC,
      filename: 'index.html',
      hash: true,
      minify: {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        useShortDoctype: true,
      },
    }),
  ],
  resolve: {
    alias: {
      UI: PATH_UI,
      Images: PATH_IMAGES,
      Utils: PATH_UTILS,
      Constants: PATH_CONSTANTS,
      Styles: PATH_STYLES,
      Providers: PATH_PROVIDERS,
    },
  },
};

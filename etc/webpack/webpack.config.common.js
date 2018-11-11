const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_ROOT = path.resolve('.');
const PATH_SOURCE = path.resolve('src/client');
const PATH_PUBLIC = path.resolve('public');
const PATH_INDEX_HTML = path.resolve(PATH_SOURCE, 'index.html');
const PATH_COMPONENTS = path.resolve(PATH_SOURCE, 'components');
const NODE_ENV = process.env.NODE_ENV || 'local-dev';
const cleanOptions = { root: PATH_ROOT };
const cleanPaths = [PATH_PUBLIC];

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    path.join(PATH_SOURCE, 'index.js'),
  ],
  module: {
    rules: [
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
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
    }),
    new CleanWebpackPlugin(cleanPaths, cleanOptions),
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
      Components: PATH_COMPONENTS,
    },
  },
};

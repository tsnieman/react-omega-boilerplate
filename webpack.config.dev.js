var path = require('path')
var webpack = require('webpack')

// Shared config for handling webpack loaders
// seamlessly in babel with webpack-for-babel-plugin.
var runtimeConfig = require('./runtime.webpack.config');

module.exports = Object.assign({}, runtimeConfig, {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',

    // Dev server w/hot loader setup
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:4200/',
    'webpack/hot/only-dev-server',

    // The application itself
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/,
      },
    ],

    loaders: [].concat(
      // Javascript
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        // include: path.join(__dirname, 'src'),
      },

      runtimeConfig.module.loaders
    ),
  },
})

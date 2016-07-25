var path = require('path')
var webpack = require('webpack')

// PostCSS plugins (build your own CSS!)
var autoprefixer = require('autoprefixer');
var hexrgba = require('postcss-hexrgba');
var partialImport = require('postcss-import');
var cssMixins = require('postcss-mixins');
var advancedVariables = require('postcss-advanced-variables');
var customSelectors = require('postcss-custom-selectors');
var colorFunctions = require('postcss-color-function');

// HtmlWebpackPlugin builds the index.html file for the app.
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',

  // Base directory used when resolving the 'entry' option
  context: __dirname,

  entry: [
    // Set up an ES6-ish environment
    'babel-polyfill',

    // The application itself
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    // Generate index.html from a template.
    new HtmlWebpackPlugin({
      title: 'Personal Playground',
      filename: 'index.html',
      template: 'src/index.template.html',
      favicon: path.join(__dirname, 'src', 'images', 'favicon.ico'),
      inject: 'body',
    }),

    // https://github.com/gaearon/redux-devtools#exclude-devtools-from-production-builds
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],

  resolve: {
    root: __dirname, // ABSOLUTE PATH ONLY
    modulesDirectories: ["node_modules", "src", "content"],
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/,
      },
    ],

    loaders: [
      // Javascript
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },

      // CSS (PostCSS)
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&localIdentName=[hash:base64]!postcss-loader',
      },

      // Json (as JS objects)
      {
        test: /\.json/,
        loader: 'json',
      },
    ]
  },

  postcss: function() {
    return [
      partialImport,
      cssMixins,
      advancedVariables,
      customSelectors,
      colorFunctions,
      hexrgba,
      autoprefixer({ browsers: ['last 2 versions'] }),
    ]
  },
}

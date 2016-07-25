var path = require('path')
var webpack = require('webpack')

// PostCSS plugins (build your own CSS!)
var postcssNested = require('postcss-nested');
var autoprefixer = require('autoprefixer');
var hexrgba = require('postcss-hexrgba');
var advancedVariables = require('postcss-advanced-variables');
var customSelectors = require('postcss-custom-selectors');
var colorFunctions = require('postcss-color-function');
var postcssImport = require('postcss-import');

// HtmlWebpackPlugin builds the index.html file for the app.
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExportFilesWebpackPlugin = require('export-files-webpack-plugin'); // allows use of HtmlWebpackPlugin w/ devserver

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  // Base directory used when resolving the 'entry' option
  context: __dirname,

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

  resolve: {
    root: __dirname, // ABSOLUTE PATH ONLY
    modulesDirectories: [
      "node_modules",
      "src",
    ],
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
        // include: path.join(__dirname, 'src'),
      },

      // CSS (PostCSS)
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?importLoaders=1&modules&localIdentName=[hash:base64]!postcss-loader',
      },

      // Images (will inline as "Data URIs" when images are small enough)
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },

  postcss: function() {
    return [
      postcssImport({
        addDependencyTo: webpack,
        path: [
          './src'
        ],
      }),
      advancedVariables,
      customSelectors,
      postcssNested,
      hexrgba,
      colorFunctions,
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ]
  },
}

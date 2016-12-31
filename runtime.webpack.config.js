// PostCSS plugins (build your own CSS!)
var postcssNested = require('postcss-nested');
var autoprefixer = require('autoprefixer');
var hexrgba = require('postcss-hexrgba');
var advancedVariables = require('postcss-advanced-variables');
var customSelectors = require('postcss-custom-selectors');
var colorFunctions = require('postcss-color-function');
var postcssImport = require('postcss-import');

// TODO unify with webpack.config.dev|prod.js
module.exports = {
  // Base directory used when resolving the 'entry' option
  context: __dirname,

  resolve: {
    root: __dirname, // ABSOLUTE PATH ONLY
    modulesDirectories: [
      "node_modules",
      "src",
    ],
  },

  output: {
    // YOU NEED TO SET libraryTarget: 'commonjs2'
    // for webpack-for-babel-plugin
    libraryTarget: 'commonjs2',
  },

  postcss: function(webpack) {
    return [
      postcssImport({
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

  module: {
    loaders: [
      // CSS (PostCSS)
      {
        test: /\.css$/,
        // NOTE: changed localIdentName for testing purposes.
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[hash:base64]',
          'postcss-loader',
          __dirname + '/remove-composes',
        ],
      },

      // Images (will inline as "Data URIs" when images are small enough)
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
};

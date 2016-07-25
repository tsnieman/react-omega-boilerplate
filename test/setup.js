require('babel-register')();


var jsdom = require('jsdom').jsdom;


var exposedProperties = ['window', 'navigator', 'document'];


global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});


global.navigator = {
  userAgent: 'node.js'
};


documentRef = document;

// Set 'src' as a node path (for resolving the 'src' folder)
var path = require('path');
process.env.NODE_PATH = path.join(__dirname, '..', 'src');
require('module').Module._initPaths();

var hook = require('css-modules-require-hook')

hook({
  extensions: ['.css'],
  generateScopedName: '[hash:base64]',
  // Might need this PostCSS plugin loading sometime...
  // https://github.com/css-modules/css-modules-require-hook#adding-custom-postcss-plugins
});

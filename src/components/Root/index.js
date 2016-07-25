// Use DefinePlugin (Webpack) together with Uglify
// to strip the dev branch in prod build.
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod'); // eslint-disable-line global-require
} else {
  module.exports = require('./Root.dev'); // eslint-disable-line global-require
}

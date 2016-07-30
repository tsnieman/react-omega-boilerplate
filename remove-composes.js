// Custom webpack loader which simply removes any use of 'composes'.
// This is because this bug https://github.com/istarkov/babel-plugin-webpack-loaders/issues/97
// causing issues with testing.
module.exports = function removeComposes(source) {
  if (process.env.NODE_ENV === 'test') {
    const hasComposes = source.indexOf('composes') > 0;
    if (!hasComposes) return source;

    var numOfOccurences = source.match(/composes/g).length;

    var modifiedSource = source;
    for (var i = 0; i < numOfOccurences; i++) {
      var startIndex = modifiedSource.indexOf('composes');
      var endIndex = modifiedSource.indexOf('\n', startIndex);
      var removableLength = (endIndex - startIndex);
      var toRemove = modifiedSource.substr(startIndex, removableLength);
      modifiedSource = modifiedSource.replace(toRemove, '');
    }

    return modifiedSource;
  }

  return source;
};

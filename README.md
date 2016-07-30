# Pieces
- babel
- webpack
- react
- redux
- redux-saga
- css modules (via css-loader)
- post css
  - autoprefixer
  - various other plugins
- redbox
- webfontloader
- isomorphic-fetch
- eslint
- redux-devtools
  - redux-devtools-dock-monitor
  - redux-devtools-log-monitor

# Oddities
**Note about warning which says "[react-router] You cannot change ; it will be ignored",**
-- this warning is harmless, we just can't disable it.
Discussion/PR: https://github.com/gaearon/react-hot-loader/pull/240#issuecomment-225879719

**Note about Redbox:** it won't hot-reload to show the red screen of death (rsod),
as react itself needs to be patch.
Discussion/PR: https://github.com/facebook/react/pull/6020

**css modules + `composes from` + testing = BAD**
Relevant bug: https://github.com/istarkov/babel-plugin-webpack-loaders/issues/97
The solution in this repo: [a custom loader](/blob/master/remove-composes.js) which removes 'composes' in test mode entirely.
This means that you shouldn't count on testing 'composes'-related stuff.

# TODO
- [ ] error system (well, more like a general 'alert' system)
- [ ] add explanations about each tech in [Pieces section](#Pieces)
- [x] testing
  - jest + webpack : https://facebook.github.io/jest/docs/tutorial-webpack.html
  - enzyme + jest + mocha(|ava|tape|jasmine) : https://semaphoreci.com/community/tutorials/testing-react-components-with-enzyme-and-mocha
    - particularly interested in ava (avajs)
  - [ ] investigate [snapshot testing in jest](http://facebook.github.io/jest/blog/2016/07/27/jest-14.html)
  - [ ] [make react's proptype warnings throw errors while testing](https://gist.github.com/jsdf/6fc35890e4ed4a219072)
  - [ ] investigate [producthunt/chai-enzyme](/producthunt/chai-enzyme) ?
  - [writing redux tests](/reactjs/redux/blob/master/docs/recipes/WritingTests.md)
- test the prod config. (is probably very broken; the files are split where there should be differences for the most part, though)

# Credits / thanks
- Dan Abramov for redux, hot loader, and more. Dan's countless example projects and community discussion have been invaluable to my learning.
- My teammates at Spatially who have taught and shown me so much.
- github user @r31gN who wrote [this TDD guide](http://thereignn.ghost.io/a-step-by-step-tdd-approach-on-testing-react-components-using-enzyme/)
- github user @istarkov who made the awesome [babel-plugin-webpack-loaders](/istarkov/babel-plugin-webpack-loaders)

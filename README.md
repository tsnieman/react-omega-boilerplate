WIP Documentation can be found [in the `docs` directory](/docs). They're probably not much to look at right now.

# Install requirements
- Use a newer version of nodejs; I use `v6.3.1` (TODO be more specific about minimum requirement)
- Install [jest](https://github.com/facebook/jest) (used for unit testing) globally

# Oddities
**Note about warning which says "[react-router] You cannot change ; it will be ignored",**
-- this warning is harmless, we just can't disable it.
Discussion/PR: https://github.com/gaearon/react-hot-loader/pull/240#issuecomment-225879719

**Note about Redbox:** it won't hot-reload to show the red screen of death (rsod),
as react itself needs to be patch.
Discussion/PR: https://github.com/facebook/react/pull/6020

**css modules + `composes from` + babel-plugin-webpack-loaders = BAD**
Relevant bug: https://github.com/istarkov/babel-plugin-webpack-loaders/issues/97
The solution in this repo: [a custom loader](/blob/master/remove-composes.js) which removes 'composes' in test mode entirely.
This means that you shouldn't count on testing 'composes'-related stuff.

# Credits / thanks
- Dan Abramov for redux, hot loader, and more. Dan's countless example projects and community discussion have been invaluable to my learning.
- My teammates at Spatially who have taught and shown me so much.
- github user @r31gN who wrote [this TDD guide](http://thereignn.ghost.io/a-step-by-step-tdd-approach-on-testing-react-components-using-enzyme/)
- github user @istarkov who made the awesome [babel-plugin-webpack-loaders](/istarkov/babel-plugin-webpack-loaders)
- github user @dmfrancisco for their awesome [react icons example](http://dmfrancisco.github.io/react-icons/)

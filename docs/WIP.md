
# Doc sections
**Super WIP here.** This is mostly to outline / collect thoughts. Will (hopefully) update this in the near future.

## Setup and use
Stuff you'll want to install and/or know while setting up and using this boilerplate. See [README](/README.md) for now.

## Pieces
A list of the dependencies, what those technologies do, etc.
  - babel
  - webpack
  - react
  - react-hot-loader
  - redux
  - redux-saga
  - redux-devtools
    - redux-devtools-dock-monitor
    - redux-devtools-log-monitor
  - css modules (via css-loader)
  - post css
    - autoprefixer
    - various other plugins
  - redbox
  - webfontloader (EDIT: not used; remove from package? keep in docs as recommendation?)
  - isomorphic-fetch
  - eslint
  - chai
  - enzyme
  - jest
  - sinon (TODO actually use this dep)
  - nock (TODO actually use this dep)
  - jsdom (TODO am i using this anymore? remove from package? keep in docs as recommendation?)
  - lodash

## File organization
How the files in this boilerplate are organized

## Components
Basic documentation and examples. Mostly focused on non-app components (i.e. not `AppMessages`) and non-example components (i.e. not `StarButton`)
  - `BodyText`
  - `Button`
  - `Card`
  - `Checkbox`
  - `Icon`
  - `IconButton`
  - `Messages`

## App framework
A look into the inner workings of common app "framework", such as app error system or app messages system.
  - App messages: An action-and-reducer-driven messaging system which can be used to display things like errors, notifications, or other such "top level messaging".
    - Messages are dismissable.
    - Displayed by `AppMessages` component.
    - Integrated with the app errors system.
  - App errors: An action-and-saga-driven error tracking/handling system which can be used to track or handle errors.
    - Error tracking (for analytics, dev notifications, etc) can all be handled in a single place.
    - Integrated with the app messages system.

# Oddities
See [README](/README.md) for now.

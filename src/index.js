/* global document */

// Basics
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import { AppContainer } from 'react-hot-loader';
import Root from 'components/Root';
import Redbox from 'redbox-react';

// Store configuration
import configureStore from 'store/configureStore';

const store = configureStore();

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer errorReporter={Redbox}>
    <Root
      store={store}
    />
  </AppContainer>,
  rootEl
);

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/Root');

    ReactDOM.render(
      <AppContainer errorReporter={Redbox}>
        <NextApp
          store={store}
        />
      </AppContainer>,
      rootEl
    );
  });
}
/* eslint-enable global-require */

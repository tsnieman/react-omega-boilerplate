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

// Routing
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
const history = syncHistoryWithStore(browserHistory, store, {
  // Because react-router-redux expects top-level 'routing'
  // (i.e. state.routing) in the redux store. This app is
  // configured with that nested in state.app.routing.
  selectLocationState: (state) => state.app.routing,
});

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer errorReporter={Redbox}>
    <Root
      store={store}
      history={history}
    />
  </AppContainer>,
  rootEl
);

/* eslint-disable global-require */
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./components/Root').default;

    ReactDOM.render(
      <AppContainer errorReporter={Redbox}>
        <NextApp
          store={store}
          history={history}
        />
      </AppContainer>,
      rootEl
    );
  });
}
/* eslint-enable global-require */

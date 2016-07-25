import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Root.css';

// Components
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import DevTools from 'containers/DevTools';
import routes from 'routes';

const Root = ({ history, store }) => (
  <Provider store={store}>
    <div styleName="wrapper">
      <Router history={history} routes={routes} />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object,
};

export default cssModules(Root, styles);

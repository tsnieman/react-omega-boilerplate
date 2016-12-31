import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Root.css';

// Components
import App from 'components/App';
import { Provider } from 'react-redux';
import DevTools from 'containers/DevTools';

const Root = ({ /* history, */ store }) => (
  <Provider store={store}>
    <div styleName="wrapper">
      <App />
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default cssModules(Root, styles);

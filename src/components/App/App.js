// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';

// TODO eslint-disable is used here because i can't stop the "no duplicate import" bullshit.
/* eslint-disable */
import './App.css'; // Global site styling (reset, typography, etc)
import styles from './App.css'; // Styles for this component (via css modules)
/* eslint-enable */

/*
import WebFont from 'webfontloader'; // Site font loader
WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700'],
  },
});
*/

const App = (props) => {
  const {
    children,
  } = props;

  return (
    <div styleName="app-wrapper">
      <div styleName="app-content">
        {children}
      </div>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object,
};

export default cssModules(App, styles);

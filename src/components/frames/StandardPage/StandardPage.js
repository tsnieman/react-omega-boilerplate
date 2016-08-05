// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './StandardPage.css';

const StandardPage = ({ children }) => (
  <div styleName="page">
    {children}
  </div>
);

StandardPage.propTypes = {
  children: PropTypes.any, // don't isRequired here; children from React-Router won't register.
};

export default cssModules(StandardPage, styles);

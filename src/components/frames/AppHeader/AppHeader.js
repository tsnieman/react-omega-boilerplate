// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './AppHeader.css';

// Components
import AppMessages from 'containers/AppMessages';
import Icon from 'components/Icon';
import { Link } from 'react-router';

const AppHeader = ({ children }) => (
  <div styleName="frame">
    <header styleName="header">
      <nav>
        {/* TODO route helper */}
        <Link to={'/'}>
          <Icon icon="home">Home</Icon>
        </Link>

        <Link to={'/about'}>
          <Icon icon="info">About</Icon>
        </Link>
      </nav>
    </header>

    <AppMessages styleName="messages" />

    {children}
  </div>
);

AppHeader.propTypes = {
  children: PropTypes.any, // don't isRequired here; children from React-Router won't register.
};

export default cssModules(AppHeader, styles);

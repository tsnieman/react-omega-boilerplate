// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Home.css';

// Components
import Icon from 'components/Icon';
import { Link } from 'react-router';

const Home = () => (
  <div styleName="page">
    <h1>Home</h1>

    <nav>
      <Link to={'/about'}>
        <Icon icon="info" /> About
      </Link>
    </nav>
  </div>
);

Home.propTypes = {
  TODO: PropTypes.any,
};

export default cssModules(Home, styles);

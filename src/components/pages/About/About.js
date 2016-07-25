// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './About.css';

// Components
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const About = () => (
  <div styleName="page">
    About
  </div>
);

About.propTypes = {
  TODO: PropTypes.any,
};

export default cssModules(About, styles);

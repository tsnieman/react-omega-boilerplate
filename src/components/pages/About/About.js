// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './About.css';

// Components
import GithubUser from 'containers/GithubUser';
// import Icon from 'components/Icon';
// import { Link } from 'react-router';

const About = () => (
  <div styleName="page">
    <h1>About</h1>

    <GithubUser username="tsnieman" />
  </div>
);

About.propTypes = {
  TODO: PropTypes.any,
};

About.defaultProps = {
};

export default cssModules(About, styles);

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
    <div styleName="intro">
      <h1>About</h1>
      <p>Humans who have contributed to this repo.</p>
      <small>
        Note: loading intentionally delayed (less than 2 seconds)
        to show off the fancy loading effect.
      </small>
    </div>

    <ul>
      <li styleName="human">
        <GithubUser username="tsnieman" />
      </li>
    </ul>
  </div>
);

About.propTypes = {
  TODO: PropTypes.any,
};

About.defaultProps = {
};

export default cssModules(About, styles);

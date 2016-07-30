// Basics
import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Home.css';

// Components
import Button from 'components/Button';
import Card from 'components/Card';
import Icon from 'components/Icon';
import { Link } from 'react-router';

const Home = () => (
  <div styleName="page">
    <header styleName="header">
      <h1>Home</h1>

      <nav>
        {/* TODO route helper */}
        <Link to={'/about'}>
          <Icon icon="info" /> About
        </Link>
      </nav>
    </header>

    <Card.Wrapper>
      <Card.Body>
        This is Card.Body text.

        <br />

        <a href="#">Link test</a>

        <br />

        <Button>Just a button</Button>

        <Button to="/about">Button[to]</Button>
      </Card.Body>
    </Card.Wrapper>
  </div>
);

Home.propTypes = {
  TODO: PropTypes.any,
};

export default cssModules(Home, styles);

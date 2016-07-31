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

    <Card.Wrapper styleName="main-card">
      <Card.Title>
        Card Title
      </Card.Title>

      <Card.Body>
        <p>This is Card.Body text.</p>
        <p>Test 2nd paragraph.</p>
        <a href="#">Link test</a>
      </Card.Body>

      <Card.Actions>
        <Button>Just a button</Button>
        <Button to="/about">Button[to]</Button>
      </Card.Actions>
    </Card.Wrapper>

    <Card.Wrapper styleName="card">
      <Card.Title>
        Title-only
      </Card.Title>
    </Card.Wrapper>

    <Card.Wrapper styleName="card">
      <Card.Body>
        Body-only
      </Card.Body>
    </Card.Wrapper>

    <Card.Wrapper styleName="card">
      <Card.Actions>
        Actions-only
      </Card.Actions>
    </Card.Wrapper>
  </div>
);

Home.propTypes = {
  TODO: PropTypes.any,
};

export default cssModules(Home, styles);
